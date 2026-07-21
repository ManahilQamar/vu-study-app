import React, { useState, useRef } from 'react';

const TABS = [
  { label: 'Basic',     color: '#2563eb', symbols: ['+','−','×','÷','=','≠','±','∓','%','·','/','|','!','~','<','>','≤','≥','≈','≡'] },
  { label: 'Powers',    color: '#7c3aed', symbols: ['²','³','⁴','⁵','⁶','⁷','⁸','⁹','⁰','ⁿ','⁻¹','⁻²','⁺','⁻','ˣ','ʸ','ₐ','ₑ','ₒ','ᵢ'] },
  { label: 'Sub',       color: '#b45309', symbols: ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉','₊','₋','ₙ','ₖ','ₘ','ₓ','ⱼ','ₗ','ᵣ','ₛ'] },
  { label: 'Calculus',  color: '#16a34a', symbols: ['∫','∬','∭','∮','∯','∫₀¹','∫₀²','∫ₐᵇ','∫₋∞⁺∞','∫₀^∞','d/dx','dy/dx','d²/dx²','∂','∂/∂x','∂/∂t','∂²','∇','∇²','Δ','δ','lim','lim_{x→0}','lim_{x→∞}','lim_{n→∞}','∑','∑ᵢ₌₀ⁿ','∑ₙ₌₁^∞','∏','∏ᵢ₌₁ⁿ','→'] },
  { label: 'Greek UC',  color: '#0f766e', symbols: ['Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ','Λ','Μ','Ν','Ξ','Ο','Π','Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω'] },
  { label: 'Greek LC',  color: '#9333ea', symbols: ['α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο','π','ρ','σ','ς','τ','υ','φ','χ','ψ','ω','ϕ','ϑ','ϖ','ϱ','ϵ'] },
  { label: 'Sets',      color: '#ea580c', symbols: ['∈','∉','∋','∌','⊂','⊃','⊄','⊅','⊆','⊇','⊈','⊉','∪','∩','∅','∀','∃','∄','ℕ','ℤ','ℚ','ℝ','ℂ','ℙ','ℍ'] },
  { label: 'Logic',     color: '#475569', symbols: ['∧','∨','¬','→','↔','⊕','⊤','⊥','∴','∵','⊢','⊨','⊬','⊭','≡','⟹','⟺','⟵','⟶','⟷'] },
  { label: 'Trig',      color: '#be185d', symbols: ['sin','cos','tan','cot','sec','csc','sin⁻¹','cos⁻¹','tan⁻¹','sinh','cosh','tanh','π','°','rad','2π','π/2','π/3','π/4','π/6'] },
  { label: 'Physics',   color: '#c2410c', symbols: ['ℏ','ε₀','μ₀','λ','ω','α','β','γ','Φ','Ψ','∇×','∇·','F⃗','v⃗','a⃗','E⃗','B⃗','N','J','W','Pa','Hz','T','C','V','Ω','F'] },
  { label: 'Vectors',   color: '#1d4ed8', symbols: ['→','←','↑','↓','↔','↕','↗','↘','↙','↖','⇒','⇐','⇑','⇓','⇔','⟹','⟺','·','×','⊗','⊕','‖'] },
  { label: 'Geometry',  color: '#0284c7', symbols: ['°','∠','∟','⊥','∥','∦','△','▲','▽','□','■','○','●','◎','≅','∼','⌒','⌣'] },
  { label: 'Stats',     color: '#0891b2', symbols: ['x̄','ȳ','μ','σ','σ²','ρ','χ²','Σ','Π','P(A)','P(B)','E(X)','Var','SD','CV','IQR','Q₁','Q₃','n!','%'] },
  { label: 'Matrix',    color: '#059669', symbols: ['[A]','|A|','Aᵀ','A⁻¹','det','tr','∈ℝⁿ','rank','⊗','⊕','∘','⎡','⎢','⎣','⎤','⎥','⎦'] },
  { label: 'Fractions', color: '#b45309', symbols: ['½','⅓','⅔','¼','¾','⅕','⅖','⅗','⅘','⅙','⅚','⅛','⅜','⅝','⅞','⅐','⅑','⅒'], hasFractionBuilder: true },
  { label: 'Numbers',   color: '#6d28d9', symbols: ['ℕ','ℤ','ℚ','ℝ','ℂ','ℙ','ℍ','ℵ₀','ℵ₁','∞','-∞','+∞','i','j','e','π','φ','γ','ℏ'] },
  { label: 'Compare',   color: '#0891b2', symbols: ['<','>','≤','≥','≈','≡','≪','≫','∝','∼','≅','≃','≄','≇','≉','≮','≯','≰','≱'] },
  { label: 'Chemistry', color: '#16a34a', symbols: ['→','⇌','⇒','↑','↓','±','Δ','ΔH','ΔG','ΔS','ΔE','ΔT','°C','°K','mol','M','atm','kPa','²⁺','³⁺','²⁻'] },
  { label: 'Misc',      color: '#64748b', symbols: ['…','·','•','∶','∷','†','‡','§','¶','©','®','™','∴','∵','⋮','⋯','⋱','⋰','≈','≉'] },
];

const NUMPAD = ['7','8','9','4','5','6','1','2','3','0','.','='];
const OPS    = ['+','−','×','÷','(',')','/','√','²','³','^','|'];

export default function MathTyper({ setPage, toggleDark, dark }) {
  const [text,    setText]    = useState('');
  const [tabIdx,  setTabIdx]  = useState(0);
  const [copied,  setCopied]  = useState(false);
  const [search,  setSearch]  = useState('');
  const [fracNum, setFracNum] = useState('');
  const [fracDen, setFracDen] = useState('');
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
      setText(text.slice(0, s - 1) + text.slice(s));
      setTimeout(() => { ta.focus(); ta.setSelectionRange(s - 1, s - 1); }, 0);
    } else if (s !== e) {
      setText(text.slice(0, s) + text.slice(e));
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
    ? TABS.flatMap(t => t.symbols.filter(s => s.toLowerCase().includes(search.toLowerCase())).map(s => ({ sym: s, color: t.color, tab: t.label })))
    : [];

  const btnBase = {
    border: '1px solid var(--border)',
    background: 'var(--bg)',
    color: 'var(--text-primary)',
    borderRadius: 6,
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.1s',
    fontFamily: "'Georgia','Times New Roman',serif",
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100dvh', overflow: 'hidden',
      background: 'var(--bg)',
    }}>

      {/* ── Topbar ── */}
      <header className="topbar" style={{ flexShrink: 0 }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>
          ∑ Math Typer
        </span>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      {/* ── TOP: Symbol Panel ── */}
      <div style={{
        flexShrink: 0,
        background: 'var(--card-bg)',
        borderBottom: '2px solid var(--border)',
      }}>

        {/* Search */}
        <div style={{ padding: '6px 10px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', fontSize:14, color:'var(--text-muted)' }}>🔍</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search symbols..."
              style={{
                width: '100%', padding: '7px 10px 7px 32px',
                fontSize: 13, borderRadius: 8,
                border: '1.5px solid var(--border)',
                background: 'var(--card-bg)', color: 'var(--text-primary)',
                outline: 'none', fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{
                position:'absolute', right:8, top:'50%', transform:'translateY(-50%)',
                background:'none', border:'none', cursor:'pointer',
                fontSize:14, color:'var(--text-muted)', padding:2,
              }}>✕</button>
            )}
          </div>
        </div>

        {/* Search Results */}
        {search.trim() && (
          <div style={{
            padding: '6px 10px',
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            maxHeight: 90, overflowY: 'auto',
          }}>
            {searchResults.length === 0 ? (
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>No symbols found for "{search}"</span>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {searchResults.slice(0, 40).map((s, i) => (
                  <button key={i} onClick={() => insert(s.sym)} title={`${s.sym} — ${s.tab}`}
                    style={{ ...btnBase, height: 30, minWidth: 30, padding: '0 6px', fontSize: 13, color: s.color, borderColor: s.color + '44', background: s.color + '11' }}
                    onMouseEnter={e => { e.currentTarget.style.background=s.color; e.currentTarget.style.color='#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background=s.color+'11'; e.currentTarget.style.color=s.color; }}
                  >{s.sym}</button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Category Tabs */}
        {!search.trim() && (
          <div style={{
            display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
            borderBottom: '1px solid var(--border)',
            background: dark ? '#1e293b' : '#f1f5f9',
          }}>
            {TABS.map((t, i) => (
              <button key={i} onClick={() => setTabIdx(i)} style={{
                padding: '6px 10px', fontSize: 10.5, fontWeight: 700,
                whiteSpace: 'nowrap', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit', letterSpacing: '0.3px',
                background: tabIdx === i ? t.color : 'transparent',
                color: tabIdx === i ? '#fff' : (dark ? '#94a3b8' : '#64748b'),
                borderBottom: tabIdx === i ? `2px solid ${t.color}` : '2px solid transparent',
                transition: 'all 0.15s', flexShrink: 0,
              }}>{t.label}</button>
            ))}
          </div>
        )}

        {/* Symbol Grid */}
        {!search.trim() && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(44px, 1fr))',
            gap: 4, padding: '8px 10px',
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            maxHeight: 108, overflowY: 'auto',
          }}>
            {activeTab.symbols.map((sym, i) => (
              <button key={i} onClick={() => insert(sym)} title={sym}
                style={{ ...btnBase, height: 32, fontSize: 11, fontWeight: 600, overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', width:'100%' }}
                onMouseEnter={e => { e.currentTarget.style.background=activeTab.color; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor=activeTab.color; }}
                onMouseLeave={e => { e.currentTarget.style.background='var(--bg)'; e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.borderColor='var(--border)'; }}
              >{sym}</button>
            ))}
          </div>
        )}

        {/* Fraction Builder */}
        {!search.trim() && activeTab.hasFractionBuilder && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
            padding: '8px 10px',
            background: 'var(--card-bg)',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#b45309', whiteSpace: 'nowrap' }}>Custom Fraction:</span>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <input value={fracNum} onChange={e => setFracNum(e.target.value)} placeholder="top"
                style={{ width: 56, padding: '3px 6px', fontSize: 12, border: '1.5px solid #b45309', borderRadius: 5, background: 'var(--bg)', color: 'var(--text-primary)', textAlign: 'center', fontFamily: 'Georgia, serif', outline: 'none' }} />
              <div style={{ width: 56, height: 1.5, background: '#b45309', borderRadius: 1 }} />
              <input value={fracDen} onChange={e => setFracDen(e.target.value)} placeholder="bottom"
                style={{ width: 56, padding: '3px 6px', fontSize: 12, border: '1.5px solid #b45309', borderRadius: 5, background: 'var(--bg)', color: 'var(--text-primary)', textAlign: 'center', fontFamily: 'Georgia, serif', outline: 'none' }} />
            </div>

            {(fracNum || fracDen) && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4px 8px', background: 'var(--bg)', borderRadius: 8, border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 13, fontFamily: 'Georgia', color: 'var(--text-primary)', lineHeight: 1.2 }}>{fracNum || '□'}</span>
                <div style={{ width: '100%', height: 1.5, background: 'var(--text-primary)', margin: '2px 0' }} />
                <span style={{ fontSize: 13, fontFamily: 'Georgia', color: 'var(--text-primary)', lineHeight: 1.2 }}>{fracDen || '□'}</span>
              </div>
            )}

            <button onClick={() => { if (!fracNum && !fracDen) return; insert(`(${fracNum||'□'})/(${fracDen||'□'})`); }}
              style={{ padding: '5px 12px', borderRadius: 7, background: fracNum||fracDen ? '#b45309':'var(--border)', color: fracNum||fracDen ? '#fff':'var(--text-muted)', border: 'none', fontSize: 12, fontWeight: 700, cursor: fracNum||fracDen ? 'pointer':'default', fontFamily: 'inherit' }}>
              Insert ↵
            </button>
            <button onClick={() => { setFracNum(''); setFracDen(''); }}
              style={{ padding: '5px 10px', borderRadius: 7, background: 'var(--bg)', border: '1px solid var(--border)', color: '#dc2626', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
              Clear
            </button>
          </div>
        )}

        {/* Numbers + Operators Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '5px 10px', background: 'var(--card-bg)', flexWrap: 'wrap' }}>
          {NUMPAD.map(n => (
            <button key={n} onClick={() => insert(n)}
              style={{ ...btnBase, height: 28, minWidth: 24, padding: '0 5px', fontSize: 12, fontFamily: 'monospace', fontWeight: 700, background: dark?'#334155':'#f1f5f9' }}
              onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#2563eb'; }}
              onMouseLeave={e => { e.currentTarget.style.background=dark?'#334155':'#f1f5f9'; e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.borderColor='var(--border)'; }}
            >{n}</button>
          ))}
          <div style={{ width:1, height:18, background:'var(--border)', margin:'0 2px' }} />
          {OPS.map(op => (
            <button key={op} onClick={() => insert(op)}
              style={{ ...btnBase, height: 28, minWidth: 24, padding: '0 5px', fontSize: 13, background: dark?'#1e3a5f':'#eff6ff', border:'1px solid #bfdbfe', color:'#2563eb' }}
              onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#2563eb'; }}
              onMouseLeave={e => { e.currentTarget.style.background=dark?'#1e3a5f':'#eff6ff'; e.currentTarget.style.color='#2563eb'; e.currentTarget.style.borderColor='#bfdbfe'; }}
            >{op}</button>
          ))}
          <div style={{ width:1, height:18, background:'var(--border)', margin:'0 2px' }} />
          <button onClick={backspace}
            style={{ ...btnBase, height: 28, minWidth: 32, padding: '0 6px', fontSize: 13, fontFamily:'inherit', background: dark?'#3b1f1f':'#fef2f2', border:'1px solid #fca5a5', color:'#dc2626' }}
            onMouseEnter={e => { e.currentTarget.style.background='#dc2626'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#dc2626'; }}
            onMouseLeave={e => { e.currentTarget.style.background=dark?'#3b1f1f':'#fef2f2'; e.currentTarget.style.color='#dc2626'; e.currentTarget.style.borderColor='#fca5a5'; }}
          >⌫</button>
        </div>
      </div>

      {/* ── BOTTOM: Writing Area ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: dark ? '#1e293b' : '#fff' }}>

        {/* Textarea */}
        <textarea
          ref={taRef}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={'Type or click symbols above to insert...\n\nExamples:\nf(x) = x² + 3x − 5\n∫₀¹ x² dx = x³/3 + C\nlim_{x→∞} 1/x = 0\nF = kq₁q₂/r²\nE = mc²\nα² + β² = γ²'}
          style={{
            flex: 1, width: '100%',
            padding: '16px 18px',
            fontSize: 19,
            fontFamily: "'Georgia','Times New Roman',serif",
            lineHeight: 1.9, resize: 'none',
            background: 'transparent',
            color: dark ? '#f1f5f9' : '#111827',
            border: 'none', outline: 'none',
          }}
        />

        {/* Status Bar */}
        <div style={{
          flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '5px 14px',
          background: dark ? '#0f172a' : '#f8fafc',
          borderTop: '1px solid var(--border)',
          fontSize: 11.5, color: 'var(--text-muted)',
        }}>
          <span>{text.length} characters · {TABS.reduce((a,t)=>a+t.symbols.length,0)}+ symbols</span>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => { setText(''); taRef.current?.focus(); }} style={{
              fontSize: 11.5, padding: '3px 10px', borderRadius: 6,
              background: 'transparent', border: '1px solid var(--border)',
              color: '#dc2626', cursor: 'pointer', fontFamily: 'inherit',
            }}>Clear</button>
            <button onClick={handleCopy} style={{
              fontSize: 11.5, padding: '3px 10px', borderRadius: 6,
              background: copied ? '#f0fdf4' : 'transparent',
              border: `1px solid ${copied ? '#86efac' : 'var(--border)'}`,
              color: copied ? '#16a34a' : 'var(--text-secondary)',
              cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
            }}>{copied ? '✓ Copied' : '⧉ Copy'}</button>
          </div>
        </div>
      </div>

    </div>
  );
}