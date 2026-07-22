import React, { useState, useRef } from 'react';

// ─── Live KaTeX Preview Component ────────────────────────────────
function KaTeXPreview({ text, dark }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    if (window.katex) {
      try {
        // Try to render full text as display math
        const html = window.katex.renderToString(text, {
          displayMode: true,
          throwOnError: false,
          strict: false,
        });
        el.innerHTML = html;
      } catch (e) {
        // Fallback: show as plain text
        el.textContent = text;
      }
    } else if (window.renderMathInElement) {
      el.textContent = text;
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\frac', right: '', display: false },
        ],
        throwOnError: false,
      });
    } else {
      el.textContent = text;
    }
  }, [text]);

  return (
    <div style={{
      flexShrink: 0,
      borderTop: '1px solid var(--border)',
      background: dark ? '#0f172a' : '#f8fafc',
      padding: '10px 16px',
      minHeight: 48,
      maxHeight: 120,
      overflowY: 'auto',
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 6 }}>
        📐 Math Preview
      </div>
      <div
        ref={ref}
        style={{
          fontSize: 18,
          color: dark ? '#f1f5f9' : '#111827',
          fontFamily: 'Georgia, serif',
          lineHeight: 1.8,
          overflowX: 'auto',
        }}
      />
    </div>
  );
}

const TABS = [
  { label: 'Basic',     color: '#2563eb', symbols: ['+','−','×','÷','=','≠','±','∓','%','·','/','|','!','~','<','>','≤','≥','≈','≡'] },
  { label: 'Powers',    color: '#7c3aed', symbols: ['²','³','⁴','⁵','⁶','⁷','⁸','⁹','⁰','ⁿ','⁻¹','⁻²','⁺','⁻','ˣ','ʸ','ₐ','ₑ','ₒ','ᵢ'] },
  { label: 'Sub',       color: '#b45309', symbols: ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉','₊','₋','ₙ','ₖ','ₘ','ₓ','ⱼ','ₗ','ᵣ','ₛ'] },
  { label: 'Calculus',  color: '#16a34a', symbols: ['∫','∬','∭','∮','∯','d/dx','dy/dx','d²/dx²','∂','∂/∂x','∂/∂t','∂²','∇','∇²','Δ','δ','lim','→','∑','∏'] },
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
  { label: 'Builders',  color: '#b45309', symbols: ['½','⅓','⅔','¼','¾','⅕','⅖','⅗','⅘','⅙','⅚','⅛','⅜','⅝','⅞'], hasFractionBuilder: true },
  { label: 'Numbers',   color: '#6d28d9', symbols: ['ℕ','ℤ','ℚ','ℝ','ℂ','ℙ','ℍ','ℵ₀','ℵ₁','∞','-∞','+∞','i','j','e','π','φ','γ','ℏ'] },
  { label: 'Compare',   color: '#0891b2', symbols: ['<','>','≤','≥','≈','≡','≪','≫','∝','∼','≅','≃','≄','≇','≉','≮','≯','≰','≱'] },
  { label: 'Chemistry', color: '#16a34a', symbols: ['→','⇌','⇒','↑','↓','±','Δ','ΔH','ΔG','ΔS','ΔE','ΔT','°C','°K','mol','M','atm','kPa','²⁺','³⁺','²⁻'] },
  { label: 'Misc',      color: '#64748b', symbols: ['…','·','•','∶','∷','†','‡','§','¶','©','®','™','∴','∵','⋮','⋯','⋱','⋰','≈','≉'] },
];

const NUMPAD = ['7','8','9','4','5','6','1','2','3','0','.','='];
const OPS    = ['+','−','×','÷','(',')','/','√','²','³','^','|'];

export default function MathTyper({ setPage, toggleDark, dark }) {
  const [text,     setText]     = useState('');
  const [tabIdx,   setTabIdx]   = useState(0);
  const [copied,   setCopied]   = useState(false);
  const [search,   setSearch]   = useState('');
  // Fraction builder
  const [fracNum,  setFracNum]  = useState('');
  const [fracDen,  setFracDen]  = useState('');
  // Integral builder
  const [intLower, setIntLower] = useState('');
  const [intUpper, setIntUpper] = useState('');
  const [intExpr,  setIntExpr]  = useState('');
  // Limit builder
  const [limVar,   setLimVar]   = useState('');
  const [limTo,    setLimTo]    = useState('');
  const [limExpr,  setLimExpr]  = useState('');

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

  const inputStyle = (color) => ({
    padding: '0 4px', fontSize: 11,
    border: `1.5px solid ${color}`,
    borderRadius: 4,
    background: 'var(--bg)', color: 'var(--text-primary)',
    textAlign: 'center',
    fontFamily: 'Georgia, serif', outline: 'none',
  });

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100dvh', overflow: 'hidden',
      background: 'var(--bg)',
    }}>

      {/* Topbar */}
      <header className="topbar" style={{ flexShrink: 0 }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>∑ Math Typer</span>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      {/* ══ Symbol Panel (fixed) ══ */}
      <div style={{ flexShrink: 0, background: 'var(--card-bg)', borderBottom: '2px solid var(--border)' }}>

        {/* Search */}
        <div style={{ padding: '6px 10px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', fontSize:13, color:'var(--text-muted)' }}>🔍</span>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search symbols..."
              style={{ width:'100%', padding:'6px 10px 6px 30px', fontSize:12, borderRadius:7, border:'1.5px solid var(--border)', background:'var(--card-bg)', color:'var(--text-primary)', outline:'none', fontFamily:'inherit', boxSizing:'border-box' }}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ position:'absolute', right:8, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', fontSize:13, color:'var(--text-muted)', padding:2 }}>✕</button>
            )}
          </div>
        </div>

        {/* Search Results */}
        {search.trim() && (
          <div style={{ padding:'6px 10px', background:'var(--bg)', borderBottom:'1px solid var(--border)', maxHeight:90, overflowY:'auto' }}>
            {searchResults.length === 0
              ? <span style={{ fontSize:12, color:'var(--text-muted)' }}>No symbols found for "{search}"</span>
              : <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                  {searchResults.slice(0,40).map((s,i) => (
                    <button key={i} onClick={() => insert(s.sym)} title={`${s.sym} — ${s.tab}`}
                      style={{ ...btnBase, height:28, minWidth:28, padding:'0 6px', fontSize:12, color:s.color, borderColor:s.color+'44', background:s.color+'11' }}
                      onMouseEnter={e => { e.currentTarget.style.background=s.color; e.currentTarget.style.color='#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.background=s.color+'11'; e.currentTarget.style.color=s.color; }}
                    >{s.sym}</button>
                  ))}
                </div>
            }
          </div>
        )}

        {/* Category Tabs */}
        {!search.trim() && (
          <div style={{ display:'flex', overflowX:'auto', scrollbarWidth:'none', borderBottom:'1px solid var(--border)', background: dark?'#1e293b':'#f1f5f9' }}>
            {TABS.map((t,i) => (
              <button key={i} onClick={() => setTabIdx(i)} style={{
                padding:'5px 9px', fontSize:10, fontWeight:700,
                whiteSpace:'nowrap', border:'none', cursor:'pointer',
                fontFamily:'inherit', letterSpacing:'0.3px',
                background: tabIdx===i ? t.color : 'transparent',
                color: tabIdx===i ? '#fff' : (dark?'#94a3b8':'#64748b'),
                borderBottom: tabIdx===i ? `2px solid ${t.color}` : '2px solid transparent',
                transition:'all 0.15s', flexShrink:0,
              }}>{t.label}</button>
            ))}
          </div>
        )}

        {/* Symbol Grid */}
        {!search.trim() && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(42px, 1fr))', gap:3, padding:'6px 8px', background:'var(--bg)', borderBottom:'1px solid var(--border)', maxHeight:100, overflowY:'auto' }}>
            {activeTab.symbols.map((sym,i) => (
              <button key={i} onClick={() => insert(sym)} title={sym}
                style={{ ...btnBase, height:30, fontSize:11, fontWeight:600, overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', width:'100%' }}
                onMouseEnter={e => { e.currentTarget.style.background=activeTab.color; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor=activeTab.color; }}
                onMouseLeave={e => { e.currentTarget.style.background='var(--bg)'; e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.borderColor='var(--border)'; }}
              >{sym}</button>
            ))}
          </div>
        )}

        {/* ══ Builders Panel (shown when Builders tab active) ══ */}
        {!search.trim() && activeTab.hasFractionBuilder && (
          <div style={{ padding:'8px 10px', background:'var(--card-bg)', borderBottom:'1px solid var(--border)', display:'flex', flexDirection:'column', gap:10 }}>

            {/* ── Fraction ── */}
            <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
              <span style={{ fontSize:10, fontWeight:700, color:'#b45309', minWidth:36 }}>a/b</span>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2 }}>
                <input value={fracNum} onChange={e => setFracNum(e.target.value)} placeholder="□"
                  style={{ ...inputStyle('#b45309'), width:52, height:22 }} />
                <div style={{ width:52, height:1.5, background:'#b45309' }} />
                <input value={fracDen} onChange={e => setFracDen(e.target.value)} placeholder="□"
                  style={{ ...inputStyle('#b45309'), width:52, height:22 }} />
              </div>
              {/* Preview */}
              {(fracNum||fracDen) && (
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'2px 8px', background:'var(--bg)', borderRadius:6, border:'1px solid var(--border)' }}>
                  <span style={{ fontSize:11, fontFamily:'Georgia', color:'var(--text-primary)', lineHeight:1.3 }}>{fracNum||'□'}</span>
                  <div style={{ width:'100%', height:1, background:'var(--text-primary)', margin:'1px 0' }} />
                  <span style={{ fontSize:11, fontFamily:'Georgia', color:'var(--text-primary)', lineHeight:1.3 }}>{fracDen||'□'}</span>
                </div>
              )}
              <button onClick={() => { if(!fracNum&&!fracDen) return; insert(`\\frac{${fracNum||'□'}}{${fracDen||'□'}}`); setFracNum(''); setFracDen(''); }}
                style={{ padding:'4px 10px', borderRadius:6, background:fracNum||fracDen?'#b45309':'var(--border)', color:fracNum||fracDen?'#fff':'var(--text-muted)', border:'none', fontSize:10, fontWeight:700, cursor:fracNum||fracDen?'pointer':'default', fontFamily:'inherit' }}>
                Insert ↵
              </button>
            </div>

            {/* ── Definite Integral ── */}
            <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
              <span style={{ fontSize:10, fontWeight:700, color:'#16a34a', minWidth:36 }}>∫ₐᵇ</span>
              {/* Integral symbol with upper/lower boxes */}
              <div style={{ position:'relative', display:'flex', alignItems:'center' }}>
                <span style={{ fontSize:26, fontFamily:'Georgia', color:'var(--text-primary)', lineHeight:1 }}>∫</span>
                <div style={{ position:'absolute', left:14, top:-2, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
                  <input value={intUpper} onChange={e => setIntUpper(e.target.value)} placeholder="b"
                    style={{ ...inputStyle('#16a34a'), width:26, height:18, fontSize:10 }} />
                  <input value={intLower} onChange={e => setIntLower(e.target.value)} placeholder="a"
                    style={{ ...inputStyle('#16a34a'), width:26, height:18, fontSize:10 }} />
                </div>
                <div style={{ width:20 }} />
              </div>
              <input value={intExpr} onChange={e => setIntExpr(e.target.value)} placeholder="f(x)dx"
                style={{ ...inputStyle('#16a34a'), width:70, height:22, fontSize:12, textAlign:'left', padding:'0 6px' }} />
              {/* Preview */}
              {(intLower||intUpper||intExpr) && (
                <div style={{ fontSize:12, fontFamily:'Georgia', color:'var(--text-primary)', background:'var(--bg)', padding:'3px 8px', borderRadius:6, border:'1px solid var(--border)' }}>
                  ∫<sub style={{ fontSize:9 }}>{intLower||'a'}</sub><sup style={{ fontSize:9 }}>{intUpper||'b'}</sup> {intExpr||'f(x)dx'}
                </div>
              )}
              <button onClick={() => { const lo=intLower||'a', hi=intUpper||'b', ex=intExpr||'f(x)dx'; insert(`∫${lo}^${hi} ${ex}`); setIntLower(''); setIntUpper(''); setIntExpr(''); }}
                style={{ padding:'4px 10px', borderRadius:6, background:'#16a34a', color:'#fff', border:'none', fontSize:10, fontWeight:700, cursor:'pointer', fontFamily:'inherit' }}>
                Insert ↵
              </button>
            </div>

            {/* ── Limit ── */}
            <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
              <span style={{ fontSize:10, fontWeight:700, color:'#7c3aed', minWidth:36 }}>lim</span>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
                <span style={{ fontSize:13, fontFamily:'Georgia', fontWeight:700, color:'var(--text-primary)', lineHeight:1.2 }}>lim</span>
                <div style={{ display:'flex', alignItems:'center', gap:2 }}>
                  <input value={limVar} onChange={e => setLimVar(e.target.value)} placeholder="x"
                    style={{ ...inputStyle('#7c3aed'), width:22, height:16, fontSize:10 }} />
                  <span style={{ fontSize:9, color:'var(--text-muted)' }}>→</span>
                  <input value={limTo} onChange={e => setLimTo(e.target.value)} placeholder="∞"
                    style={{ ...inputStyle('#7c3aed'), width:26, height:16, fontSize:10 }} />
                </div>
              </div>
              <input value={limExpr} onChange={e => setLimExpr(e.target.value)} placeholder="f(x)"
                style={{ ...inputStyle('#7c3aed'), width:65, height:22, fontSize:12, textAlign:'left', padding:'0 6px' }} />
              {(limVar||limTo||limExpr) && (
                <div style={{ fontSize:12, fontFamily:'Georgia', color:'var(--text-primary)', background:'var(--bg)', padding:'3px 8px', borderRadius:6, border:'1px solid var(--border)' }}>
                  lim<sub style={{ fontSize:9 }}>{limVar||'x'}→{limTo||'∞'}</sub> {limExpr||'f(x)'}
                </div>
              )}
              <button onClick={() => { const v=limVar||'x', t=limTo||'∞', ex=limExpr||'f(x)'; insert(`lim_{${v}→${t}} ${ex}`); setLimVar(''); setLimTo(''); setLimExpr(''); }}
                style={{ padding:'4px 10px', borderRadius:6, background:'#7c3aed', color:'#fff', border:'none', fontSize:10, fontWeight:700, cursor:'pointer', fontFamily:'inherit' }}>
                Insert ↵
              </button>
            </div>

          </div>
        )}

        {/* Numbers + Operators Row */}
        <div style={{ display:'flex', alignItems:'center', gap:2, padding:'4px 8px', background:'var(--card-bg)', flexWrap:'wrap' }}>
          {NUMPAD.map(n => (
            <button key={n} onClick={() => insert(n)}
              style={{ ...btnBase, height:26, minWidth:22, padding:'0 4px', fontSize:11, fontFamily:'monospace', fontWeight:700, background:dark?'#334155':'#f1f5f9' }}
              onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#2563eb'; }}
              onMouseLeave={e => { e.currentTarget.style.background=dark?'#334155':'#f1f5f9'; e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.borderColor='var(--border)'; }}
            >{n}</button>
          ))}
          <div style={{ width:1, height:16, background:'var(--border)', margin:'0 2px' }} />
          {OPS.map(op => (
            <button key={op} onClick={() => insert(op)}
              style={{ ...btnBase, height:26, minWidth:22, padding:'0 4px', fontSize:12, background:dark?'#1e3a5f':'#eff6ff', border:'1px solid #bfdbfe', color:'#2563eb' }}
              onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#2563eb'; }}
              onMouseLeave={e => { e.currentTarget.style.background=dark?'#1e3a5f':'#eff6ff'; e.currentTarget.style.color='#2563eb'; e.currentTarget.style.borderColor='#bfdbfe'; }}
            >{op}</button>
          ))}
          <div style={{ width:1, height:16, background:'var(--border)', margin:'0 2px' }} />
          <button onClick={backspace}
            style={{ ...btnBase, height:26, minWidth:30, padding:'0 5px', fontSize:12, fontFamily:'inherit', background:dark?'#3b1f1f':'#fef2f2', border:'1px solid #fca5a5', color:'#dc2626' }}
            onMouseEnter={e => { e.currentTarget.style.background='#dc2626'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#dc2626'; }}
            onMouseLeave={e => { e.currentTarget.style.background=dark?'#3b1f1f':'#fef2f2'; e.currentTarget.style.color='#dc2626'; e.currentTarget.style.borderColor='#fca5a5'; }}
          >⌫</button>
        </div>
      </div>

      {/* ══ Writing Area ══ */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', background: dark?'#1e293b':'#fff' }}>
        <textarea
          ref={taRef}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={'Type or click symbols above...\n\nExamples:\nf(x) = x² + 3x − 5\n∫₀¹ x² dx = x³/3 + C\nlim_{x→∞} 1/x = 0\nF = kq₁q₂/r²\nE = mc²'}
          style={{
            flex:1, width:'100%', padding:'14px 16px',
            fontSize:19, fontFamily:"'Georgia','Times New Roman',serif",
            lineHeight:1.9, resize:'none',
            background:'transparent', color: dark?'#f1f5f9':'#111827',
            border:'none', outline:'none',
          }}
        />
        {/* Live KaTeX Preview */}
        {text && (
          <KaTeXPreview text={text} dark={dark} />
        )}

        <div style={{ flexShrink:0, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'4px 12px', background: dark?'#0f172a':'#f8fafc', borderTop:'1px solid var(--border)', fontSize:11, color:'var(--text-muted)' }}>
          <span>{text.length} chars</span>
          <div style={{ display:'flex', gap:6 }}>
            <button onClick={() => { setText(''); taRef.current?.focus(); }} style={{ fontSize:11, padding:'2px 8px', borderRadius:5, background:'transparent', border:'1px solid var(--border)', color:'#dc2626', cursor:'pointer', fontFamily:'inherit' }}>Clear</button>
            <button onClick={handleCopy} style={{ fontSize:11, padding:'2px 8px', borderRadius:5, background: copied?'#f0fdf4':'transparent', border:`1px solid ${copied?'#86efac':'var(--border)'}`, color: copied?'#16a34a':'var(--text-secondary)', cursor:'pointer', fontFamily:'inherit', transition:'all 0.2s' }}>{copied?'✓ Copied':'⧉ Copy'}</button>
          </div>
        </div>
      </div>

    </div>
  );
}