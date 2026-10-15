/* =========================================================================
   OFFLINE AUDIO GENERATION (ElevenLabs "Alice")
   Usage:   node scripts/generate_audio.js           (skips files that exist)
            node scripts/generate_audio.js --force   (regenerates everything)
   Reads every entry in src/audioMap.js, calls ElevenLabs text-to-speech with
   the per-style voice settings and saves public/assets/audio/<key>.mp3.
   API key: VITE_ELEVENLABS_API_KEY in .env.local (or the shell environment).
   ========================================================================= */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'audio');

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice — Clear, Engaging Educator
const MODEL_ID = 'eleven_multilingual_v2';

const VOICE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true }
};

function loadEnvLocal() {
  const envPath = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  loadEnvLocal();
  const apiKey = process.env.VITE_ELEVENLABS_API_KEY;
  if (!apiKey) {
    console.error('Missing VITE_ELEVENLABS_API_KEY (add it to .env.local).');
    process.exit(1);
  }
  const force = process.argv.includes('--force');
  const { AUDIO_MAP } = await import(pathToFileURL(path.join(ROOT, 'src', 'audioMap.js')).href);
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const entries = Object.entries(AUDIO_MAP);
  let made = 0, skipped = 0, failed = 0;

  for (const [key, seg] of entries) {
    const fileName = path.basename(seg.file || `${key}.mp3`);
    const outPath = path.join(OUT_DIR, fileName);
    if (!force && fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
      skipped++;
      console.log(`- skip  ${fileName} (exists)`);
      continue;
    }
    const settings = VOICE_SETTINGS[seg.style] || VOICE_SETTINGS.statement;
    try {
      const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'xi-api-key': apiKey, Accept: 'audio/mpeg' },
        body: JSON.stringify({ text: seg.text, model_id: MODEL_ID, voice_settings: settings })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text()}`);
      fs.writeFileSync(outPath, Buffer.from(await res.arrayBuffer()));
      made++;
      console.log(`✓ made  ${fileName}  [${seg.style}]`);
    } catch (err) {
      failed++;
      console.error(`✗ FAIL  ${fileName}: ${err.message}`);
    }
    await sleep(500); // rate limit
  }
  console.log(`\nDone. generated: ${made}, skipped: ${skipped}, failed: ${failed}`);
}

main();
