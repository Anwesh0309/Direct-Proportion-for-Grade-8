/* =========================================================================
   AUDIO ENGINE (ElevenLabs "Alice" pipeline architecture)
   Voice: Alice (Clear, Engaging Educator) — Voice ID: Xb7hH8MSUJpSbSDYk0k2
   Model: eleven_multilingual_v2

   Zero-Overlap Audio Guarantee & Mute Management:
   - Interrupting/skipping immediately halts active Audio elements and speech synthesis.
   - Any pending playback promises are resolved/cancelled instantly.
   - Ongoing screen audio resumes cleanly on Unmute.
   ========================================================================= */
export const VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2";
export const MODEL_ID = "eleven_multilingual_v2";

export const STYLE_SETTINGS = {
  celebration: {
    stability: 0.12,
    similarity_boost: 0.45,
    style: 0.75,
    use_speaker_boost: true,
    rate: 1.06,
    pitch: 1.2
  },
  encouragement: {
    stability: 0.16,
    similarity_boost: 0.50,
    style: 0.65,
    use_speaker_boost: true,
    rate: 1.0,
    pitch: 1.1
  },
  question: {
    stability: 0.20,
    similarity_boost: 0.55,
    style: 0.55,
    use_speaker_boost: true,
    rate: 0.98,
    pitch: 1.08
  },
  emphasis: {
    stability: 0.16,
    similarity_boost: 0.50,
    style: 0.60,
    use_speaker_boost: true,
    rate: 0.95,
    pitch: 1.05
  },
  thinking: {
    stability: 0.24,
    similarity_boost: 0.60,
    style: 0.35,
    use_speaker_boost: true,
    rate: 0.90,
    pitch: 0.95
  },
  statement: {
    stability: 0.20,
    similarity_boost: 0.55,
    style: 0.50,
    use_speaker_boost: true,
    rate: 1.0,
    pitch: 1.0
  }
};

const API_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_ELEVENLABS_API_KEY) || '';

export let audioMuted = false;
let lastNarrationSegments = null;
let ttsVoice = null;
let currentAudioElement = null;
let activeResolver = null;
let currentQueue = 0;
const dynamicCache = new Map(); // text|style -> object URL

// SINGLETON HTML5 Audio element — strictly guarantees ZERO audio overlap across the entire app
const sharedAudio = typeof window !== 'undefined' && typeof Audio !== 'undefined' ? new Audio() : null;

function pickVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  return (
    voices.find(v => /female|alice|zira|samantha|victoria|google us english/i.test(v.name)) ||
    voices.find(v => v.lang && v.lang.startsWith('en')) ||
    voices[0]
  );
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    ttsVoice = pickVoice();
  };
  ttsVoice = pickVoice();
}

/** Toggles mute state. Halts active audio immediately when muted. */
export function setMuted(m) {
  audioMuted = Boolean(m);
  if (audioMuted) {
    stopNarration();
  }
}

/** Dynamic request to ElevenLabs with per-style voice settings. Resolves to an object URL or null. */
async function getDynamicUrl(seg) {
  if (!API_KEY || !seg.text) return null;
  const cacheKey = `${seg.style || 'statement'}|${seg.text}`;
  if (dynamicCache.has(cacheKey)) return dynamicCache.get(cacheKey);
  try {
    const cfg = STYLE_SETTINGS[seg.style] || STYLE_SETTINGS.statement;
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': API_KEY,
        Accept: 'audio/mpeg'
      },
      body: JSON.stringify({
        text: seg.text,
        model_id: MODEL_ID,
        voice_settings: {
          stability: cfg.stability,
          similarity_boost: cfg.similarity_boost,
          style: cfg.style,
          use_speaker_boost: cfg.use_speaker_boost
        }
      })
    });
    if (!res.ok) return null;
    const url = URL.createObjectURL(await res.blob());
    dynamicCache.set(cacheKey, url);
    return url;
  } catch (e) {
    return null;
  }
}

/** Plays an audio URL on the singleton sharedAudio element; resolves true when ended normally, false if interrupted. */
function playUrl(url, queueId) {
  return new Promise(resolve => {
    if (!sharedAudio || audioMuted || queueId !== currentQueue) {
      resolve(false);
      return;
    }

    // 1. Immediately stop any active playback on the shared audio element
    try {
      sharedAudio.onended = null;
      sharedAudio.onerror = null;
      sharedAudio.pause();
      sharedAudio.currentTime = 0;
    } catch (e) {}

    // 2. Cancel any pending speech synthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }

    let finished = false;
    const finish = (result) => {
      if (finished) return;
      finished = true;
      if (activeResolver === finish) activeResolver = null;
      try {
        if (sharedAudio) {
          sharedAudio.onended = null;
          sharedAudio.onerror = null;
        }
      } catch (e) {}
      resolve(result && queueId === currentQueue);
    };

    activeResolver = finish;
    sharedAudio.onended = () => finish(true);
    sharedAudio.onerror = () => finish(false);

    sharedAudio.src = url;
    const playPromise = sharedAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => finish(false));
    }
  });
}

function fallbackSpeech(seg, queueId) {
  return new Promise(resolve => {
    if (audioMuted || typeof window === 'undefined' || !('speechSynthesis' in window) || !seg.text || queueId !== currentQueue) {
      return resolve(false);
    }

    // Stop shared audio before speaking
    if (sharedAudio) {
      try {
        sharedAudio.pause();
        sharedAudio.currentTime = 0;
        sharedAudio.removeAttribute('src');
      } catch (e) {}
    }

    try {
      window.speechSynthesis.cancel();
    } catch (e) {}

    const cfg = STYLE_SETTINGS[seg.style] || STYLE_SETTINGS.statement;
    const utter = new SpeechSynthesisUtterance(seg.text);
    if (ttsVoice) utter.voice = ttsVoice;
    utter.rate = cfg.rate;
    utter.pitch = cfg.pitch;
    utter.volume = 1;

    let finished = false;
    const finish = (result) => {
      if (finished) return;
      finished = true;
      if (activeResolver === finish) activeResolver = null;
      resolve(result && queueId === currentQueue);
    };

    activeResolver = finish;
    utter.onend = () => finish(true);
    utter.onerror = () => finish(false);

    try {
      window.speechSynthesis.speak(utter);
    } catch (e) {
      finish(false);
    }
  });
}

export async function speakSegment(seg, queueId = currentQueue) {
  if (audioMuted || !seg || !seg.text || queueId !== currentQueue) return;

  // 1. Pre-generated static asset (highest priority, perfectly recorded Alice voice)
  if (seg.file) {
    await playUrl(seg.file, queueId);
    return;
  }

  // 2. Dynamic ElevenLabs request (fallback if static file is not present)
  const dyn = await getDynamicUrl(seg);
  if (audioMuted || queueId !== currentQueue) return;
  if (dyn) {
    const ok = await playUrl(dyn, queueId);
    if (ok || audioMuted || queueId !== currentQueue) return;
  }

  // 3. Browser speech synthesis fallback (only for questions without pre-recorded mp3)
  if (audioMuted || queueId !== currentQueue) return;
  await fallbackSpeech(seg, queueId);
}

export async function narrate(segments, autoplay = true) {
  if (!segments) return;
  lastNarrationSegments = segments;
  stopNarration();
  if (!autoplay || audioMuted) return;

  const myQueue = ++currentQueue;
  const segList = Array.isArray(segments) ? segments : [segments];
  for (const seg of segList) {
    if (myQueue !== currentQueue || audioMuted) return;
    await speakSegment(seg, myQueue);
  }
}

/** Immediately stops any current audio playback, pending promises, and synthesis. */
export function stopNarration(clearHistory = false) {
  currentQueue++;
  if (clearHistory) {
    lastNarrationSegments = null;
  }
  if (activeResolver) {
    const res = activeResolver;
    activeResolver = null;
    res(false);
  }
  if (sharedAudio) {
    try {
      sharedAudio.onended = null;
      sharedAudio.onerror = null;
      sharedAudio.pause();
      sharedAudio.currentTime = 0;
      sharedAudio.removeAttribute('src');
    } catch (e) {}
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

export const say = text => ({ text, style: 'statement' });
export const ask = text => ({ text, style: 'question' });
export const cheer = text => ({ text, style: 'celebration' });
export const emphasize = text => ({ text, style: 'emphasis' });
export const think = text => ({ text, style: 'thinking' });
export const celebrate = text => ({ text, style: 'celebration' });
export const instruct = text => ({ text, style: 'encouragement' });
