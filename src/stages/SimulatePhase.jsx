import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration } from '../audio.js';
import {
  SmoothieMixer, CyclingGraph, DoublingMachine,
  CompleteTable, PlotTheLine, RealOrFake,
  UnitaryLadder, BalanceScale, MapNavigator
} from '../components/SimActivities.jsx';

// 3 Interactive Simulation Activities per Station
//  Station 1 = explore & discover  |  Station 2 = try it on your own  |  Station 3 = apply to real problems
const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: Smoothie Blender Bar",
      desc: " Zara's stand sells fresh mango smoothies for ₹15. Pick cups, watch ingredients and register receipts update, and spot the fixed constant k!",
      icon: "🥤",
      Component: SmoothieMixer
    },
    {
      id: 2,
      title: "Activity 2: Coastal Cycling Journey",
      desc: " Zara rides along the coast at a steady speed k. Follow her on the road and observe how distance y and time x trace a line through (0, 0)!",
      icon: "🚴",
      Component: CyclingGraph
    },
    {
      id: 3,
      title: "Activity 3: Stationery Doubling Machine",
      desc: " 4 exam pencils cost ₹20. Press scaling factors (½, 2×, 3×, 5×) and observe how both pencils and price scale by the exact same multiplier!",
      icon: "✏️",
      Component: DoublingMachine
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Ribbon Craft Table",
      desc: " Zara buys decorative satin ribbon for festival gift boxes. Use the known clue (3 m costs ₹45) to find the unit rate k and complete the ledger!",
      icon: "🎀",
      Component: CompleteTable
    },
    {
      id: 2,
      title: "Activity 2: Rainwater Harvest Tank",
      desc: " The eco-tap fills the school rainwater drum at 2 litres every minute. Observe the water level at each minute and plot the coordinates on the grid!",
      icon: "🚰",
      Component: PlotTheLine
    },
    {
      id: 3,
      title: "Activity 3: Case File Detective",
      desc: " Inspect real-world receipts (apples, taxis, books, and child growth). Test if y ÷ x stays fixed and check the (0, 0) rule to stamp your verdict!",
      icon: "🕵️",
      Component: RealOrFake
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Bakery Truffle Ladder",
      desc: " Climb the unitary ladder: use the 8-truffle box price (₹96) to find 1 truffle, then scale up to custom orders with zero guessing!",
      icon: "🍫",
      Component: UnitaryLadder
    },
    {
      id: 2,
      title: "Activity 2: Road Trip Fuel Balance",
      desc: " Zara's car travels 90 km on 6 L of fuel. Balance the precision scale to find how far 10 L of fuel will take her on the mountain highway!",
      icon: "🚗",
      Component: BalanceScale
    },
    {
      id: 3,
      title: "Activity 3: Expedition Map Navigator",
      desc: " On Zara's hiking map, 3 cm represents 60 km. Use the scale ratio k = 20 to convert map distances to real distances and back!",
      icon: "🗺️",
      Component: MapNavigator
    }
  ]
};

const STATION_TABS = [
  { num: 1, icon: "🔬", name: "Station 1: Ratio Lab", sub: "Explore how x and y move" },
  { num: 2, icon: "🧮", name: "Station 2: Prove-It Studio", sub: "Fill, plot & sort" },
  { num: 3, icon: "🚀", name: "Station 3: Mission Control", sub: "Solve with k & ratios" }
];

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);

  const currentActivity = STATION_ACTIVITIES[station][actIdx];
  const ActivityComponent = currentActivity.Component;

  // Narrate the activity guide audio whenever the station or activity changes
  useEffect(() => {
    const actKey = `sim_${station}_${actIdx + 1}`;
    const stationKey = `sim_${station}`;
    const audioData = AUDIO_MAP[actKey] || AUDIO_MAP[stationKey];
    if (audioData) narrate(audioData, !muted);
    return () => stopNarration();
  }, [station, actIdx, muted]);

  const nextActivity = () => {
    stopNarration();
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    stopNarration();
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {STATION_TABS.map(t => (
                <button
                  key={t.num}
                  onClick={() => {
                    stopNarration();
                    setStation(t.num);
                    setActIdx(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === t.num
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === t.num ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {t.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{t.name}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{t.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={() => {
                stopNarration();
                onNext();
              }}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Real-World Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0">
                <h3 className="font-display font-900 text-2xl sm:text-3xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {/* Interactive activity (remounts per activity so state always resets) */}
              <ActivityComponent key={`${station}-${actIdx}`} muted={muted} />
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-4 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
