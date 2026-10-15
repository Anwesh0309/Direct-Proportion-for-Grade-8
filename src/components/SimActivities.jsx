import React, { useState, useEffect } from 'react';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate } from '../audio.js';

/* =========================================================================
   SHARED UI HELPERS & SOUND EFFECTS
   ========================================================================= */
const BOX =
  'flex flex-col items-center gap-3 bg-[#170c36]/95 border-2 border-cyan-400/40 rounded-2xl p-3.5 sm:p-5 shadow-2xl flex-1 min-h-0 overflow-y-auto w-full';

function Banner({ ok, children }) {
  return (
    <div
      className={`p-3 sm:p-3.5 rounded-2xl text-xs sm:text-sm font-900 w-full text-center shadow-xl shrink-0 fade-in-up border-2 ${
        ok
          ? 'bg-emerald-950/90 text-emerald-300 border-emerald-400/70 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
          : 'bg-rose-950/90 text-rose-300 border-rose-400/70 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
      }`}
    >
      {children}
    </div>
  );
}

function HintBar({ text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col items-center gap-1.5 shrink-0 mt-1">
      <button
        onClick={() => setOpen(o => !o)}
        className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs sm:text-sm px-4 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 hover:scale-105"
      >
        <span>💡</span>
        <span>{open ? 'Hide Grade 7 Hint' : 'Show Grade 7 Hint'}</span>
      </button>
      {open && (
        <div className="p-3 bg-amber-950/95 border-2 border-amber-400/60 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shadow-lg">
          💡 <span className="text-white">{text}</span>
        </div>
      )}
    </div>
  );
}

function RatioChip({ label, value, tone = 'amber' }) {
  const tones = {
    amber: 'bg-amber-400/15 border-amber-400/60 text-amber-300',
    cyan: 'bg-cyan-400/15 border-cyan-400/60 text-cyan-300',
    green: 'bg-emerald-400/15 border-emerald-400/60 text-emerald-300',
    pink: 'bg-pink-400/15 border-pink-400/60 text-pink-300'
  };
  return (
    <div className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl border-2 font-display font-900 text-xs sm:text-sm ${tones[tone]} shadow-md`}>
      {label} <span className="text-white font-black">{value}</span>
    </div>
  );
}

const numInput =
  'bg-[#100624] border-2 border-cyan-400/70 rounded-xl px-2.5 py-1.5 text-white font-display font-900 text-base sm:text-lg text-center outline-none focus:border-amber-400 focus:shadow-[0_0_12px_rgba(250,204,21,0.5)] transition shadow-inner';

function useSfx(muted) {
  return {
    win: () => narrate(AUDIO_MAP.fb_sim_win, !muted),
    tryAgain: () => narrate(AUDIO_MAP.fb_sim_try, !muted)
  };
}

/* =========================================================================
   STATION 1 — RATIO LAB (Explore & Discover)
   ========================================================================= */

/* 1.1 SmoothieMixer: Zara's Tropical Fruit Smoothie Stand */
export function SmoothieMixer({ muted }) {
  const PRICE = 15; // ₹15 per smoothie
  const [n, setN] = useState(2);
  const [isBlending, setIsBlending] = useState(false);
  const [rows, setRows] = useState([
    { x: 1, y: 15, mangoes: 2, yogurt: 1 }
  ]);
  const { win } = useSfx(muted);
  const found = rows.length >= 4;

  const mangoCount = n * 2;
  const yogurtCount = n * 1;
  const totalCost = n * PRICE;

  const handleBlend = () => {
    setIsBlending(true);
    setTimeout(() => setIsBlending(false), 800);
    if (!rows.some(r => r.x === n)) {
      const next = [...rows, { x: n, y: totalCost, mangoes: mangoCount, yogurt: yogurtCount }].sort((a, b) => a.x - b.x);
      setRows(next);
      if (next.length === 4) win();
    }
  };

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-2 flex items-center justify-between gap-2 flex-wrap shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏪</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Zara’s Mango-Berry Stand · Every smoothie costs <span className="text-amber-300 font-black">₹15</span>
          </span>
        </div>
        <div className="text-[11px] sm:text-xs text-slate-300 font-bold bg-white/10 px-2.5 py-1 rounded-lg">
          Recipe: 2 Mangoes 🥭 + 1 Yogurt 🥛 = 1 Cup
        </div>
      </div>

      {/* Main Interactive Workstation: Blender Apparatus + Cash Register */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center shrink-0">
        
        {/* Left: Interactive Blender Apparatus (SVG) */}
        <div className="md:col-span-5 bg-[#120629] border-2 border-purple-400/40 rounded-2xl p-3 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
          <svg width="180" height="175" viewBox="0 0 180 175" className="shrink-0 drop-shadow-[0_0_15px_rgba(250,204,21,0.25)]">
            {/* Blender Glass Jar Outline */}
            <path
              d="M 45 35 L 135 35 L 122 135 L 58 135 Z"
              fill="rgba(56,189,248,0.08)"
              stroke="#38bdf8"
              strokeWidth="3"
            />
            {/* Measurement Graduations */}
            {[50, 70, 90, 110].map((ly, i) => (
              <g key={ly}>
                <line x1="50" y1={ly} x2="62" y2={ly} stroke="#94a3b8" strokeWidth="1.5" />
                <text x="65" y={ly + 3} fill="#94a3b8" fontSize="8" fontWeight="bold">{(4 - i) * 250}ml</text>
              </g>
            ))}
            {/* Liquid Fill Level (Dynamic height based on n) */}
            {(() => {
              const h = Math.min(95, n * 15);
              const topY = 135 - h;
              return (
                <g className={isBlending ? 'animate-pulse' : ''}>
                  <path
                    d={`M ${58 - (h * 0.13)} 135 L ${122 + (h * 0.13)} 135 L ${135 - ((135 - topY) * 0.13)} ${topY} Q 90 ${topY + (isBlending ? -6 : 3)} ${45 + ((135 - topY) * 0.13)} ${topY} Z`}
                    fill="url(#smoothieGrad)"
                    opacity="0.85"
                  />
                  {/* Floating fruit slices */}
                  <circle cx="80" cy={Math.max(55, topY + 15)} r="7" fill="#f97316" opacity="0.9" />
                  <circle cx="102" cy={Math.max(50, topY + 22)} r="5" fill="#e11d48" opacity="0.85" />
                  {isBlending && (
                    <circle cx="90" cy={topY + 25} r="18" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="6 4" className="animate-spin" />
                  )}
                </g>
              );
            })()}
            {/* Blender Motor Base */}
            <path d="M 40 135 L 140 135 L 148 165 L 32 165 Z" fill="#2d1b69" stroke="#c084fc" strokeWidth="2.5" />
            <circle cx="90" cy="150" r="7" fill={isBlending ? '#4ade80' : '#facc15'} stroke="#fff" strokeWidth="1.5" />
            <text x="90" y="172" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">ZARA PRO BLENDER</text>

            <defs>
              <linearGradient id="smoothieGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>

          {/* Stepper Controls */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-bold text-slate-300">Cups (x):</span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5, 6].map(val => (
                <button
                  key={val}
                  onClick={() => setN(val)}
                  className={`w-7 h-7 rounded-lg font-display font-black text-xs transition cursor-pointer ${
                    n === val
                      ? 'bg-amber-400 text-slate-950 shadow-[0_0_10px_rgba(250,204,21,0.8)] scale-110'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Live Ingredients Board & Blend Button */}
        <div className="md:col-span-4 flex flex-col items-center justify-center gap-2 bg-[#120629] border border-cyan-400/30 rounded-2xl p-3">
          <div className="w-full text-center">
            <span className="text-xs font-900 text-cyan-300 uppercase tracking-wider">Required Ingredients</span>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-[#1e0e45] border border-amber-400/40 rounded-xl p-2 flex flex-col items-center">
                <span className="text-lg">🥭</span>
                <span className="text-amber-300 font-display font-black text-sm">{mangoCount} Mangoes</span>
                <span className="text-[10px] text-slate-400">{n} × 2</span>
              </div>
              <div className="bg-[#1e0e45] border border-cyan-400/40 rounded-xl p-2 flex flex-col items-center">
                <span className="text-lg">🥛</span>
                <span className="text-cyan-300 font-display font-black text-sm">{yogurtCount} Yogurt</span>
                <span className="text-[10px] text-slate-400">{n} × 1</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleBlend}
            disabled={isBlending}
            className="w-full btn-gold text-xs sm:text-sm font-black py-2.5 px-4 shadow-lg hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer mt-1"
          >
            <span>{isBlending ? '⚡ Blending...' : '➕ Blend & Add to Ledger'}</span>
          </button>
        </div>

        {/* Right: Cash Register Paper Receipt Tape */}
        <div className="md:col-span-3 bg-[#fefce8] text-slate-900 rounded-2xl p-2.5 font-mono text-xs shadow-xl border-2 border-amber-300 flex flex-col justify-between">
          <div className="border-b border-dashed border-slate-400 pb-1.5 text-center">
            <div className="font-black text-[11px] tracking-wider">ZARA'S REGISTER</div>
            <div className="text-[9px] text-slate-600">STALL RECEIPT #042</div>
          </div>
          <div className="py-2 flex flex-col gap-1 text-[11px]">
            <div className="flex justify-between">
              <span>Qty (x):</span>
              <span className="font-black">{n} cups</span>
            </div>
            <div className="flex justify-between">
              <span>Rate (k):</span>
              <span className="font-bold">₹15 / cup</span>
            </div>
            <div className="flex justify-between text-amber-800 font-black border-t border-slate-300 pt-1 text-sm">
              <span>Total (y):</span>
              <span>₹{totalCost}</span>
            </div>
          </div>
          <div className="text-[9px] text-center text-slate-500 border-t border-dashed border-slate-400 pt-1">
            Ratio y ÷ x = ₹{PRICE}
          </div>
        </div>

      </div>

      {/* Direct Proportion Ledger Table */}
      <div className="w-full overflow-x-auto shrink-0 mt-1">
        <table className="w-full text-center font-display font-900 text-xs sm:text-sm border-separate border-spacing-y-1">
          <thead>
            <tr className="text-slate-300 text-[11px] sm:text-xs">
              <th className="py-1">Smoothies (x)</th>
              <th>Mangoes (2x)</th>
              <th>Total Cost ₹ (y)</th>
              <th>Unit Rate (y ÷ x)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.x} className="fade-in-up">
                <td className="bg-cyan-500/15 border border-cyan-400/40 rounded-l-xl py-1 text-cyan-200">{r.x}</td>
                <td className="bg-purple-500/15 border-y border-purple-400/40 py-1 text-purple-200">{r.mangoes}</td>
                <td className="bg-amber-400/15 border-y border-amber-400/40 py-1 text-amber-200">₹{r.y}</td>
                <td className="bg-emerald-500/20 border border-emerald-400/50 rounded-r-xl py-1 text-emerald-300 font-black">
                  {r.y} ÷ {r.x} = ₹{PRICE}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {found ? (
        <Banner ok>
          🎉 Phenomenal! Every single row gives y ÷ x = {PRICE}. The cost per smoothie NEVER changes. This fixed constant is k = {PRICE}!
        </Banner>
      ) : (
        <p className="text-xs text-slate-300 font-bold shrink-0">
          Try different smoothie quantities ({rows.length} / 4 logged). Observe the last column!
        </p>
      )}

      <HintBar text="Direct proportion means: if you buy 3 times as many smoothies, you pay 3 times as much money. The unit rate y ÷ x is always 15." />
    </div>
  );
}

/* 1.2 CyclingGraph: Zara's Steady-Speed Bicycle Journey */
export function CyclingGraph({ muted }) {
  const [speed, setSpeed] = useState(12); // km/h
  const [time, setTime] = useState(3);   // hours
  const [testedSpeeds, setTestedSpeeds] = useState(new Set([12]));
  const { win } = useSfx(muted);
  const [shownWin, setShownWin] = useState(false);

  const distance = speed * time;

  const handleSpeed = v => {
    setSpeed(v);
    const next = new Set(testedSpeeds);
    next.add(v);
    setTestedSpeeds(next);
    if (next.size >= 3 && !shownWin) {
      setShownWin(true);
      win();
    }
  };

  // SVG coordinate transformation: max time = 6h, max distance = 90km
  const W = 360, H = 180, ox = 42, oy = 150, maxT = 6, maxY = 90;
  const px = v => ox + (v / maxT) * (W - ox - 16);
  const py = v => oy - (v / maxY) * (oy - 16);

  // Bike position percentage along top road
  const roadPct = Math.min(100, (distance / 72) * 100);

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚴</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Zara’s Coastal Bicycle Tour · Traveling at steady speed <span className="text-pink-300 font-black">{speed} km/h</span>
          </span>
        </div>
        <div className="text-[11px] text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded-lg">
          Master Formula: Distance y = {speed} × x
        </div>
      </div>

      {/* Realistic Roadway Track with Moving Cyclist */}
      <div className="w-full bg-[#100624] border border-white/20 rounded-2xl p-2.5 relative shrink-0 shadow-inner overflow-hidden">
        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1 px-2">
          <span>🏠 Home (0 km)</span>
          <span>🌳 Park (20 km)</span>
          <span>🌉 River Bridge (40 km)</span>
          <span>🗼 Lighthouse (60+ km)</span>
        </div>
        {/* Asphalt road */}
        <div className="w-full h-8 bg-slate-800 rounded-xl relative flex items-center border border-slate-600 overflow-hidden">
          <div className="w-full h-0.5 border-t border-dashed border-amber-300 opacity-60 absolute top-1/2" />
          {/* Animated Cyclist Sprite */}
          <div
            className="absolute transition-all duration-300 ease-out flex items-center"
            style={{ left: `calc(${roadPct}% - 18px)` }}
          >
            <div className="text-2xl drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">🚴‍♀️</div>
          </div>
        </div>
      </div>

      {/* Digital Dashboard & Controls */}
      <div className="w-full flex items-center justify-around gap-2 flex-wrap shrink-0">
        <div className="flex items-center gap-2 bg-[#120629] px-3 py-1.5 rounded-xl border border-pink-400/40">
          <span className="text-xs font-bold text-slate-300">Speed (k):</span>
          {[8, 10, 12, 15].map(s => (
            <button
              key={s}
              onClick={() => handleSpeed(s)}
              className={`px-2.5 py-1 rounded-lg font-display font-black text-xs transition cursor-pointer ${
                speed === s ? 'bg-pink-500 text-white shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {s} km/h
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-[#120629] px-3 py-1.5 rounded-xl border border-cyan-400/40">
          <span className="text-xs font-bold text-slate-300">Time (x):</span>
          <input
            type="range"
            min="0"
            max="6"
            step="0.5"
            value={time}
            onChange={e => setTime(Number(e.target.value))}
            className="w-28 sm:w-36 accent-cyan-400 cursor-pointer"
          />
          <span className="font-black text-amber-300 text-xs bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
            {time} h
          </span>
        </div>
      </div>

      {/* Coordinate Plane Graph (SVG) */}
      <div className="w-full flex justify-center shrink-0">
        <svg width="100%" style={{ maxWidth: 390 }} viewBox={`0 0 ${W} ${H}`} className="shrink-0 drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
          {/* Horizontal grid lines */}
          {[15, 30, 45, 60, 75, 90].map(val => (
            <g key={val}>
              <line x1={ox} y1={py(val)} x2={W - 12} y2={py(val)} stroke="#fff" strokeOpacity="0.08" />
              <text x={ox - 5} y={py(val) + 3} fill="#94a3b8" fontSize="8" textAnchor="end">{val}</text>
            </g>
          ))}
          {/* Vertical grid lines */}
          {[1, 2, 3, 4, 5, 6].map(val => (
            <g key={val}>
              <line x1={px(val)} y1={oy} x2={px(val)} y2={py(90)} stroke="#fff" strokeOpacity="0.08" />
              <text x={px(val)} y={oy + 12} fill="#94a3b8" fontSize="8" textAnchor="middle">{val}h</text>
            </g>
          ))}
          {/* Axes */}
          <line x1={ox} y1={oy} x2={W - 8} y2={oy} stroke="#94a3b8" strokeWidth="2" />
          <line x1={ox} y1={oy} x2={ox} y2="12" stroke="#94a3b8" strokeWidth="2" />
          <text x={W - 8} y={oy - 5} fill="#38bdf8" fontSize="9" fontWeight="900" textAnchor="end">Time x (h)</text>
          <text x={ox + 5} y="15" fill="#facc15" fontSize="9" fontWeight="900">Distance y (km)</text>

          {/* Straight line for y = speed * x starting from (0, 0) */}
          <line
            x1={px(0)}
            y1={py(0)}
            x2={px(maxT)}
            y2={py(maxT * speed)}
            stroke="#ec4899"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Dashed projections to current point */}
          <line x1={px(time)} y1={oy} x2={px(time)} y2={py(distance)} stroke="#4ade80" strokeWidth="2" strokeDasharray="3 3" />
          <line x1={ox} y1={py(distance)} x2={px(time)} y2={py(distance)} stroke="#4ade80" strokeWidth="2" strokeDasharray="3 3" />

          {/* Origin dot (0, 0) */}
          <circle cx={ox} cy={oy} r="4" fill="#facc15" />
          <text x={ox + 5} y={oy - 4} fill="#facc15" fontSize="8" fontWeight="bold">(0, 0)</text>

          {/* Current coordinate point */}
          <circle cx={px(time)} cy={py(distance)} r="6" fill="#fff" stroke="#4ade80" strokeWidth="3" />
        </svg>
      </div>

      {/* Live Ratio Readout Chips */}
      <div className="flex items-center gap-2 flex-wrap justify-center shrink-0">
        <RatioChip label="Time (x) =" value={`${time} h`} tone="cyan" />
        <RatioChip label="Distance (y) =" value={`${distance} km`} tone="amber" />
        <RatioChip label="Speed (y ÷ x) =" value={time === 0 ? '—' : `${speed} km/h`} tone="green" />
      </div>

      {shownWin ? (
        <Banner ok>
          🎉 Notice two magic facts: 1) The line passes straight through (0, 0) because 0 hours = 0 km. 2) A higher speed k makes the line steeper!
        </Banner>
      ) : (
        <p className="text-xs text-slate-300 font-bold shrink-0">
          Try at least 3 different speeds ({testedSpeeds.size} / 3) and watch how the slope changes.
        </p>
      )}

      <HintBar text="In direct proportion graphs: 1) The graph is always a straight line, 2) It always starts at (0, 0), and 3) Slope equals the constant k." />
    </div>
  );
}

/* 1.3 DoublingMachine: Zara's School Stationery Pack Scaling */
export function DoublingMachine({ muted }) {
  const BASE_PENCILS = 4;
  const BASE_COST = 20; // 4 pencils cost ₹20 -> ₹5 each
  const [factor, setFactor] = useState(1);
  const [triedFactors, setTriedFactors] = useState(new Set([1]));
  const [fakeMode, setFakeMode] = useState(false);
  const { win } = useSfx(muted);
  const [shownWin, setShownWin] = useState(false);

  const pencils = BASE_PENCILS * factor;
  const cost = fakeMode ? BASE_COST * factor * 2 : BASE_COST * factor;
  const ratio = cost / pencils;

  const handleFactor = f => {
    setFakeMode(false);
    setFactor(f);
    const next = new Set(triedFactors);
    next.add(f);
    setTriedFactors(next);
    if (next.size >= 3 && !shownWin) {
      setShownWin(true);
      win();
    }
  };

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">✏️</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Zara’s School Co-op Stationery · Standard Pack: <span className="text-cyan-300 font-black">4 pencils</span> for <span className="text-amber-300 font-black">₹20</span>
          </span>
        </div>
        <div className="text-[11px] text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded-lg">
          Unit Rate: ₹5 per pencil
        </div>
      </div>

      {/* Factor Multiplier Buttons */}
      <div className="flex items-center gap-2 flex-wrap justify-center shrink-0">
        <span className="text-xs font-bold text-slate-300">Choose Multiplier:</span>
        {[
          { label: '½ (Half Pack)', val: 0.5 },
          { label: '1× (Standard)', val: 1 },
          { label: '2× (Double)', val: 2 },
          { label: '3× (Triple)', val: 3 },
          { label: '5× (Class Pack)', val: 5 }
        ].map(item => (
          <button
            key={item.val}
            onClick={() => handleFactor(item.val)}
            className={`px-3 py-1.5 rounded-xl font-display font-black text-xs sm:text-sm border transition cursor-pointer ${
              factor === item.val && !fakeMode
                ? 'bg-amber-400 text-slate-950 border-white shadow-[0_0_12px_rgba(250,204,21,0.8)] scale-105'
                : 'bg-[#120629] text-white border-cyan-400/40 hover:border-amber-300'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Dual Workbench: Left Pencils | Right Cash Drawer */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
        {/* Left: Pencil Packs */}
        <div className="bg-[#120629] border-2 border-cyan-400/40 rounded-2xl p-3 flex flex-col items-center gap-1.5 shadow-inner">
          <div className="flex items-center justify-between w-full px-1">
            <span className="text-xs font-900 text-cyan-300">Pencils (x)</span>
            <span className="text-[11px] font-bold text-slate-400">Factor: ×{factor}</span>
          </div>
          <div className="text-2xl min-h-[46px] flex items-center justify-center flex-wrap gap-1 py-1">
            {'✏️'.repeat(Math.min(15, Math.round(pencils)))}
            {pencils > 15 && <span className="text-xs text-cyan-300 font-bold">+{pencils - 15} more</span>}
          </div>
          <div className="font-display font-black text-2xl text-white">
            {pencils} <span className="text-xs text-slate-400 font-normal">pencils</span>
          </div>
        </div>

        {/* Right: Cash Drawer */}
        <div className={`bg-[#120629] border-2 rounded-2xl p-3 flex flex-col items-center gap-1.5 shadow-inner transition ${
          fakeMode ? 'border-rose-400/80 bg-rose-950/20' : 'border-amber-400/40'
        }`}>
          <div className="flex items-center justify-between w-full px-1">
            <span className="text-xs font-900 text-amber-300">Total Price (y)</span>
            <span className="text-[11px] font-bold text-slate-400">Factor: {fakeMode ? '×' + factor * 2 : '×' + factor}</span>
          </div>
          <div className="text-2xl min-h-[46px] flex items-center justify-center flex-wrap gap-1 py-1">
            {'🪙'.repeat(Math.min(10, Math.max(1, Math.round(cost / 10))))}
          </div>
          <div className="font-display font-black text-2xl text-amber-300">
            ₹{cost}
          </div>
        </div>
      </div>

      {/* Ratio Comparison Indicator */}
      <div className="flex items-center gap-2 flex-wrap justify-center shrink-0">
        <RatioChip label="Pencils Multiplier:" value={`×${factor}`} tone="cyan" />
        <RatioChip label="Price Multiplier:" value={fakeMode ? `×${factor * 2} ⚠️` : `×${factor}`} tone={fakeMode ? 'pink' : 'amber'} />
        <RatioChip label="Unit Rate y ÷ x =" value={`₹${ratio}`} tone={fakeMode ? 'pink' : 'green'} />
      </div>

      {/* Grade 7 Detective Experiment: What if price doesn't scale fairly? */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => setFakeMode(m => !m)}
          className={`text-xs font-bold px-3 py-1 rounded-full border transition cursor-pointer ${
            fakeMode ? 'bg-rose-600 text-white border-rose-300' : 'bg-white/10 text-slate-300 border-white/20 hover:bg-white/15'
          }`}
        >
          {fakeMode ? '⚠️ Reset to Fair Direct Proportion' : '🕵️ Test: What if the shopkeeper overcharges?'}
        </button>
      </div>

      {fakeMode ? (
        <Banner ok={false}>
          ⚠️ Look! The pencils doubled but the price quadrupled! y ÷ x jumped from ₹5 to ₹{ratio}. That is NOT direct proportion!
        </Banner>
      ) : shownWin ? (
        <Banner ok>
          🎉 Direct Proportion Rule: When quantity scales by factor F, the cost scales by the EXACT same factor F. So y ÷ x remains ₹5!
        </Banner>
      ) : (
        <p className="text-xs text-slate-300 font-bold shrink-0">
          Try at least 3 different pack multipliers ({Math.min(3, triedFactors.size)} / 3).
        </p>
      )}

      <HintBar text="Whatever factor multiplies the number of pencils must also multiply the total cost. If one doubles, the other MUST double." />
    </div>
  );
}

/* =========================================================================
   STATION 2 — PROVE-IT STUDIO (Try It On Your Own)
   ========================================================================= */

/* 2.1 CompleteTable: Zara's Ribbon & Craft Studio */
export function CompleteTable({ muted }) {
  const xs = [1, 3, 5, 8, 10];
  const ys = [15, 45, 75, 120, 150];
  const givenIdx = 1; // 3m costs ₹45 is given
  const [vals, setVals] = useState({});
  const [status, setStatus] = useState({});
  const [msg, setMsg] = useState(null);
  const { win, tryAgain } = useSfx(muted);

  const check = () => {
    const st = {};
    let allOk = true;
    xs.forEach((_, i) => {
      if (i === givenIdx) return;
      const ok = Number(vals[i]) === ys[i] && vals[i] !== undefined && vals[i] !== '';
      st[i] = ok;
      if (!ok) allOk = false;
    });
    setStatus(st);
    if (allOk) {
      setMsg({ ok: true, text: '🎉 Outstanding! Since 3 m cost ₹45, k = 45 ÷ 3 = 15. Every missing value was found with y = 15 × x!' });
      win();
    } else {
      setMsg({ ok: false, text: 'Check the red boxes. First find the cost of 1 metre (45 ÷ 3 = 15). Then multiply 15 by each metre value!' });
      tryAgain();
    }
  };

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎀</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Zara’s Festival Craft Studio · Satin ribbon sold by length at a fixed rate per metre
          </span>
        </div>
        <div className="text-[11px] text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded-lg border border-amber-400/30">
          Known Clue: 3 metres cost ₹45
        </div>
      </div>

      {/* Visual Tailor's Workbench with Measuring Stick */}
      <div className="w-full bg-[#120629] border border-purple-400/40 rounded-2xl p-3 flex flex-col items-center gap-2 shrink-0 shadow-inner">
        <div className="text-xs font-bold text-slate-300">
          ✂️ Tailor's Wooden Meter Rule: Use the known 3-metre benchmark to discover unit rate <span className="text-amber-300 font-black">k</span>!
        </div>
        {/* Visual ribbon strip */}
        <div className="w-full max-w-md h-7 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 rounded-lg shadow-md flex items-center justify-around px-2 border border-pink-300">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(m => (
            <div key={m} className="flex flex-col items-center">
              <span className="text-[9px] font-black text-white">{m}m</span>
              <div className="w-0.5 h-2 bg-white/70" />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Table with Input Fields */}
      <div className="w-full overflow-x-auto shrink-0">
        <table className="w-full text-center border-separate border-spacing-2">
          <tbody>
            <tr>
              <td className="font-display font-900 text-cyan-300 text-xs sm:text-sm text-right pr-2">
                Ribbon Length (m) x
              </td>
              {xs.map((x, i) => (
                <td key={i}>
                  <div className="bg-cyan-500/15 border-2 border-cyan-400/50 rounded-xl py-1.5 font-display font-black text-base sm:text-lg text-cyan-100">
                    {x}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-display font-900 text-amber-300 text-xs sm:text-sm text-right pr-2">
                Cost in ₹ (y)
              </td>
              {xs.map((x, i) => (
                <td key={i}>
                  {i === givenIdx ? (
                    <div className="bg-amber-400/20 border-2 border-amber-400 rounded-xl py-1.5 font-display font-black text-base sm:text-lg text-amber-200">
                      ₹45 <span className="text-[10px] block font-normal text-amber-300">GIVEN</span>
                    </div>
                  ) : (
                    <input
                      type="number"
                      value={vals[i] ?? ''}
                      onChange={e => {
                        setVals({ ...vals, [i]: e.target.value });
                        setStatus({ ...status, [i]: undefined });
                      }}
                      className={`${numInput} w-full min-w-[54px] ${
                        status[i] === true
                          ? '!border-emerald-400 !bg-emerald-950/80 text-emerald-200'
                          : status[i] === false
                          ? '!border-rose-400 !bg-rose-950/80 text-rose-200 animate-shake'
                          : ''
                      }`}
                      placeholder="?"
                    />
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={check}
          className="btn-gold text-xs sm:text-sm font-black px-7 py-2.5 shadow-lg hover:scale-105 transition cursor-pointer"
        >
          Check My Calculations ✨
        </button>
      </div>

      {msg && <Banner ok={msg.ok}>{msg.text}</Banner>}

      <HintBar text="Step 1: Divide given pair: 45 ÷ 3 = 15. So 1 metre costs ₹15 (k = 15). Step 2: Multiply 15 by 1, 5, 8, and 10 to fill the empty boxes!" />
    </div>
  );
}

/* 2.2 PlotTheLine: Rainwater Harvest Tank & Tap */
export function PlotTheLine({ muted }) {
  const K = 2; // fills 2 litres every minute
  const required = [1, 2, 3, 4, 5].map(x => [x, x * K]);
  const [pts, setPts] = useState([]);
  const [simMinute, setSimMinute] = useState(1);
  const [msg, setMsg] = useState(null);
  const [done, setDone] = useState(false);
  const { win, tryAgain } = useSfx(muted);

  const W = 360, H = 240, ox = 44, oy = 210, sx = 48, sy = 16;
  const X = v => ox + v * sx;
  const Y = v => oy - v * sy;
  const has = (x, y) => pts.some(p => p[0] === x && p[1] === y);

  const toggle = (x, y) => {
    if (done) return;
    setMsg(null);
    setPts(has(x, y) ? pts.filter(p => !(p[0] === x && p[1] === y)) : [...pts, [x, y]]);
  };

  const check = () => {
    const missing = required.filter(([x, y]) => !has(x, y));
    const extra = pts.filter(([x, y]) => !(x === 0 && y === 0) && !(y === x * K && x >= 1 && x <= 5));
    if (missing.length === 0 && extra.length === 0) {
      setDone(true);
      setMsg({ ok: true, text: '🎉 Bravo! All points connect on a straight line passing through (0, 0). The line’s equation is y = 2x!' });
      win();
    } else {
      setMsg({
        ok: false,
        text: extra.length
          ? `${extra.length} point(s) do not follow y = 2x. Tap them to remove.`
          : `${missing.length} point(s) missing. Remember: at 1 min = 2L, at 2 min = 4L, at 3 min = 6L!`
      });
      tryAgain();
    }
  };

  const currentVol = simMinute * K;

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚰</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Zara’s Eco Rainwater Tank · Fills steadily at <span className="text-amber-300 font-black">2 Litres every minute</span>
          </span>
        </div>
        <div className="text-[11px] text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded-lg">
          Rate k = 2 L/min · Target: Plot points (x, y)
        </div>
      </div>

      {/* Two Column Layout: Left Tank Simulator | Right Coordinate Graph */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3 items-center shrink-0">
        {/* Left: Interactive Water Tank Preview */}
        <div className="md:col-span-4 bg-[#120629] border border-cyan-400/30 rounded-2xl p-2.5 flex flex-col items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-300">Observe Tank at Minute:</span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map(m => (
              <button
                key={m}
                onClick={() => setSimMinute(m)}
                className={`w-7 h-7 rounded-lg font-display font-black text-xs transition cursor-pointer ${
                  simMinute === m ? 'bg-cyan-400 text-slate-950 scale-110 shadow-md' : 'bg-white/10 text-white'
                }`}
              >
                {m}m
              </button>
            ))}
          </div>

          {/* Visual Tank Graphic */}
          <div className="w-24 h-28 bg-[#1e293b] border-2 border-cyan-400/60 rounded-b-2xl relative overflow-hidden flex flex-col justify-end p-1">
            <div
              className="w-full bg-cyan-400/80 rounded-b-xl transition-all duration-300"
              style={{ height: `${(currentVol / 12) * 100}%` }}
            />
            <div className="absolute top-1 left-2 text-[10px] text-slate-300 font-bold">12L</div>
            <div className="absolute top-1/2 left-2 text-[10px] text-slate-300 font-bold">6L</div>
          </div>
          <div className="text-xs text-amber-300 font-black">
            {simMinute} min → {currentVol} Litres
          </div>
          <span className="text-[10px] text-slate-400 text-center">Plot ({simMinute}, {currentVol}) on grid!</span>
        </div>

        {/* Right: Interactive Tap-to-Plot Coordinate Grid */}
        <div className="md:col-span-8 flex flex-col items-center justify-center">
          <svg width="100%" style={{ maxWidth: 360 }} viewBox={`0 0 ${W} ${H}`} className="shrink-0 drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
            {/* Horizontal lines */}
            {Array.from({ length: 13 }, (_, i) => (
              <g key={`gy${i}`}>
                <line x1={ox} y1={Y(i)} x2={X(6)} y2={Y(i)} stroke="#fff" strokeOpacity={i % 2 === 0 ? 0.12 : 0.05} />
                {i % 2 === 0 && <text x={ox - 5} y={Y(i) + 3} fill="#94a3b8" fontSize="8" textAnchor="end">{i}</text>}
              </g>
            ))}
            {/* Vertical lines */}
            {Array.from({ length: 7 }, (_, i) => (
              <g key={`gx${i}`}>
                <line x1={X(i)} y1={oy} x2={X(i)} y2={Y(12)} stroke="#fff" strokeOpacity="0.08" />
                <text x={X(i)} y={oy + 11} fill="#94a3b8" fontSize="8" textAnchor="middle">{i}m</text>
              </g>
            ))}
            {/* Axes */}
            <line x1={ox} y1={oy} x2={X(6) + 6} y2={oy} stroke="#94a3b8" strokeWidth="2" />
            <line x1={ox} y1={oy} x2={ox} y2={Y(12) - 4} stroke="#94a3b8" strokeWidth="2" />
            <text x={X(6) + 4} y={oy + 11} fill="#38bdf8" fontSize="9" fontWeight="900">Time x</text>
            <text x={ox + 4} y={Y(12) - 6} fill="#facc15" fontSize="9" fontWeight="900">Water y (L)</text>

            {/* Glowing Straight Line when finished */}
            {done && (
              <line x1={X(0)} y1={Y(0)} x2={X(6)} y2={Y(12)} stroke="#4ade80" strokeWidth="3.5" strokeLinecap="round" className="fade-in-up" />
            )}

            {/* Clickable Grid intersections */}
            {Array.from({ length: 7 }, (_, xi) =>
              Array.from({ length: 13 }, (_, yi) => (
                <circle
                  key={`${xi}-${yi}`}
                  cx={X(xi)}
                  cy={Y(yi)}
                  r="8"
                  fill={has(xi, yi) ? (done ? '#4ade80' : '#facc15') : 'transparent'}
                  stroke={has(xi, yi) ? '#fff' : 'transparent'}
                  strokeWidth="2"
                  style={{ cursor: done ? 'default' : 'pointer' }}
                  onClick={() => toggle(xi, yi)}
                  onMouseEnter={e => { if (!has(xi, yi) && !done) e.target.setAttribute('fill', 'rgba(56,189,248,0.3)'); }}
                  onMouseLeave={e => { if (!has(xi, yi)) e.target.setAttribute('fill', 'transparent'); }}
                />
              ))
            )}
            <circle cx={ox} cy={oy} r="3.5" fill="#facc15" pointerEvents="none" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0 mt-1">
        <button
          onClick={check}
          disabled={done}
          className="btn-gold text-xs sm:text-sm font-black px-6 py-2 shadow-lg hover:scale-105 transition cursor-pointer disabled:opacity-40"
        >
          Check Plotted Points ✨
        </button>
        <button
          onClick={() => { setPts([]); setDone(false); setMsg(null); }}
          className="bg-[#1c0d3a] border border-white/25 text-white font-display font-bold text-xs px-4 py-2 rounded-full cursor-pointer hover:bg-[#2c1859]"
        >
          ↺ Reset Points
        </button>
      </div>

      {msg && <Banner ok={msg.ok}>{msg.text}</Banner>}

      <HintBar text="At 1 minute: 2 litres → plot (1, 2). At 2 minutes: 4 litres → plot (2, 4). Continue multiplying minutes by 2!" />
    </div>
  );
}

/* 2.3 RealOrFake: Zara's Case File Detective Desk */
const CASE_FILES = [
  {
    id: 'a',
    icon: '🍎',
    title: 'Market Fresh Apples (₹30 / kg)',
    xs: [1, 2, 3, 4],
    ys: [30, 60, 90, 120],
    direct: true,
    why: 'Unit rate y ÷ x is always 30. Also, 0 kg costs ₹0!'
  },
  {
    id: 'b',
    icon: '🚕',
    title: 'City Fast Taxi (₹50 Base + ₹10 / km)',
    xs: [1, 2, 3, 4],
    ys: [60, 70, 80, 90],
    direct: false,
    why: 'The ₹50 base fee makes y ÷ x change (60, 35, 26.7). And 0 km costs ₹50, not ₹0!'
  },
  {
    id: 'c',
    icon: '📖',
    title: 'Reading Log (15 Pages every hour)',
    xs: [1, 2, 3, 4],
    ys: [15, 30, 45, 60],
    direct: true,
    why: 'y ÷ x is always 15 pages per hour. In 0 hours, 0 pages are read.'
  },
  {
    id: 'd',
    icon: '🧒',
    title: 'Child’s Age vs Height (cm)',
    xs: [2, 4, 6, 8],
    ys: [85, 100, 115, 126],
    direct: false,
    why: 'Humans do not grow by a fixed number of cm every year; y ÷ x keeps dropping!'
  }
];

export function RealOrFake({ muted }) {
  const [answers, setAnswers] = useState({});
  const { win } = useSfx(muted);
  const total = CASE_FILES.length;
  const answered = Object.keys(answers).length;
  const score = CASE_FILES.filter(c => answers[c.id] !== undefined && answers[c.id] === c.direct).length;

  const choose = (card, val) => {
    if (answers[card.id] !== undefined) return;
    const next = { ...answers, [card.id]: val };
    setAnswers(next);
    if (Object.keys(next).length === total) win();
  };

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">🕵️</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Inspector Zara’s Case Desk · Test if each scenario is True Direct Proportion
          </span>
        </div>
        <div className="text-[11px] text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded-lg border border-amber-400/30">
          The 2 Rules: 1) y ÷ x is constant, 2) Zero gives Zero
        </div>
      </div>

      {/* Grid of 4 Case Evidence Folders */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {CASE_FILES.map(c => {
          const a = answers[c.id];
          const done = a !== undefined;
          const correct = done && a === c.direct;
          return (
            <div
              key={c.id}
              className={`rounded-2xl p-2.5 border-2 flex flex-col gap-1.5 transition ${
                !done
                  ? 'bg-[#120629] border-purple-400/40'
                  : correct
                  ? 'bg-emerald-950/60 border-emerald-400/70 shadow-[0_0_12px_rgba(52,211,153,0.3)]'
                  : 'bg-rose-950/60 border-rose-400/70 shadow-[0_0_12px_rgba(244,63,94,0.3)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-display font-black text-xs sm:text-sm text-white">
                  {c.icon} {c.title}
                </p>
                {done && (
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${correct ? 'bg-emerald-400 text-slate-950' : 'bg-rose-400 text-slate-950'}`}>
                    {correct ? 'SOLVED' : 'REVIEW'}
                  </span>
                )}
              </div>

              {/* Data Table */}
              <div className="text-[11px] font-bold text-center">
                <div className="flex gap-1 justify-center mb-0.5">
                  <span className="w-6 text-cyan-300">x</span>
                  {c.xs.map((v, i) => (
                    <span key={i} className="flex-1 bg-cyan-500/10 border border-cyan-400/40 rounded py-0.5 text-cyan-100">
                      {v}
                    </span>
                  ))}
                </div>
                <div className="flex gap-1 justify-center mb-0.5">
                  <span className="w-6 text-amber-300">y</span>
                  {c.ys.map((v, i) => (
                    <span key={i} className="flex-1 bg-amber-400/10 border border-amber-400/40 rounded py-0.5 text-amber-100">
                      {v}
                    </span>
                  ))}
                </div>
                {/* Reveal y ÷ x division test once answered */}
                {done && (
                  <div className="flex gap-1 justify-center fade-in-up mt-1">
                    <span className="w-6 text-emerald-300">÷</span>
                    {c.xs.map((x, i) => (
                      <span key={i} className="flex-1 bg-emerald-500/20 border border-emerald-400/50 rounded py-0.5 text-emerald-300 font-black">
                        {Number((c.ys[i] / x).toFixed(1))}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Stamp Choice Buttons */}
              {!done ? (
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={() => choose(c, true)}
                    className="flex-1 bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-300 text-white font-display font-black text-xs py-1.5 rounded-full cursor-pointer transition hover:scale-105"
                  >
                    ✔ DIRECT
                  </button>
                  <button
                    onClick={() => choose(c, false)}
                    className="flex-1 bg-rose-700/80 hover:bg-rose-600 border border-rose-300 text-white font-display font-black text-xs py-1.5 rounded-full cursor-pointer transition hover:scale-105"
                  >
                    ✘ NOT DIRECT
                  </button>
                </div>
              ) : (
                <p className={`text-[11px] font-bold text-left ${correct ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {correct ? '✔ Spot on! ' : `✘ It is ${c.direct ? 'DIRECT' : 'NOT direct'}. `}
                  {c.why}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {answered === total && (
        <Banner ok={score >= 3}>
          {score === total
            ? '🎉 4 / 4 Master Detective! You proved that direct proportions must have a constant y ÷ x ratio AND start at (0, 0).'
            : `You solved ${score} / ${total} cases correctly. Inspect the y ÷ x row on the tricky ones!`}
        </Banner>
      )}

      <HintBar text="Divide y by x for every pair. If all quotients are identical, it is direct proportion! If any quotient changes, it's NOT direct." />
    </div>
  );
}

/* =========================================================================
   STATION 3 — MISSION CONTROL (Apply to Real Problems)
   ========================================================================= */

/* 3.1 UnitaryLadder: Zara's Artisan Bakery Truffle Gift Box */
export function UnitaryLadder({ muted }) {
  const [step, setStep] = useState(1);
  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [msg, setMsg] = useState(null);
  const { win, tryAgain } = useSfx(muted);

  const check1 = () => {
    if (Number(a1) === 12) {
      setStep(2);
      setMsg({ ok: true, text: '✔ Rung 1 Complete! 1 truffle costs ₹96 ÷ 8 = ₹12. Now scale to 5 truffles!' });
    } else {
      setMsg({ ok: false, text: 'Not yet. Divide the total cost ₹96 by 8 truffles: 96 ÷ 8 = ?' });
      tryAgain();
    }
  };

  const check2 = () => {
    if (Number(a2) === 60) {
      setStep(3);
      setMsg({ ok: true, text: '🎉 Top of the Ladder! 5 truffles cost 5 × ₹12 = ₹60. The Unitary Method wins again!' });
      win();
    } else {
      setMsg({ ok: false, text: 'Not yet. Multiply the cost of 1 truffle (₹12) by 5.' });
      tryAgain();
    }
  };

  const rung = (active, done) =>
    `w-full rounded-2xl border-2 p-2.5 sm:p-3 flex items-center gap-3 transition ${
      done
        ? 'bg-emerald-950/70 border-emerald-400/80'
        : active
        ? 'bg-[#2a1060] border-amber-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]'
        : 'bg-[#120629] border-white/15 opacity-60'
    }`;

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">🍫</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Zara’s Artisan Bakery · A luxury gift box of <span className="text-amber-300 font-black">8 chocolate truffles costs ₹96</span>
          </span>
        </div>
        <div className="text-[11px] text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded-lg">
          Goal: Find the cost of 5 truffles
        </div>
      </div>

      {/* The 3-Rung Unitary Method Ladder */}
      <div className="w-full flex flex-col gap-1.5 items-stretch shrink-0">
        {/* Rung 0: Given benchmark */}
        <div className={rung(false, true)}>
          <span className="text-2xl">🎁</span>
          <div>
            <div className="font-display font-black text-white text-sm sm:text-base">Given: 8 truffles cost ₹96</div>
            <div className="text-[10px] text-slate-400">Standard bakery holiday gift box</div>
          </div>
          <span className="ml-auto text-[10px] font-black text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">BENCHMARK</span>
        </div>

        {/* Step 1 Arrow */}
        <div className="text-center text-pink-300 font-display font-black text-xs flex items-center justify-center gap-1">
          <span>↓ Step 1: Divide by 8 to find the cost of ONE unit</span>
        </div>

        {/* Rung 1: Unit cost */}
        <div className={rung(step === 1, step > 1)}>
          <span className="text-2xl">1️⃣</span>
          <div className="flex-1">
            <span className="font-display font-black text-white text-sm sm:text-base">1 truffle costs ₹</span>
            {step > 1 ? (
              <span className="font-display font-black text-emerald-300 text-lg sm:text-xl ml-1">12</span>
            ) : (
              <span className="text-xs text-slate-300 font-normal ml-1">(96 ÷ 8)</span>
            )}
          </div>
          {step === 1 && (
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={a1}
                onChange={e => setA1(e.target.value)}
                className={`${numInput} w-20 text-sm`}
                placeholder="?"
              />
              <button
                onClick={check1}
                className="btn-gold text-xs font-black px-3.5 py-1.5 cursor-pointer hover:scale-105"
              >
                Check
              </button>
            </div>
          )}
        </div>

        {/* Step 2 Arrow */}
        <div className="text-center text-emerald-300 font-display font-black text-xs flex items-center justify-center gap-1">
          <span>↓ Step 2: Multiply by 5 to scale up to ANY quantity</span>
        </div>

        {/* Rung 2: Scaled cost */}
        <div className={rung(step === 2, step > 2)}>
          <span className="text-2xl">5️⃣</span>
          <div className="flex-1">
            <span className="font-display font-black text-white text-sm sm:text-base">5 truffles cost ₹</span>
            {step > 2 ? (
              <span className="font-display font-black text-emerald-300 text-lg sm:text-xl ml-1">60</span>
            ) : (
              <span className="text-xs text-slate-300 font-normal ml-1">(5 × ₹12)</span>
            )}
          </div>
          {step === 2 && (
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={a2}
                onChange={e => setA2(e.target.value)}
                className={`${numInput} w-20 text-sm`}
                placeholder="?"
              />
              <button
                onClick={check2}
                className="btn-gold text-xs font-black px-3.5 py-1.5 cursor-pointer hover:scale-105"
              >
                Check
              </button>
            </div>
          )}
        </div>
      </div>

      {msg && <Banner ok={msg.ok}>{msg.text}</Banner>}

      <HintBar text="The Unitary Method has 2 easy steps: 1) DIVIDE to find 1 unit (96 ÷ 8 = 12). 2) MULTIPLY to find the new target (12 × 5 = 60)." />
    </div>
  );
}

/* 3.2 BalanceScale: Zara's Road Trip Fuel Balance */
export function BalanceScale({ muted }) {
  const L = { x: 6, y: 90 };      // 6 litres -> 90 km (k = 15 km/L)
  const X2 = 10;                  // 10 litres -> target 150 km
  const [y2, setY2] = useState(80);
  const [won, setWon] = useState(false);
  const { win } = useSfx(muted);

  const r1 = L.y / L.x; // 15
  const r2 = y2 / X2;   // y2 / 10
  const diff = r2 - r1;
  const balanced = Math.abs(diff) < 1e-9;
  const angle = balanced ? 0 : Math.max(-14, Math.min(14, diff * 2.4));

  const onSlide = v => {
    setY2(v);
    if (!won && Math.abs(v / X2 - r1) < 1e-9) {
      setWon(true);
      win();
    }
  };

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚗</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Zara’s Mountain Highway Road Trip · Car travels <span className="text-amber-300 font-black">90 km on 6 Litres</span>
          </span>
        </div>
        <div className="text-[11px] text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded-lg">
          Fuel Efficiency: 90 ÷ 6 = 15 km/L
        </div>
      </div>

      {/* Physics Tilt Balance Scale SVG */}
      <svg width="100%" style={{ maxWidth: 390 }} viewBox="0 0 400 175" className="shrink-0 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
        {/* Stand base and central pillar */}
        <rect x="175" y="150" width="50" height="8" rx="4" fill="#facc15" />
        <line x1="200" y1="36" x2="200" y2="150" stroke="#facc15" strokeWidth="5" />
        
        {/* Tilting crossbeam */}
        <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: '200px 36px', transition: 'transform 0.25s ease' }}>
          <line x1="60" y1="36" x2="340" y2="36" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />
          {/* Chains */}
          {[60, 340].map(cx => (
            <g key={cx}>
              <line x1={cx} y1="36" x2={cx - 32} y2="85" stroke="#e9d5ff" strokeWidth="1.8" />
              <line x1={cx} y1="36" x2={cx + 32} y2="85" stroke="#e9d5ff" strokeWidth="1.8" />
            </g>
          ))}

          {/* Left Pan: Verified Benchmark (6L -> 90 km) */}
          <g style={{ transform: `rotate(${-angle}deg)`, transformOrigin: '60px 36px', transition: 'transform 0.25s ease' }}>
            <path d="M 22 85 L 98 85 Q 92 118 60 118 Q 28 118 22 85 z" fill="#14082c" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="60" y="105" fill="#38bdf8" fontSize="11" fontWeight="900" textAnchor="middle">90 km ÷ 6 L</text>
            <text x="60" y="78" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">= {r1} km/L</text>
          </g>

          {/* Right Pan: Adjustable Distance for 10L */}
          <g style={{ transform: `rotate(${-angle}deg)`, transformOrigin: '340px 36px', transition: 'transform 0.25s ease' }}>
            <path d="M 302 85 L 378 85 Q 372 118 340 118 Q 308 118 302 85 z" fill="#14082c" stroke={balanced ? '#4ade80' : '#facc15'} strokeWidth="2.5" />
            <text x="340" y="105" fill={balanced ? '#4ade80' : '#facc15'} fontSize="11" fontWeight="900" textAnchor="middle">{y2} km ÷ 10 L</text>
            <text x="340" y="78" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">= {(y2 / 10).toFixed(1)} km/L</text>
          </g>
        </g>
        <circle cx="200" cy="36" r="7" fill="#facc15" />
      </svg>

      {/* Slider for Distance on 10 Litres */}
      <div className="flex items-center gap-3 bg-[#120629] px-4 py-2 rounded-xl border border-cyan-400/40 w-full justify-center shrink-0">
        <span className="text-xs font-bold text-slate-200">Distance for 10 L:</span>
        <input
          type="range"
          min="50"
          max="220"
          step="5"
          value={y2}
          onChange={e => onSlide(Number(e.target.value))}
          className="w-40 sm:w-52 accent-amber-400 cursor-pointer"
        />
        <span className="text-xs font-black text-amber-300 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/30">
          {y2} km
        </span>
      </div>

      {/* Ratio Comparison Chips */}
      <div className="flex items-center gap-2 flex-wrap justify-center shrink-0">
        <RatioChip label="Left Efficiency:" value={`${r1} km/L`} tone="cyan" />
        <RatioChip label="Right Efficiency:" value={`${(y2 / 10).toFixed(1)} km/L`} tone={balanced ? 'green' : 'amber'} />
        <RatioChip label="Scale Status:" value={balanced ? 'PERFECT LEVEL ⚖️' : angle < 0 ? 'Tilted Left ⚠️' : 'Tilted Right ⚠️'} tone={balanced ? 'green' : 'pink'} />
      </div>

      {won && (
        <Banner ok>
          🎉 Balanced to perfection! Since 1 Litre gives 15 km, 10 Litres must give exactly 15 × 10 = 150 km!
        </Banner>
      )}

      <HintBar text="Both sides must have equal ratios: 90 ÷ 6 = ? ÷ 10. First calculate 90 ÷ 6 = 15. Then multiply 15 by 10 to balance the scale!" />
    </div>
  );
}

/* 3.3 MapNavigator: Zara's Expedition Map & Scale */
export function MapNavigator({ muted }) {
  const K = 20; // 1 cm = 20 km
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [okA, setOkA] = useState(null);
  const [okB, setOkB] = useState(null);
  const [msg, setMsg] = useState(null);
  const { win, tryAgain } = useSfx(muted);

  const check = () => {
    const A = Number(a) === 7 * K && a !== '';
    const B = Number(b) === 180 / K && b !== '';
    setOkA(A);
    setOkB(B);
    if (A && B) {
      setMsg({
        ok: true,
        text: '🎉 Expedition Master! 7 cm on the map = 7 × 20 = 140 km. And 180 km in reality = 180 ÷ 20 = 9 cm on the map!'
      });
      win();
    } else {
      setMsg({
        ok: false,
        text: A
          ? 'Part 1 is correct! For Part 2, divide 180 km by 20.'
          : B
          ? 'Part 2 is correct! For Part 1, multiply 7 cm by 20.'
          : 'Use the map scale: 3 cm = 60 km, so 1 cm = 20 km (k = 20).'
      });
      tryAgain();
    }
  };

  return (
    <div className={BOX}>
      {/* Real-World Context Bar */}
      <div className="w-full bg-[#1e1045] border border-cyan-400/40 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗺️</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-200">
            Zara’s Eagle Valley Expedition Map · Scale Key: <span className="text-amber-300 font-black">3 cm = 60 km</span>
          </span>
        </div>
        <div className="text-[11px] text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded-lg border border-emerald-400/30">
          Scale Ratio: 1 cm on map = 20 km on Earth
        </div>
      </div>

      {/* Illustrated Topographical Parchment Map SVG */}
      <svg width="100%" style={{ maxWidth: 390 }} viewBox="0 0 400 155" className="shrink-0 drop-shadow-[0_0_12px_rgba(74,222,128,0.25)]">
        {/* Parchment background */}
        <rect x="4" y="4" width="392" height="147" rx="16" fill="#0f261c" stroke="#4ade80" strokeWidth="2.5" strokeOpacity="0.7" />
        {/* Dotted Trail */}
        <path d="M 50 110 Q 140 35 220 90 T 350 45" fill="none" stroke="#facc15" strokeWidth="3" strokeDasharray="6 5" />
        
        {/* Landmarks */}
        {[
          [50, 110, '⛺', 'Basecamp'],
          [220, 90, '🌲', 'Pine Lake'],
          [350, 45, '🏔️', 'Eagle Peak']
        ].map(([cx, cy, ico, lbl]) => (
          <g key={lbl}>
            <circle cx={cx} cy={cy} r="15" fill="#14082c" stroke="#38bdf8" strokeWidth="2" />
            <text x={cx} y={cy + 6} fontSize="17" textAnchor="middle">{ico}</text>
            <text x={cx} y={cy + 28} fontSize="10" fontWeight="900" fill="#fff" textAnchor="middle">{lbl}</text>
          </g>
        ))}

        {/* Trail Measurement Callout Labels */}
        <rect x="95" y="40" width="85" height="20" rx="10" fill="#14082c" stroke="#4ade80" strokeWidth="1.5" />
        <text x="137" y="54" fontSize="10" fontWeight="900" fill="#4ade80" textAnchor="middle">7 cm → ? km</text>

        <rect x="250" y="102" width="95" height="20" rx="10" fill="#14082c" stroke="#f472b6" strokeWidth="1.5" />
        <text x="297" y="116" fontSize="10" fontWeight="900" fill="#f472b6" textAnchor="middle">180 km → ? cm</text>
      </svg>

      {/* Two Interactive Mission Conversion Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 shrink-0">
        {/* Mission 1: Map to Real World */}
        <div className={`rounded-xl p-2.5 border-2 flex flex-col items-center gap-1.5 transition ${
          okA === true ? 'border-emerald-400 bg-emerald-950/60' : okA === false ? 'border-rose-400 bg-rose-950/60' : 'border-purple-400/40 bg-[#120629]'
        }`}>
          <span className="font-display font-black text-xs text-white text-center">
            Mission 1 · Basecamp → Pine Lake is 7 cm. Real distance?
          </span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={a}
              onChange={e => { setA(e.target.value); setOkA(null); }}
              className={`${numInput} w-20 text-sm`}
              placeholder="?"
            />
            <span className="text-amber-300 font-black text-xs">km</span>
          </div>
        </div>

        {/* Mission 2: Real World to Map */}
        <div className={`rounded-xl p-2.5 border-2 flex flex-col items-center gap-1.5 transition ${
          okB === true ? 'border-emerald-400 bg-emerald-950/60' : okB === false ? 'border-rose-400 bg-rose-950/60' : 'border-purple-400/40 bg-[#120629]'
        }`}>
          <span className="font-display font-black text-xs text-white text-center">
            Mission 2 · Pine Lake → Eagle Peak is 180 km. Map distance?
          </span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={b}
              onChange={e => { setB(e.target.value); setOkB(null); }}
              className={`${numInput} w-20 text-sm`}
              placeholder="?"
            />
            <span className="text-cyan-300 font-black text-xs">cm</span>
          </div>
        </div>
      </div>

      <button
        onClick={check}
        className="btn-gold text-xs sm:text-sm font-black px-7 py-2 shadow-lg hover:scale-105 transition cursor-pointer shrink-0 mt-1"
      >
        Check Route Calculations ✨
      </button>

      {msg && <Banner ok={msg.ok}>{msg.text}</Banner>}

      <HintBar text="Find 1 cm first: 60 ÷ 3 = 20 km. To convert Map → Real: MULTIPLY by 20. To convert Real → Map: DIVIDE by 20." />
    </div>
  );
}
