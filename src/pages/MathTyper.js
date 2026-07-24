import React, { useEffect, useRef, useState } from 'react';

const GROUPS = [
  {
    id: 'common', label: '⭐ Common', color: '#2563eb',
    symbols: [
      { label: 'a/b',  cmd: '\\frac', t:'cmd',   tip:'Fraction' },
      { label: '√',    cmd: '\\sqrt', t:'cmd',   tip:'Square Root' },
      { label: 'xⁿ',  cmd: '^',      t:'cmd',   tip:'Power' },
      { label: 'xₙ',  cmd: '_',      t:'cmd',   tip:'Subscript' },
      { label: 'π',    cmd: '\\pi',              tip:'Pi' },
      { label: '∞',    cmd: '\\infty',           tip:'Infinity' },
      { label: '±',    cmd: '\\pm',              tip:'Plus-Minus' },
      { label: '≠',    cmd: '\\ne',              tip:'Not Equal' },
      { label: '≤',    cmd: '\\le',              tip:'Less or Equal' },
      { label: '≥',    cmd: '\\ge',              tip:'Greater or Equal' },
      { label: '≈',    cmd: '\\approx',          tip:'Approximately' },
      { label: '∑',    cmd: '\\sum', t:'cmd',   tip:'Summation' },
      { label: '∫',    cmd: '\\int', t:'cmd',   tip:'Integral' },
      { label: 'lim',  cmd: '\\lim',             tip:'Limit' },
    ],
  },
  {
    id: 'algebra', label: '🔢 Algebra', color: '#7c3aed',
    symbols: [
      { label: 'a/b',  cmd: '\\frac',                  t:'cmd',   tip:'Fraction' },
      { label: '√x',   cmd: '\\sqrt',                  t:'cmd',   tip:'Square Root' },
      { label: '∛x',   cmd: '\\sqrt[3]{}',             t:'write', tip:'Cube Root' },
      { label: '∜x',   cmd: '\\sqrt[4]{}',             t:'write', tip:'4th Root' },
      { label: 'xⁿ',  cmd: '^',                       t:'cmd',   tip:'Power' },
      { label: 'x²',  cmd: '^2',                      t:'write', tip:'Square' },
      { label: 'x³',  cmd: '^3',                      t:'write', tip:'Cube' },
      { label: 'x⁻¹', cmd: '^{-1}',                  t:'write', tip:'Inverse' },
      { label: 'xₙ',  cmd: '_',                       t:'cmd',   tip:'Subscript' },
      { label: '|x|',  cmd: '\\left|\\right|',        t:'write', tip:'Absolute Value' },
      { label: '( )',  cmd: '\\left(\\right)',         t:'write', tip:'Parentheses' },
      { label: '[ ]',  cmd: '\\left[\\right]',        t:'write', tip:'Brackets' },
      { label: '{ }',  cmd: '\\left\\{\\right\\}',    t:'write', tip:'Braces' },
      { label: '⌊x⌋',  cmd: '\\lfloor\\rfloor',      t:'write', tip:'Floor' },
      { label: '⌈x⌉',  cmd: '\\lceil\\rceil',        t:'write', tip:'Ceiling' },
      { label: '∞',    cmd: '\\infty',                            tip:'Infinity' },
      { label: '±',    cmd: '\\pm',                               tip:'Plus Minus' },
    ],
  },
  {
    id: 'calculus', label: '∫ Calculus', color: '#16a34a',
    symbols: [
      { label: '∫',       cmd: '\\int',                         t:'cmd',   tip:'Indefinite Integral' },
      { label: '∫ₐᵇ',    cmd: '\\int_{a}^{b}',               t:'write', tip:'Definite Integral' },
      { label: '∫₀¹',    cmd: '\\int_{0}^{1}',               t:'write', tip:'Integral 0 to 1' },
      { label: '∫₀^∞',   cmd: '\\int_{0}^{\\infty}',         t:'write', tip:'Integral 0 to ∞' },
      { label: '∫₋∞^∞',  cmd: '\\int_{-\\infty}^{\\infty}',  t:'write', tip:'Integral -∞ to ∞' },
      { label: '∬',       cmd: '\\iint',                        t:'write', tip:'Double Integral' },
      { label: '∭',       cmd: '\\iiint',                       t:'write', tip:'Triple Integral' },
      { label: '∮',       cmd: '\\oint',                        t:'write', tip:'Contour Integral' },
      { label: 'd/dx',    cmd: '\\frac{d}{dx}',                t:'write', tip:'Derivative' },
      { label: 'dy/dx',   cmd: '\\frac{dy}{dx}',               t:'write', tip:'dy/dx' },
      { label: 'd²/dx²',  cmd: '\\frac{d^2}{dx^2}',           t:'write', tip:'2nd Derivative' },
      { label: '∂/∂x',   cmd: '\\frac{\\partial}{\\partial x}', t:'write', tip:'Partial Derivative' },
      { label: '∂',       cmd: '\\partial',                     t:'write', tip:'Partial' },
      { label: '∇',       cmd: '\\nabla',                       t:'write', tip:'Nabla' },
      { label: 'lim',     cmd: '\\lim',                         t:'write', tip:'Limit' },
      { label: 'lim→∞',  cmd: '\\lim_{x\\to\\infty}',         t:'write', tip:'Limit x→∞' },
      { label: 'lim→0',  cmd: '\\lim_{x\\to 0}',              t:'write', tip:'Limit x→0' },
      { label: '∑',       cmd: '\\sum',                         t:'cmd',   tip:'Sum' },
      { label: '∑ᵢ₌₀ⁿ', cmd: '\\sum_{i=0}^{n}',              t:'write', tip:'Sum i=0 to n' },
      { label: '∏',       cmd: '\\prod',                        t:'cmd',   tip:'Product' },
    ],
  },
  {
    id: 'greek', label: 'α Greek', color: '#0f766e',
    symbols: [
      { label:'α', cmd:'\\alpha'   }, { label:'β',  cmd:'\\beta'    },
      { label:'γ', cmd:'\\gamma'   }, { label:'Γ',  cmd:'\\Gamma'   },
      { label:'δ', cmd:'\\delta'   }, { label:'Δ',  cmd:'\\Delta'   },
      { label:'ε', cmd:'\\epsilon' }, { label:'ζ',  cmd:'\\zeta'    },
      { label:'η', cmd:'\\eta'     }, { label:'θ',  cmd:'\\theta'   },
      { label:'Θ', cmd:'\\Theta'   }, { label:'κ',  cmd:'\\kappa'   },
      { label:'λ', cmd:'\\lambda'  }, { label:'Λ',  cmd:'\\Lambda'  },
      { label:'μ', cmd:'\\mu'      }, { label:'ν',  cmd:'\\nu'      },
      { label:'ξ', cmd:'\\xi'      }, { label:'π',  cmd:'\\pi'      },
      { label:'Π', cmd:'\\Pi'      }, { label:'ρ',  cmd:'\\rho'     },
      { label:'σ', cmd:'\\sigma'   }, { label:'Σ',  cmd:'\\Sigma'   },
      { label:'τ', cmd:'\\tau'     }, { label:'φ',  cmd:'\\phi'     },
      { label:'Φ', cmd:'\\Phi'     }, { label:'χ',  cmd:'\\chi'     },
      { label:'ψ', cmd:'\\psi'     }, { label:'Ψ',  cmd:'\\Psi'     },
      { label:'ω', cmd:'\\omega'   }, { label:'Ω',  cmd:'\\Omega'   },
    ],
  },
  {
    id: 'trig', label: '📐 Trig', color: '#be185d',
    symbols: [
      { label:'sin',    cmd:'\\sin',         t:'write', tip:'Sine' },
      { label:'cos',    cmd:'\\cos',         t:'write', tip:'Cosine' },
      { label:'tan',    cmd:'\\tan',         t:'write', tip:'Tangent' },
      { label:'cot',    cmd:'\\cot',         t:'write', tip:'Cotangent' },
      { label:'sec',    cmd:'\\sec',         t:'write', tip:'Secant' },
      { label:'csc',    cmd:'\\csc',         t:'write', tip:'Cosecant' },
      { label:'sin⁻¹', cmd:'\\sin^{-1}',   t:'write', tip:'arcsin' },
      { label:'cos⁻¹', cmd:'\\cos^{-1}',   t:'write', tip:'arccos' },
      { label:'tan⁻¹', cmd:'\\tan^{-1}',   t:'write', tip:'arctan' },
      { label:'sinh',   cmd:'\\sinh',        t:'write', tip:'Hyperbolic sin' },
      { label:'cosh',   cmd:'\\cosh',        t:'write', tip:'Hyperbolic cos' },
      { label:'tanh',   cmd:'\\tanh',        t:'write', tip:'Hyperbolic tan' },
      { label:'°',      cmd:'^\\circ',       t:'write', tip:'Degrees' },
      { label:'π',      cmd:'\\pi',                     tip:'Pi' },
      { label:'π/2',    cmd:'\\frac{\\pi}{2}', t:'write', tip:'π/2' },
      { label:'π/3',    cmd:'\\frac{\\pi}{3}', t:'write', tip:'π/3' },
      { label:'π/4',    cmd:'\\frac{\\pi}{4}', t:'write', tip:'π/4' },
      { label:'π/6',    cmd:'\\frac{\\pi}{6}', t:'write', tip:'π/6' },
    ],
  },
  {
    id: 'sets', label: '∈ Sets', color: '#ea580c',
    symbols: [
      { label:'∈',  cmd:'\\in'        }, { label:'∉', cmd:'\\notin'    },
      { label:'⊂',  cmd:'\\subset'    }, { label:'⊃', cmd:'\\supset'   },
      { label:'⊆',  cmd:'\\subseteq'  }, { label:'⊇', cmd:'\\supseteq' },
      { label:'∪',  cmd:'\\cup'       }, { label:'∩', cmd:'\\cap'      },
      { label:'∅',  cmd:'\\emptyset'  }, { label:'∀', cmd:'\\forall'   },
      { label:'∃',  cmd:'\\exists'    }, { label:'∄', cmd:'\\nexists'  },
      { label:'ℕ',  cmd:'\\mathbb{N}', t:'write' },
      { label:'ℤ',  cmd:'\\mathbb{Z}', t:'write' },
      { label:'ℚ',  cmd:'\\mathbb{Q}', t:'write' },
      { label:'ℝ',  cmd:'\\mathbb{R}', t:'write' },
      { label:'ℂ',  cmd:'\\mathbb{C}', t:'write' },
    ],
  },
  {
    id: 'logic', label: '∧ Logic', color: '#475569',
    symbols: [
      { label:'∧',  cmd:'\\land'           }, { label:'∨',  cmd:'\\lor'             },
      { label:'¬',  cmd:'\\lnot'           }, { label:'→',  cmd:'\\rightarrow'      },
      { label:'↔',  cmd:'\\leftrightarrow' }, { label:'⊕',  cmd:'\\oplus'           },
      { label:'⊤',  cmd:'\\top'            }, { label:'⊥',  cmd:'\\bot'             },
      { label:'∴',  cmd:'\\therefore'      }, { label:'∵',  cmd:'\\because'         },
      { label:'⟹',  cmd:'\\Rightarrow'    }, { label:'⟺',  cmd:'\\Leftrightarrow'  },
      { label:'≡',  cmd:'\\equiv'          },
    ],
  },
  {
    id: 'physics', label: '⚛ Physics', color: '#c2410c',
    symbols: [
      { label:'ℏ',    cmd:'\\hbar',              t:'write', tip:'Planck constant' },
      { label:'ε₀',  cmd:'\\epsilon_0',          t:'write', tip:'Permittivity' },
      { label:'μ₀',  cmd:'\\mu_0',               t:'write', tip:'Permeability' },
      { label:'∇×',  cmd:'\\nabla\\times',       t:'write', tip:'Curl' },
      { label:'∇·',  cmd:'\\nabla\\cdot',        t:'write', tip:'Divergence' },
      { label:'∇²',  cmd:'\\nabla^2',            t:'write', tip:'Laplacian' },
      { label:'v⃗',  cmd:'\\vec{v}',             t:'write', tip:'Velocity' },
      { label:'F⃗',  cmd:'\\vec{F}',             t:'write', tip:'Force' },
      { label:'E⃗',  cmd:'\\vec{E}',             t:'write', tip:'E field' },
      { label:'B⃗',  cmd:'\\vec{B}',             t:'write', tip:'B field' },
      { label:'·',   cmd:'\\cdot',               t:'write', tip:'Dot product' },
      { label:'×',   cmd:'\\times',              t:'write', tip:'Cross product' },
    ],
  },
  {
    id: 'matrix', label: '⊞ Matrix', color: '#059669',
    symbols: [
      { label:'[2×2]', cmd:'\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix}', t:'write', tip:'2×2 Matrix' },
      { label:'[3×3]', cmd:'\\begin{bmatrix}a & b & c\\\\ d & e & f\\\\ g & h & i\\end{bmatrix}', t:'write', tip:'3×3 Matrix' },
      { label:'|det|', cmd:'\\begin{vmatrix}a & b \\\\ c & d\\end{vmatrix}', t:'write', tip:'Determinant' },
      { label:'Aᵀ',   cmd:'A^T',         t:'write', tip:'Transpose' },
      { label:'A⁻¹',  cmd:'A^{-1}',     t:'write', tip:'Inverse' },
      { label:'det',   cmd:'\\det',       t:'write', tip:'Determinant' },
      { label:'tr',    cmd:'\\text{tr}',  t:'write', tip:'Trace' },
      { label:'⊗',    cmd:'\\otimes',               tip:'Tensor product' },
    ],
  },
  {
    id: 'stats', label: '📊 Stats', color: '#0891b2',
    symbols: [
      { label:'x̄',   cmd:'\\bar{x}',      t:'write', tip:'Mean' },
      { label:'μ',    cmd:'\\mu',                     tip:'Population mean' },
      { label:'σ',    cmd:'\\sigma',                  tip:'Std deviation' },
      { label:'σ²',   cmd:'\\sigma^2',     t:'write', tip:'Variance' },
      { label:'ρ',    cmd:'\\rho',                    tip:'Correlation' },
      { label:'χ²',   cmd:'\\chi^2',      t:'write', tip:'Chi-squared' },
      { label:'P(A)', cmd:'P(A)',          t:'write', tip:'Probability' },
      { label:'E(X)', cmd:'E(X)',          t:'write', tip:'Expected value' },
      { label:'nCr',  cmd:'\\binom{n}{r}', t:'write', tip:'Combination' },
      { label:'n!',   cmd:'n!',           t:'write', tip:'Factorial' },
    ],
  },
  {
    id: 'geometry', label: '📐 Geometry', color: '#0284c7',
    symbols: [
      { label:'°',  cmd:'^\\circ',  t:'write', tip:'Degrees' },
      { label:'∠',  cmd:'\\angle',             tip:'Angle' },
      { label:'⊥',  cmd:'\\perp',              tip:'Perpendicular' },
      { label:'∥',  cmd:'\\parallel',          tip:'Parallel' },
      { label:'≅',  cmd:'\\cong',              tip:'Congruent' },
      { label:'∼',  cmd:'\\sim',               tip:'Similar' },
      { label:'△',  cmd:'\\triangle',          tip:'Triangle' },
    ],
  },
];

const QUICK = [
  { label:'a/b', cmd:'\\frac', t:'cmd',   color:'#7c3aed' },
  { label:'√',   cmd:'\\sqrt', t:'cmd',   color:'#16a34a' },
  { label:'xⁿ', cmd:'^',      t:'cmd',   color:'#2563eb' },
  { label:'xₙ', cmd:'_',      t:'cmd',   color:'#2563eb' },
  { label:'∫',   cmd:'\\int',  t:'cmd',   color:'#16a34a' },
  { label:'∑',   cmd:'\\sum',  t:'cmd',   color:'#16a34a' },
  { label:'π',   cmd:'\\pi',              color:'#0f766e' },
  { label:'∞',   cmd:'\\infty',           color:'#0f766e' },
  { label:'±',   cmd:'\\pm',              color:'#475569' },
  { label:'≤',   cmd:'\\le',              color:'#ea580c' },
  { label:'≥',   cmd:'\\ge',              color:'#ea580c' },
  { label:'≠',   cmd:'\\ne',              color:'#ea580c' },
];

export default function MathTyper({ toggleDark, dark }) {
  const mqRef        = useRef(null);
  const containerRef = useRef(null);
  const [latex,    setLatex]    = useState('');
  const [copied,   setCopied]   = useState(false);
  const [groupIdx, setGroupIdx] = useState(0);
  const [mqReady,  setMqReady]  = useState(false);
  const [tooltip,  setTooltip]  = useState('');

  useEffect(() => {
    if (!containerRef.current) return;
    const timer = setTimeout(() => {
      if (!window.MathQuill) return;
      try {
        const MQ = window.MathQuill.getInterface(2);
        mqRef.current = MQ.MathField(containerRef.current, {
          spaceBehavesLikeTab: true,
          handlers: { edit: () => { if (mqRef.current) setLatex(mqRef.current.latex()); } },
        });
        setMqReady(true);
      } catch (e) { console.error(e); }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const ins = (sym) => {
    if (!mqRef.current) return;
    const t = sym.t || 'write';
    if (t === 'cmd')        mqRef.current.cmd(sym.cmd);
    else if (t === 'type')  mqRef.current.typedText(sym.cmd);
    else                    mqRef.current.write(sym.cmd);
    mqRef.current.focus();
  };

  const handleCopy = () => {
    if (!latex) return;
    navigator.clipboard.writeText(latex).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  };

  const activeGroup = GROUPS[groupIdx];

  const btnBase = {
    border: '1px solid var(--border)',
    background: 'var(--bg)',
    color: 'var(--text-primary)',
    borderRadius: 7,
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.1s',
    fontFamily: "'Georgia','Times New Roman',serif",
    fontWeight: 600,
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100dvh', overflow:'hidden', background:'var(--bg)' }}>

      {/* Topbar */}
      <header className="topbar" style={{ flexShrink:0 }}>
        <span style={{ fontWeight:700, fontSize:15, color:'var(--text-primary)' }}>∑ Math Typer</span>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      {/* Symbol Panel */}
      <div style={{ flexShrink:0, background:'var(--card-bg)', borderBottom:'2px solid var(--border)' }}>

        {/* Quick symbols */}
        <div style={{ padding:'7px 10px', borderBottom:'1px solid var(--border)', background:'var(--bg)' }}>
          <div style={{ fontSize:10, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:5 }}>Quick Insert</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
            {QUICK.map((q, i) => (
              <button key={i} onClick={() => ins(q)} title={q.label}
                style={{ ...btnBase, height:34, minWidth:34, padding:'0 8px', fontSize:13, color:q.color, borderColor:q.color+'55', background:q.color+'11' }}
                onMouseEnter={e => { e.currentTarget.style.background=q.color; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor=q.color; setTooltip(q.label); }}
                onMouseLeave={e => { e.currentTarget.style.background=q.color+'11'; e.currentTarget.style.color=q.color; e.currentTarget.style.borderColor=q.color+'55'; setTooltip(''); }}
              >{q.label}</button>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div style={{ display:'flex', overflowX:'auto', scrollbarWidth:'none', background:dark?'#1e293b':'#f1f5f9', borderBottom:'1px solid var(--border)' }}>
          {GROUPS.map((g, i) => (
            <button key={i} onClick={() => setGroupIdx(i)} style={{
              padding:'6px 10px', fontSize:10.5, fontWeight:700,
              whiteSpace:'nowrap', border:'none', cursor:'pointer',
              fontFamily:'inherit',
              background: groupIdx===i ? g.color : 'transparent',
              color: groupIdx===i ? '#fff' : (dark?'#94a3b8':'#64748b'),
              borderBottom: groupIdx===i ? `2.5px solid ${g.color}` : '2.5px solid transparent',
              transition:'all 0.15s', flexShrink:0,
            }}>{g.label}</button>
          ))}
        </div>

        {/* Symbol grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(52px, 1fr))', gap:5, padding:'8px 10px', background:'var(--bg)', borderBottom:'1px solid var(--border)', maxHeight:112, overflowY:'auto' }}>
          {activeGroup.symbols.map((sym, i) => (
            <button key={i} onClick={() => ins(sym)} title={sym.tip || sym.label}
              style={{ ...btnBase, height:34, fontSize:12, overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', width:'100%', color:activeGroup.color, borderColor:activeGroup.color+'44', background:activeGroup.color+'11' }}
              onMouseEnter={e => { e.currentTarget.style.background=activeGroup.color; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor=activeGroup.color; setTooltip(sym.tip||sym.label); }}
              onMouseLeave={e => { e.currentTarget.style.background=activeGroup.color+'11'; e.currentTarget.style.color=activeGroup.color; e.currentTarget.style.borderColor=activeGroup.color+'44'; setTooltip(''); }}
            >{sym.label}</button>
          ))}
        </div>

        {/* Numbers + Operators */}
        <div style={{ display:'flex', alignItems:'center', gap:3, padding:'5px 10px', background:'var(--card-bg)', flexWrap:'wrap' }}>
          {['1','2','3','4','5','6','7','8','9','0','.'].map(n => (
            <button key={n} onClick={() => { if(mqRef.current){ mqRef.current.typedText(n); mqRef.current.focus(); }}}
              style={{ ...btnBase, height:28, minWidth:24, padding:'0 4px', fontSize:12, fontFamily:'monospace', background:dark?'#334155':'#f1f5f9' }}
              onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#2563eb'; }}
              onMouseLeave={e => { e.currentTarget.style.background=dark?'#334155':'#f1f5f9'; e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.borderColor='var(--border)'; }}
            >{n}</button>
          ))}
          <div style={{ width:1, height:18, background:'var(--border)', margin:'0 3px' }} />
          {[
            {l:'+',c:'+',t:'type'},{l:'−',c:'-',t:'type'},{l:'=',c:'=',t:'type'},
            {l:'(',c:'(',t:'type'},{l:')',c:')',t:'type'},
            {l:'×',c:'\\times'},{l:'÷',c:'\\div'},
            {l:'a/b',c:'\\frac',t:'cmd'},{l:'√',c:'\\sqrt',t:'cmd'},
            {l:'xⁿ',c:'^',t:'cmd'},{l:'xₙ',c:'_',t:'cmd'},
          ].map((op,i) => (
            <button key={i} onClick={() => { if(!mqRef.current) return; if(op.t==='type') mqRef.current.typedText(op.c); else if(op.t==='cmd') mqRef.current.cmd(op.c); else mqRef.current.write(op.c); mqRef.current.focus(); }}
              style={{ ...btnBase, height:28, minWidth:28, padding:'0 5px', fontSize:12, color:'#2563eb', background:dark?'#1e3a5f':'#eff6ff', borderColor:'#bfdbfe' }}
              onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#2563eb'; }}
              onMouseLeave={e => { e.currentTarget.style.background=dark?'#1e3a5f':'#eff6ff'; e.currentTarget.style.color='#2563eb'; e.currentTarget.style.borderColor='#bfdbfe'; }}
            >{op.l}</button>
          ))}
          <div style={{ width:1, height:18, background:'var(--border)', margin:'0 3px' }} />
          <button onClick={() => { if(mqRef.current){ mqRef.current.keystroke('Backspace'); mqRef.current.focus(); }}}
            style={{ ...btnBase, height:28, minWidth:32, padding:'0 6px', fontSize:13, fontFamily:'inherit', color:'#dc2626', background:dark?'#3b1f1f':'#fef2f2', borderColor:'#fca5a5' }}
            onMouseEnter={e => { e.currentTarget.style.background='#dc2626'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#dc2626'; }}
            onMouseLeave={e => { e.currentTarget.style.background=dark?'#3b1f1f':'#fef2f2'; e.currentTarget.style.color='#dc2626'; e.currentTarget.style.borderColor='#fca5a5'; }}
          >⌫</button>
        </div>

        {/* Tooltip */}
        <div style={{ padding:'3px 12px', fontSize:11, color:'var(--text-muted)', minHeight:18, background:'var(--card-bg)', borderTop:'1px solid var(--border)' }}>
          {tooltip ? `📌 ${tooltip}` : '💡 Type / for fraction  ·  ^ for power  ·  _ for subscript  ·  Click symbols to insert'}
        </div>
      </div>

      {/* Writing Area */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', background:dark?'#1e293b':'#fff' }}>
        <div style={{ flex:1, overflow:'auto', padding:'20px 24px', cursor:'text' }}
          onClick={() => mqRef.current?.focus()}>
          {!mqReady && <div style={{ fontSize:13, color:'var(--text-muted)' }}>Loading math editor...</div>}
          <div ref={containerRef} style={{ minHeight:80, fontSize:24, color:dark?'#f1f5f9':'#111827', lineHeight:2 }} />
          {mqReady && !latex && (
            <div style={{ marginTop:16, fontSize:13, color:'#aaa', fontStyle:'italic', pointerEvents:'none' }}>
              Click here and start typing your math expression...
            </div>
          )}
        </div>

        {/* LaTeX output */}
        {latex && (
          <div style={{ flexShrink:0, padding:'6px 16px', background:dark?'#0f172a':'#f8fafc', borderTop:'1px solid var(--border)' }}>
            <div style={{ fontSize:10, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:2 }}>LaTeX</div>
            <div style={{ fontSize:12, color:dark?'#94a3b8':'#64748b', fontFamily:'monospace', wordBreak:'break-all', userSelect:'all' }}>{latex}</div>
          </div>
        )}

        {/* Status bar */}
        <div style={{ flexShrink:0, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'4px 14px', background:dark?'#0f172a':'#f8fafc', borderTop:'1px solid var(--border)', fontSize:11, color:'var(--text-muted)' }}>
          <span>{latex.length > 0 ? `${latex.length} chars` : 'Empty'}</span>
          <div style={{ display:'flex', gap:6 }}>
            <button onClick={() => { if(mqRef.current){ mqRef.current.latex(''); setLatex(''); }}}
              style={{ fontSize:11, padding:'2px 10px', borderRadius:6, background:'transparent', border:'1px solid var(--border)', color:'#dc2626', cursor:'pointer', fontFamily:'inherit' }}>
              Clear
            </button>
            <button onClick={handleCopy}
              style={{ fontSize:11, padding:'2px 10px', borderRadius:6, background:copied?'#f0fdf4':'transparent', border:`1px solid ${copied?'#86efac':'var(--border)'}`, color:copied?'#16a34a':'var(--text-secondary)', cursor:'pointer', fontFamily:'inherit', transition:'all 0.2s' }}>
              {copied ? '✓ Copied' : '⧉ Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}