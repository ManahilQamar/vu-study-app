import React, { useState, useRef } from 'react';

// ─── Symbol Toolbar Rows (like MathType) ─────────────────────────
const TOOLBAR_ROWS = [
  // Row 1
  ['≤','≥','≠','≈','∼','⊂','⊃','∈','∩','∂','∞','λ','ω','θ','Δ','Ω','⊕'],
  // Row 2
  ['π','θ','∞','∈','→','∂','≤','≥','≠','±','√','∑','∫','∏','∮','…','⟹'],
  // Row 3 — numbers + basic ops always visible
  ['(',')','{','}','[',']','/','\\','|','·','×','÷','±','=','≠','<','>'],
];

// ─── Tab Categories (like MathType tabs) ─────────────────────────
const TABS = [
  {
    label: 'Algebra',
    color: '#2563eb',
    symbols: [
      { sym: '√(a²+b²)', label: '√a²+b²' },
      { sym: 'lim_{x→∞}', label: 'lim x→∞' },
      { sym: '√(b²-4ac)', label: '√b²-4ac' },
      { sym: 'n!/(r!(n-r)!)', label: 'n!/r!(n-r)!' },
      { sym: '1/2', label: '½' },
      { sym: 'x²', label: 'x²' },
      { sym: 'x³', label: 'x³' },
      { sym: 'xⁿ', label: 'xⁿ' },
      { sym: '∑', label: '∑' },
      { sym: '∏', label: '∏' },
      { sym: '|x|', label: '|x|' },
      { sym: '⌊x⌋', label: '⌊x⌋' },
    ],
  },
  {
    label: 'Calculus',
    color: '#7c3aed',
    symbols: [
      { sym: 'd/dx', label: 'd/dx' },
      { sym: '∂/∂x', label: '∂/∂x' },
      { sym: '∫', label: '∫' },
      { sym: '∬', label: '∬' },
      { sym: '∭', label: '∭' },
      { sym: '∮', label: '∮' },
      { sym: 'lim', label: 'lim' },
      { sym: '→', label: '→' },
      { sym: '∞', label: '∞' },
      { sym: 'Δ', label: 'Δ' },
      { sym: '∇', label: '∇' },
      { sym: 'δ', label: 'δ' },
    ],
  },
  {
    label: 'Statistics',
    color: '#0891b2',
    symbols: [
      { sym: 'x̄', label: 'x̄' },
      { sym: 'μ', label: 'μ' },
      { sym: 'σ', label: 'σ' },
      { sym: 'σ²', label: 'σ²' },
      { sym: 'Σ', label: 'Σ' },
      { sym: 'P(A)', label: 'P(A)' },
      { sym: 'n!', label: 'n!' },
      { sym: 'ₙCᵣ', label: 'ₙCᵣ' },
      { sym: 'ₙPᵣ', label: 'ₙPᵣ' },
      { sym: '≈', label: '≈' },
      { sym: '∝', label: '∝' },
      { sym: '%', label: '%' },
    ],
  },
  {
    label: 'Matrices',
    color: '#16a34a',
    symbols: [
      { sym: '[A]', label: '[A]' },
      { sym: '|A|', label: '|A|' },
      { sym: 'Aᵀ', label: 'Aᵀ' },
      { sym: 'A⁻¹', label: 'A⁻¹' },
      { sym: 'det(A)', label: 'det' },
      { sym: 'tr(A)', label: 'tr' },
      { sym: '∈ℝⁿ', label: '∈ℝⁿ' },
      { sym: '×', label: '×' },
      { sym: '⊗', label: '⊗' },
      { sym: '⊕', label: '⊕' },
      { sym: '∘', label: '∘' },
      { sym: 'rank', label: 'rank' },
    ],
  },
  {
    label: 'Sets',
    color: '#ea580c',
    symbols: [
      { sym: '∈', label: '∈' },
      { sym: '∉', label: '∉' },
      { sym: '⊂', label: '⊂' },
      { sym: '⊃', label: '⊃' },
      { sym: '⊆', label: '⊆' },
      { sym: '⊇', label: '⊇' },
      { sym: '∪', label: '∪' },
      { sym: '∩', label: '∩' },
      { sym: '∅', label: '∅' },
      { sym: 'ℕ', label: 'ℕ' },
      { sym: 'ℤ', label: 'ℤ' },
      { sym: 'ℝ', label: 'ℝ' },
    ],
  },
  {
    label: 'Trig',
    color: '#dc2626',
    symbols: [
      { sym: 'sin', label: 'sin' },
      { sym: 'cos', label: 'cos' },
      { sym: 'tan', label: 'tan' },
      { sym: 'sin⁻¹', label: 'sin⁻¹' },
      { sym: 'cos⁻¹', label: 'cos⁻¹' },
      { sym: 'tan⁻¹', label: 'tan⁻¹' },
      { sym: 'sinh', label: 'sinh' },
      { sym: 'cosh', label: 'cosh' },
      { sym: 'tanh', label: 'tanh' },
      { sym: 'π', label: 'π' },
      { sym: '°', label: '°' },
      { sym: 'rad', label: 'rad' },
    ],
  },
  {
    label: 'Geometry',
    color: '#9333ea',
    symbols: [
      { sym: '∠', label: '∠' },
      { sym: '∟', label: '∟' },
      { sym: '⊥', label: '⊥' },
      { sym: '∥', label: '∥' },
      { sym: '△', label: '△' },
      { sym: '□', label: '□' },
      { sym: '○', label: '○' },
      { sym: '≅', label: '≅' },
      { sym: '∼', label: '∼' },
      { sym: 'π', label: 'π' },
      { sym: 'r²', label: 'r²' },
      { sym: '°', label: '°' },
    ],
  },
  {
    label: 'Greek',
    color: '#0f766e',
    symbols: [
      { sym: 'α', label: 'α' },
      { sym: 'β', label: 'β' },
      { sym: 'γ', label: 'γ' },
      { sym: 'Γ', label: 'Γ' },
      { sym: 'δ', label: 'δ' },
      { sym: 'Δ', label: 'Δ' },
      { sym: 'ε', label: 'ε' },
      { sym: 'θ', label: 'θ' },
      { sym: 'λ', label: 'λ' },
      { sym: 'μ', label: 'μ' },
      { sym: 'ξ', label: 'ξ' },
      { sym: 'ρ', label: 'ρ' },
    ],
  },
];

// ─── Greek quick keys ─────────────────────────────────────────────
const GREEK_ROW = ['α','β','γ','Γ','δ','Δ','ε','ζ','η','θ','Θ','λ','μ','ν','ξ','π','Π','ρ','σ','Σ','τ','φ','Φ','χ','ψ','ω','Ω'];

export default function MathTyper({ setPage, toggleDark, dark }) {
  const [text,   setText]   = useState('');
  const [tabIdx, setTabIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const taRef = useRef(null);

  const insert = (sym) => {
    const ta = taRef.current;
    if (!ta) { setText(t => t + sym); return; }
    const s = ta.selectionStart;
    const e = ta.selectionEnd;
    const v = text.slice(0, s) + sym + text.slice(e);
    setText(v);
    setTimeout(() => { ta.focus(); ta.setSelectionRange(s + sym.length, s + sym.length); }, 0);
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  };

  const activeTab = TABS[tabIdx];

  // Shared small button style
  const toolBtn = (extra = {}) => ({
    height: 30, minWidth: 30, padding: '0 6px',
    border: '1px solid var(--border)',
    background: 'var(--card-bg)',
    color: 'var(--text-primary)',
    borderRadius: 4,
    fontSize: 14,
    fontFamily: "'Georgia','Times New Roman',serif",
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.1s',
    ...extra,
  });

  return (
    <div className="shell fade-in" style={{ background: 'var(--bg)' }}>

      {/* ── Topbar ── */}
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage('home')}>← Back</button>
        <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>
          ∑ Math Typer
        </span>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      <main className="page" style={{ paddingBottom: 24 }}>

        {/* ── MathType-style Toolbar Panel ── */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1.5px solid var(--border)',
          borderRadius: 14,
          overflow: 'hidden',
          marginBottom: 10,
        }}>

          {/* ── Toolbar Row 1 ── */}
          {TOOLBAR_ROWS.map((row, ri) => (
            <div key={ri} style={{
              display: 'flex', flexWrap: 'wrap', gap: 3, padding: '5px 8px',
              borderBottom: ri < TOOLBAR_ROWS.length - 1 ? '1px solid var(--border)' : 'none',
              background: ri === 0 ? 'var(--bg)' : 'var(--card-bg)',
            }}>
              {row.map((sym, i) => (
                <button key={i} onClick={() => insert(sym)} style={toolBtn()}>
                  {sym}
                </button>
              ))}
            </div>
          ))}

          {/* ── Tab Row ── */}
          <div style={{
            display: 'flex', overflowX: 'auto', borderBottom: '1px solid var(--border)',
            scrollbarWidth: 'none', background: '#e5e7eb',
          }}>
            {TABS.map((t, i) => (
              <button key={i} onClick={() => setTabIdx(i)} style={{
                padding: '7px 12px', fontSize: 11.5, fontWeight: 700,
                whiteSpace: 'nowrap', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit', letterSpacing: '0.2px',
                background: tabIdx === i ? t.color : 'transparent',
                color: tabIdx === i ? '#fff' : '#374151',
                borderRadius: tabIdx === i ? '4px 4px 0 0' : 0,
                transition: 'all 0.15s',
              }}>
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Tab Symbols (MathType template row) ── */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 4,
            padding: '8px 10px', background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            minHeight: 52,
          }}>
            {activeTab.symbols.map((s, i) => (
              <button key={i} onClick={() => insert(s.sym)} style={{
                ...toolBtn({
                  height: 38, minWidth: 44, padding: '0 8px',
                  fontSize: 13,
                  background: 'var(--card-bg)',
                  border: `1.5px solid ${activeTab.color}44`,
                  color: activeTab.color,
                  borderRadius: 6, fontWeight: 600,
                }),
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = activeTab.color;
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--card-bg)';
                e.currentTarget.style.color = activeTab.color;
              }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* ── Greek letters quick row ── */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 3,
            padding: '6px 8px',
            background: 'var(--card-bg)',
          }}>
            {GREEK_ROW.map((sym, i) => (
              <button key={i} onClick={() => insert(sym)} style={toolBtn({ fontSize: 15 })}
                onMouseEnter={e => { e.currentTarget.style.background='#7c3aed'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#7c3aed'; }}
                onMouseLeave={e => { e.currentTarget.style.background='var(--card-bg)'; e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.borderColor='var(--border)'; }}
              >
                {sym}
              </button>
            ))}
          </div>
        </div>

        {/* ── Writing Area (like MathType document) ── */}
        <div style={{
          background: '#fff',
          border: '1.5px solid #d1d5db',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          {/* Ruler strip */}
          <div style={{
            height: 20, background: '#f3f4f6',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex', alignItems: 'center',
            paddingLeft: 12,
            fontSize: 10, color: '#9ca3af',
            fontFamily: 'monospace',
            letterSpacing: '18px',
            userSelect: 'none',
          }}>
            {'| · · · · · · · · · | · · · · · · · · · | · · ·'}
          </div>

          {/* Text area */}
          <textarea
            ref={taRef}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={'Write your math equation here...\n\nExamples:\n  f(x) = x² + 3x - 5\n  ∫ x² dx = x³/3 + C\n  lim_{x→∞} 1/x = 0\n  α² + β² = γ²\n\nClick the symbol buttons above to insert symbols.'}
            style={{
              width: '100%',
              minHeight: 220,
              padding: '20px 24px',
              fontSize: 22,
              fontFamily: "'Georgia','Times New Roman', serif",
              lineHeight: 2,
              resize: 'vertical',
              background: '#fff',
              color: '#111827',
              border: 'none',
              outline: 'none',
            }}
          />

          {/* Status bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '6px 14px',
            background: '#f3f4f6',
            borderTop: '1px solid #e5e7eb',
            fontSize: 11.5, color: '#6b7280',
            fontFamily: 'monospace',
          }}>
            <span>Style: Math &nbsp;|&nbsp; Size: Full &nbsp;|&nbsp; {text.length} chars</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={handleCopy} style={{
                fontSize: 12, fontWeight: 600, padding: '3px 12px',
                borderRadius: 6,
                background: copied ? '#f0fdf4' : '#fff',
                border: `1px solid ${copied ? '#86efac' : '#d1d5db'}`,
                color: copied ? '#16a34a' : '#374151',
                cursor: 'pointer', fontFamily: 'inherit',
              }}>
                {copied ? '✓ Copied' : '⧉ Copy'}
              </button>
              <button onClick={() => { setText(''); taRef.current?.focus(); }} style={{
                fontSize: 12, fontWeight: 600, padding: '3px 12px',
                borderRadius: 6, background: '#fff',
                border: '1px solid #d1d5db', color: '#dc2626',
                cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Clear
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}