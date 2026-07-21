import React, { useState, useRef } from 'react';

// ─── Complete Symbol Library ──────────────────────────────────────
const TABS = [
  {
    label: 'Basic',
    color: '#2563eb',
    symbols: [
      '+', '−', '×', '÷', '=', '≠', '±', '∓', '%', '·',
      '/', '\\', ':', '*', '!', '~', '#', '&', '@', '|',
    ],
  },
  {
    label: 'Compare',
    color: '#0891b2',
    symbols: [
      '<', '>', '≤', '≥', '≈', '≡', '≪', '≫', '∝', '∼',
      '≅', '≃', '≄', '≇', '≉', '≮', '≯', '≰', '≱', '⊀',
    ],
  },
  {
    label: 'Algebra',
    color: '#7c3aed',
    symbols: [
      'x²', 'x³', 'xⁿ', 'x⁻¹', 'x⁻²', '√', '∛', '∜',
      '|x|', '⌊x⌋', '⌈x⌉', '∞', 'ℵ', 'ℶ', 'ℏ',
      '(', ')', '{', '}', '[', ']',
    ],
  },
  {
    label: 'Powers',
    color: '#dc2626',
    symbols: [
      '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹',
      '⁺', '⁻', 'ⁿ', 'ⁱ', 'ˣ', 'ʸ', 'ᵃ', 'ᵇ', 'ᶜ', 'ᵈ',
    ],
  },
  {
    label: 'Subscript',
    color: '#b45309',
    symbols: [
      '₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉',
      '₊', '₋', 'ₙ', 'ᵢ', 'ⱼ', 'ₖ', 'ₘ', 'ₓ', 'ₐ', 'ₑ',
    ],
  },
  {
    label: 'Calculus',
    color: '#16a34a',
    symbols: [
      '∫', '∬', '∭', '∮', '∯', '∰', '∱', '∲', '∳',
      'd/dx', '∂', '∂²', '∇', 'Δ', 'δ', 'lim', '→', '∑', '∏',
    ],
  },
  {
    label: 'Greek UC',
    color: '#0f766e',
    symbols: [
      'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ',
      'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ',
      'Φ', 'Χ', 'Ψ', 'Ω',
    ],
  },
  {
    label: 'Greek LC',
    color: '#9333ea',
    symbols: [
      'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ',
      'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'ς', 'τ',
      'υ', 'φ', 'χ', 'ψ', 'ω', 'ϕ', 'ϑ', 'ϖ', 'ϱ', 'ϵ',
    ],
  },
  {
    label: 'Sets',
    color: '#ea580c',
    symbols: [
      '∈', '∉', '∋', '∌', '⊂', '⊃', '⊄', '⊅', '⊆', '⊇',
      '⊈', '⊉', '∪', '∩', '∅', '∀', '∃', '∄',
      'ℕ', 'ℤ', 'ℚ', 'ℝ', 'ℂ', 'ℙ', 'ℍ',
    ],
  },
  {
    label: 'Logic',
    color: '#475569',
    symbols: [
      '∧', '∨', '¬', '→', '↔', '⊕', '⊤', '⊥', '∴', '∵',
      '⊢', '⊨', '⊬', '⊭', '≡', '⟹', '⟺', '⟵', '⟶', '⟷',
    ],
  },
  {
    label: 'Geometry',
    color: '#0284c7',
    symbols: [
      '°', '∠', '∟', '⊥', '∥', '∦', '△', '▲', '▽', '▿',
      '□', '■', '○', '●', '◎', '≅', '∼', '⌒', '⌣', '⌘',
    ],
  },
  {
    label: 'Trig',
    color: '#be185d',
    symbols: [
      'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
      'sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'sinh', 'cosh', 'tanh',
      'π', '°', 'rad', '2π', 'π/2', 'π/3', 'π/4', 'π/6',
    ],
  },
  {
    label: 'Physics',
    color: '#c2410c',
    symbols: [
      'ℏ', 'ε₀', 'μ₀', 'σ', 'λ', 'ω', 'α', 'β', 'γ',
      'Φ', 'Ψ', '∇', '∇²', '∇×', '∇·',
      'F⃗', 'v⃗', 'a⃗', 'E⃗', 'B⃗',
      'N', 'J', 'W', 'Pa', 'Hz', 'T', 'C', 'V', 'Ω', 'F',
    ],
  },
  {
    label: 'Vectors',
    color: '#1d4ed8',
    symbols: [
      '→', '←', '↑', '↓', '↔', '↕', '↗', '↘', '↙', '↖',
      '⇒', '⇐', '⇑', '⇓', '⇔', '⟹', '⟺',
      '·', '×', '⊗', '⊕', '‖', '|', '∧', '∨',
    ],
  },
  {
    label: 'Matrix',
    color: '#059669',
    symbols: [
      '[A]', '|A|', 'Aᵀ', 'A⁻¹', 'det', 'tr',
      '∈ℝⁿ', '×', '⊗', '⊕', '∘', 'rank',
      '⎡', '⎢', '⎣', '⎤', '⎥', '⎦',
      '(', ')', '|', '‖',
    ],
  },
  {
    label: 'Number',
    color: '#7c3aed',
    symbols: [
      'ℕ', 'ℤ', 'ℚ', 'ℝ', 'ℂ', 'ℙ', 'ℍ', 'ℵ₀', 'ℵ₁',
      '∞', '-∞', '+∞', 'i', 'j', 'e', 'π', 'φ', 'γ',
    ],
  },
  {
    label: 'Fractions',
    color: '#b45309',
    symbols: [
      '½', '⅓', '⅔', '¼', '¾', '⅕', '⅖', '⅗', '⅘',
      '⅙', '⅚', '⅛', '⅜', '⅝', '⅞', '⅐', '⅑', '⅒',
    ],
  },
  {
    label: 'Statistics',
    color: '#0891b2',
    symbols: [
      'x̄', 'ȳ', 'μ', 'σ', 'σ²', 'ρ', 'χ²', 'Σ', 'Π',
      'P(A)', 'P(B)', 'E(X)', 'Var', 'SD', 'CV', 'IQR', 'Q₁', 'Q₃', 'n!',
    ],
  },
  {
    label: 'Chemistry',
    color: '#16a34a',
    symbols: [
      '→', '⇌', '⇒', '↑', '↓', '±',
      'Δ', 'ΔH', 'ΔG', 'ΔS', 'ΔE', 'ΔT',
      '°C', '°K', 'mol', 'M', 'atm', 'kPa',
      '⁺', '⁻', '²⁺', '³⁺', '²⁻',
    ],
  },
  {
    label: 'Misc',
    color: '#64748b',
    symbols: [
      '…', '·', '•', '‥', '∶', '∷', '∸', '∹',
      '†', '‡', '§', '¶', '©', '®', '™',
      '≈', '≉', '∴', '∵', '⋮', '⋯', '⋱', '⋰',
    ],
  },
];

const NUMPAD = ['7','8','9','4','5','6','1','2','3','0','.','='];
const OPS    = ['+','−','×','÷','(',')','/','√','²','³','^','|'];

export default function MathTyper({ setPage, toggleDark, dark }) {
  const [text,   setText]   = useState('');
  const [tabIdx, setTabIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState('');
  const taRef = useRef(null);

  const insert = (sym) => {
    const ta = taRef.current;
    if (!ta) { setText(t => t + sym); return; }
    const s = ta.selectionStart, e = ta.selectionEnd;
    const v = text.slice(0, s) + sym + text.slice(e);
    setText(v);
    setTimeout(() => { ta.focus(); ta.setSelectionRange(s + sym.length, s + sym.length); }, 0);
  };

  const backspace = () => {
    const ta = taRef.current;
    if (!ta) { setText(t => t.slice(0, -1)); return; }
    const s = ta.selectionStart, e = ta.selectionEnd;
    if (s === e && s > 0) {
      const v = text.slice(0, s - 1) + text.slice(s);
      setText(v);
      setTimeout(() => { ta.focus(); ta.setSelectionRange(s - 1, s - 1); }, 0);
    } else if (s !== e) {
      const v = text.slice(0, s) + text.slice(e);
      setText(v);
      setTimeout(() => { ta.focus(); ta.setSelectionRange(s, s); }, 0);
    }
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  };

  const activeTab = TABS[tabIdx];

  // Search across all symbols
  const searchResults = search.trim()
    ? TABS.flatMap(t => t.symbols.filter(s => s.toLowerCase().includes(search.toLowerCase())).map(s => ({ sym: s, color: t.color })))
    : [];

  const symBtn = (extra = {}) => ({
    height: 32, minWidth: 32, padding: '0 6px',
    border: '1px solid var(--border)',
    background: 'var(--bg)',
    color: 'var(--text-primary)',
    borderRadius: 5, fontSize: 14,
    fontFamily: "'Georgia','Times New Roman',serif",
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 600, transition: 'all 0.1s',
    flexShrink: 0,
    ...extra,
  });

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100dvh', overflow: 'hidden',
      background: 'var(--bg)', fontFamily: 'inherit',
    }}>
      {/* Topbar */}
      <header className="topbar" style={{ flexShrink: 0 }}>
        <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>∑ Math Typer</span>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      {/* ══ Symbol Panel (fixed top) ══ */}
      <div style={{ flexShrink: 0, background: 'var(--card-bg)', borderBottom: '2px solid var(--border)' }}>

        {/* Search bar */}
        <div style={{ padding: '6px 8px', borderBottom: '1px solid var(--border)' }}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search symbols... (e.g. alpha, integral, arrow)"
            style={{
              width: '100%', padding: '6px 12px',
              fontSize: 13, borderRadius: 8,
              border: '1px solid var(--border)',
              background: 'var(--bg)', color: 'var(--text-primary)',
              outline: 'none', fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Search results */}
        {search.trim() && (
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 4,
            padding: '6px 8px', background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            maxHeight: 80, overflowY: 'auto',
          }}>
            {searchResults.length === 0 ? (
              <span style={{ fontSize: 12, color: 'var(--text-muted)', padding: '4px' }}>No symbols found</span>
            ) : searchResults.map((s, i) => (
              <button key={i} onClick={() => insert(s.sym)} style={symBtn({ color: s.color, borderColor: s.color + '44' })}
                onMouseEnter={e => { e.currentTarget.style.background=s.color; e.currentTarget.style.color='#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background='var(--bg)'; e.currentTarget.style.color=s.color; }}
              >{s.sym}</button>
            ))}
          </div>
        )}

        {/* Tab bar */}
        {!search.trim() && (
          <div style={{
            display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
            background: dark ? '#1e293b' : '#e5e7eb',
            borderBottom: '1px solid var(--border)',
          }}>
            {TABS.map((t, i) => (
              <button key={i} onClick={() => setTabIdx(i)} style={{
                padding: '5px 10px', fontSize: 11, fontWeight: 700,
                whiteSpace: 'nowrap', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit', letterSpacing: '0.2px',
                background: tabIdx === i ? t.color : 'transparent',
                color: tabIdx === i ? '#fff' : (dark ? '#94a3b8' : '#374151'),
                borderRadius: tabIdx === i ? '4px 4px 0 0' : 0,
                transition: 'all 0.15s',
              }}>{t.label}</button>
            ))}
          </div>
        )}

        {/* Tab symbols grid */}
        {!search.trim() && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))',
            gap: 4, padding: '8px',
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            maxHeight: 110, overflowY: 'auto',
          }}>
            {activeTab.symbols.map((sym, i) => (
              <button key={i} onClick={() => insert(sym)} style={symBtn()}
                onMouseEnter={e => { e.currentTarget.style.background=activeTab.color; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor=activeTab.color; }}
                onMouseLeave={e => { e.currentTarget.style.background='var(--bg)'; e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.borderColor='var(--border)'; }}
              >{sym}</button>
            ))}
          </div>
        )}

        {/* Numpad + ops row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 2,
          padding: '4px 8px', flexWrap: 'wrap',
          background: 'var(--card-bg)',
        }}>
          {NUMPAD.map(n => (
            <button key={n} onClick={() => insert(n)} style={symBtn({
              height: 28, minWidth: 26, fontSize: 12,
              fontFamily: 'monospace', fontWeight: 700,
              background: dark ? '#334155' : '#f1f5f9',
            })}
            onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background=dark?'#334155':'#f1f5f9'; e.currentTarget.style.color='var(--text-primary)'; }}
            >{n}</button>
          ))}
          <div style={{ width:1, height:18, background:'var(--border)', margin:'0 3px' }} />
          {OPS.map(op => (
            <button key={op} onClick={() => insert(op)} style={symBtn({
              height: 28, minWidth: 26, fontSize: 14,
              background: dark ? '#1e3a5f' : '#eff6ff',
              border: '1px solid #bfdbfe', color: '#2563eb',
            })}
            onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background=dark?'#1e3a5f':'#eff6ff'; e.currentTarget.style.color='#2563eb'; }}
            >{op}</button>
          ))}
          <button onClick={backspace} style={symBtn({
            height: 28, minWidth: 34, fontSize: 13,
            background: dark ? '#3b1f1f' : '#fef2f2',
            border: '1px solid #fca5a5', color: '#dc2626', fontFamily: 'inherit',
          })}
          onMouseEnter={e => { e.currentTarget.style.background='#dc2626'; e.currentTarget.style.color='#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background=dark?'#3b1f1f':'#fef2f2'; e.currentTarget.style.color='#dc2626'; }}
          >⌫</button>
        </div>
      </div>

      {/* ══ Writing Area (fills remaining space) ══ */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        overflow: 'hidden', background: '#fff',
      }}>
        {/* Ruler */}
        <div style={{
          flexShrink: 0, height: 16, background: '#f3f4f6',
          borderBottom: '1px solid #e5e7eb',
          fontSize: 9, color: '#d1d5db', fontFamily: 'monospace',
          display: 'flex', alignItems: 'center',
          paddingLeft: 12, letterSpacing: '20px', userSelect: 'none',
        }}>{'| · · · · · | · · · · · | · · · · ·'}</div>

        <textarea
          ref={taRef}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={'Write math here...\n\nExamples:\nf(x) = x² + 3x − 5\n∫ sin(x) dx = −cos(x) + C\nlim_{x→∞} 1/x = 0\nF = k·q₁q₂/r²\nE = mc²\nΨ = Ae^{ikx}\n\nClick symbols above to insert.'}
          style={{
            flex: 1, width: '100%',
            padding: '14px 18px',
            fontSize: 20,
            fontFamily: "'Georgia','Times New Roman',serif",
            lineHeight: 1.9, resize: 'none',
            background: '#fff', color: '#111827',
            border: 'none', outline: 'none',
          }}
        />

        {/* Status bar */}
        <div style={{
          flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '5px 12px',
          background: '#f3f4f6', borderTop: '1px solid #e5e7eb',
          fontSize: 11, color: '#6b7280', fontFamily: 'monospace',
        }}>
          <span>Style: Math &nbsp;|&nbsp; {text.length} chars &nbsp;|&nbsp; {TABS.reduce((a,t)=>a+t.symbols.length,0)} symbols available</span>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => { setText(''); taRef.current?.focus(); }} style={{
              fontSize: 11, padding: '2px 10px', borderRadius: 5,
              background: '#fff', border: '1px solid #d1d5db',
              color: '#dc2626', cursor: 'pointer', fontFamily: 'inherit',
            }}>Clear</button>
            <button onClick={handleCopy} style={{
              fontSize: 11, padding: '2px 10px', borderRadius: 5,
              background: copied ? '#f0fdf4' : '#fff',
              border: `1px solid ${copied ? '#86efac' : '#d1d5db'}`,
              color: copied ? '#16a34a' : '#374151',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>{copied ? '✓ Copied' : '⧉ Copy'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}