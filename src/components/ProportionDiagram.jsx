import React from 'react';

function Cell({ v, tone }) {
  const isQ = v === '?';
  return (
    <div
      className={`min-w-[52px] px-3 py-1.5 rounded-xl border-2 text-center font-display font-900 text-base sm:text-lg ${
        isQ
          ? 'bg-rose-500/20 border-rose-400 text-rose-300 animate-pulse'
          : tone === 'x'
            ? 'bg-cyan-500/10 border-cyan-400/50 text-cyan-100'
            : 'bg-amber-400/10 border-amber-400/50 text-amber-100'
      }`}
    >
      {v}
    </div>
  );
}

export function ProportionDiagram({ diagramData, size = 180 }) {
  if (!diagramData) return null;
  const { mode } = diagramData;

  if (mode === 'table') {
    const { xs, ys, xLab, yLab } = diagramData;
    return (
      <div className="flex flex-col gap-2 my-2 items-stretch">
        <div className="flex items-center gap-2 justify-center">
          <span className="w-28 text-right font-display font-800 text-cyan-300 text-xs sm:text-sm">{xLab}</span>
          {xs.map((v, i) => <Cell key={i} v={v} tone="x" />)}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span className="w-28 text-right font-display font-800 text-amber-300 text-xs sm:text-sm">{yLab}</span>
          {ys.map((v, i) => <Cell key={i} v={v} tone="y" />)}
        </div>
      </div>
    );
  }

  if (mode === 'machine') {
    const { xVal, kVal, yVal, xLab, yLab } = diagramData;
    return (
      <div className="flex items-center justify-center gap-3 my-2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[11px] font-800 text-cyan-300 font-display">{xLab}</span>
          <Cell v={xVal} tone="x" />
        </div>
        <span className="text-amber-400 text-2xl font-black">→</span>
        <div className="px-4 py-2 rounded-2xl bg-[#2a1060] border-2 border-amber-400 text-amber-300 font-display font-900 text-lg shadow-[0_0_16px_rgba(250,204,21,0.5)]">
          × {kVal}
        </div>
        <span className="text-amber-400 text-2xl font-black">→</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[11px] font-800 text-amber-300 font-display">{yLab}</span>
          <Cell v={yVal} tone="y" />
        </div>
      </div>
    );
  }

  if (mode === 'factor') {
    const { xVal, yVal, m, xLab, yLab } = diagramData;
    return (
      <div className="flex items-center justify-center gap-5 my-2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[11px] font-800 text-cyan-300 font-display">{xLab}</span>
          <Cell v={xVal} tone="x" />
          <span className="text-emerald-400 font-black text-sm">↓ × {m}</span>
          <Cell v={xVal * m} tone="x" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[11px] font-800 text-amber-300 font-display">{yLab}</span>
          <Cell v={yVal} tone="y" />
          <span className="text-emerald-400 font-black text-sm">↓ ?</span>
          <Cell v="?" tone="y" />
        </div>
      </div>
    );
  }

  if (mode === 'cases') {
    const { cases, xLab, yLab } = diagramData;
    return (
      <div className="flex items-center justify-center gap-6 my-2">
        {cases.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl border-2 border-purple-400/40 bg-purple-950/40">
            <span className={`font-display font-900 text-sm ${i === 0 ? 'text-purple-300' : 'text-cyan-300'}`}>Case {i === 0 ? 'A' : 'B'}</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-800 text-cyan-300 font-display">{xLab}</span>
              <Cell v={c.x} tone="x" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-800 text-amber-300 font-display">{yLab}</span>
              <Cell v={c.y} tone="y" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (mode === 'graph') {
    const { xa, ya, x2 } = diagramData;
    const W = 260, H = 150, ox = 36, oy = 126;
    const maxX = x2 * 1.15;
    const maxY = ya * (x2 / xa) * 1.15;
    const px = v => ox + (v / maxX) * (W - ox - 14);
    const py = v => oy - (v / maxY) * (oy - 12);
    return (
      <div className="flex flex-col items-center justify-center my-1">
        <svg width={size * 1.3} height={size * 0.75} viewBox={`0 0 ${W} ${H}`} className="drop-shadow-[0_0_14px_rgba(74,222,128,0.4)]">
          <line x1={ox} y1={oy} x2={W - 8} y2={oy} stroke="#94a3b8" strokeWidth="2" />
          <line x1={ox} y1={oy} x2={ox} y2="6" stroke="#94a3b8" strokeWidth="2" />
          <line x1={ox} y1={oy} x2={px(x2)} y2={py(ya * (x2 / xa))} stroke="#4ade80" strokeWidth="3.5" />
          <circle cx={ox} cy={oy} r="5" fill="#facc15" />
          <text x={ox + 6} y={oy + 13} fill="#facc15" fontSize="10" fontWeight="900">(0, 0)</text>
          <circle cx={px(xa)} cy={py(ya)} r="5" fill="#fff" stroke="#4ade80" strokeWidth="2.5" />
          <text x={px(xa) + 7} y={py(ya) + 12} fill="#bbf7d0" fontSize="10" fontWeight="900">({xa}, {ya})</text>
          <line x1={px(x2)} y1={oy} x2={px(x2)} y2={py(ya * (x2 / xa))} stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx={px(x2)} cy={py(ya * (x2 / xa))} r="5" fill="#f43f5e" />
          <text x={px(x2) - 4} y={oy + 13} fill="#fda4af" fontSize="10" fontWeight="900" textAnchor="middle">x = {x2}</text>
          <text x={px(x2) - 8} y={py(ya * (x2 / xa)) - 6} fill="#fda4af" fontSize="11" fontWeight="900" textAnchor="end">y = ?</text>
        </svg>
      </div>
    );
  }

  return null;
}
