import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration } from '../audio.js';

const STORY_SLIDES = [
  {
    id: 1,
    title: "Quantities That Travel Together",
    audioKey: "story_1",
    image: "/assets/images/slide1.svg",
    body: "Look around! The more fuel a car uses, the farther it travels. The more notebooks you buy, the more you pay. Some quantities rise and fall together. But how do we know if they change in a perfectly fair, predictable way?",
    quote: "Many quantities in daily life are linked together!",
    bubble: "Let's discover the secret rule behind quantities that grow together!"
  },
  {
    id: 2,
    title: "What is Direct Proportion?",
    audioKey: "story_2",
    image: "/assets/images/slide2.svg",
    body: "Two quantities are in direct proportion when they increase or decrease together at the same rate. If one quantity doubles, the other doubles too. If one is cut in half, the other is cut in half as well.",
    quote: "Double one, double the other!",
    bubble: "Same factor on both sides: that is the heart of direct proportion!"
  },
  {
    id: 3,
    title: "The Constant Ratio k",
    audioKey: "story_3",
    image: "/assets/images/slide3.svg",
    body: "One notebook costs 15 rupees. Two cost 30, three cost 45 and four cost 60. Divide each cost y by the number of notebooks x and you always get 15. This fixed number is called the constant of proportionality, k.",
    quote: "k = y ÷ x stays the same for every pair!",
    bubble: "If y ÷ x changes, it is NOT direct proportion!"
  },
  {
    id: 4,
    title: "Master Formula: y = kx",
    audioKey: "story_4",
    image: "/assets/images/slide4.svg",
    body: "Since y divided by x always equals k, we multiply both sides by x to get our master formula. Put x into the machine, multiply it by k, and out comes y. For 3 notebooks, y equals 15 times 3, which is 45 rupees.",
    quote: "y = k × x   (y is directly proportional to x)",
    bubble: "Find k once, then you can find y for ANY x!"
  },
  {
    id: 5,
    title: "The Graph Tells the Story",
    audioKey: "story_5",
    image: "/assets/images/slide5.svg",
    body: "Plot the pairs of a direct proportion and the points line up perfectly on a straight line that passes through the origin, (0, 0). The bigger the value of k, the steeper the line climbs.",
    quote: "Straight line + passes through (0, 0) = Direct Proportion",
    bubble: "A steeper line means a bigger k. Zero of one means zero of the other!"
  },
  {
    id: 6,
    title: "Real or Fake Proportion?",
    audioKey: "story_6",
    image: "/assets/images/slide6.svg",
    body: "Be a detective! Buying notebooks is direct proportion, because zero notebooks cost zero rupees. But a taxi charges a fixed starting fare plus a price per kilometre, so y divided by x keeps changing. That is not direct proportion.",
    quote: "Test it: is y ÷ x the same for EVERY pair, and does it start at zero?",
    bubble: "Divide, compare, and check the origin. Then you will know!"
  },
  {
    id: 7,
    title: "Solving with the Unitary Method",
    audioKey: "story_7",
    image: "/assets/images/slide7.svg",
    body: "If 5 pens cost 60 rupees, how much do 8 pens cost? Step 1: find the cost of ONE pen, 60 divided by 5, which is 12 rupees. Step 2: multiply by 8 to get 96 rupees. Find one, then scale to any amount!",
    quote: "Divide to find ONE unit, then multiply to find ANY amount!",
    bubble: "You can also write it as a balanced ratio: 60 ÷ 5 = ? ÷ 8!"
  },
  {
    id: 8,
    title: "Step Into the Simulation Lab!",
    audioKey: "story_8",
    image: "/assets/images/slide8.svg",
    body: "Awesome job! You now know ratios, the constant k, the formula y = kx, and the straight line graph. Step into the lab to mix smoothies, plot points, balance scales, and navigate maps!",
    quote: "Ready to test your direct proportion skills?",
    bubble: "Click below to enter the interactive lab!"
  }
];

export function StoryPhase({ muted, onDone, onSlideChange }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = STORY_SLIDES[slideIdx];

  // 1. Notify parent about current slide progress only when slideIdx changes
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(slideIdx + 1, STORY_SLIDES.length);
    }
  }, [slideIdx, onSlideChange]);

  // 2. Play audio narration for the active slide without re-render loop
  useEffect(() => {
    const audioData = AUDIO_MAP[slide.audioKey];
    if (audioData) {
      narrate(audioData, !muted);
    }
    return () => stopNarration();
  }, [slideIdx, muted]);

  const goNext = () => {
    stopNarration();
    if (slideIdx < STORY_SLIDES.length - 1) {
      setSlideIdx(i => i + 1);
    } else {
      onDone();
    }
  };

  const goPrev = () => {
    stopNarration();
    if (slideIdx > 0) setSlideIdx(i => i - 1);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Story Card with Maximum Grade 4 Visual Legibility & Scaled Image */}
      <div className="w-full max-w-5xl max-h-[92vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Left Column: Extra Large Image Illustration */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 h-80 sm:h-[420px] md:h-[450px] w-full bg-black/40 flex items-center justify-center shrink-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Column: Extra Large Typography & Callout Pills */}
        <div className="flex flex-col items-start text-left justify-center gap-4.5 overflow-y-auto max-h-full py-1">
          {/* Slide Title */}
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-amber-400 leading-tight drop-shadow-md">
            {slide.title}
          </h2>

          {/* Body Narrative */}
          <p className="text-slate-100 text-xl sm:text-2xl leading-relaxed font-extrabold drop-shadow-sm">
            {slide.body}
          </p>

          {/* Pull-Quote Sparkle Pill */}
          <div className="w-full bg-[#1e0e45] border-2 border-amber-400/60 rounded-2xl px-6 py-3.5 text-center text-amber-300 font-display font-900 text-lg sm:text-xl flex items-center justify-center gap-3 shadow-lg">
            <span className="shrink-0 text-2xl">✨</span>
            <span className="leading-snug">"{slide.quote}"</span>
            <span className="shrink-0 text-2xl">✨</span>
          </div>

          {/* Mascot Speech Bubble Pill */}
          <div className="flex items-center gap-4 w-full mt-1">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-4xl shadow-lg shrink-0">
              🦁
            </div>
            <div className="bg-white text-[#0c031d] rounded-2xl px-7 py-3.5 font-display font-900 text-lg sm:text-xl shadow-xl flex-1 text-left leading-snug">
              {slide.bubble}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Row: Back, Dots, Next */}
      <div className="w-full max-w-4xl flex items-center justify-between mt-3 z-20 shrink-0">
        <button
          onClick={goPrev}
          disabled={slideIdx === 0}
          className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/30 text-white font-display font-900 text-xl sm:text-2xl px-10 py-4 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xl hover:scale-105"
        >
          ← Back
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3.5">
          {STORY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopNarration();
                setSlideIdx(i);
              }}
              className={`rounded-full transition-all cursor-pointer ${
                i === slideIdx
                  ? 'w-4.5 h-4.5 bg-amber-400 shadow-[0_0_18px_rgba(250,204,21,0.9)]'
                  : 'w-3.5 h-3.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="btn-gold text-xl sm:text-2xl px-11 py-4 font-900 flex items-center gap-2 shadow-[0_0_35px_rgba(250,204,21,0.85)] hover:scale-105"
        >
          <span>{slideIdx === STORY_SLIDES.length - 1 ? 'Enter Lab 🧪' : 'Next'}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
