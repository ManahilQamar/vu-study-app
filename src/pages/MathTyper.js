import React, { useState, useRef } from 'react';

// ─── All Math Symbols organized by category ───────────────────────
const SYMBOL_GROUPS = [
  {
    label: 'Basic',
    symbols: [
      { sym: '+', label: '+' },
      { sym: '−', label: '−' },
      { sym: '×', label: '×' },
      { sym: '÷', label: '÷' },
      { sym: '=', label: '=' },
      { sym: '≠', label: '≠' },
      { sym: '±', label: '±' },
      { sym: '∓', label: '∓' },
      { sym: '%', label: '%' },
      { sym: '·', label: '·' },
    ],
  },
  {
    label: 'Compare',
    symbols: [
      { sym: '<', label: '<' },
      { sym: '>', label: '>' },
      { sym: '≤', label: '≤' },
      { sym: '≥', label: '≥' },
      { sym: '≈', label: '≈' },
      { sym: '≡', label: '≡' },
      { sym: '≪', label: '≪' },
      { sym: '≫', label: '≫' },
      { sym: '∝', label: '∝' },
      { sym: '∼', label: '∼' },
    ],
  },
  {
    label: 'Algebra',
    symbols: [
      { sym: '²', label: 'x²' },
      { sym: '³', label: 'x³' },
      { sym: 'ⁿ', label: 'xⁿ' },
      { sym: '√', label: '√' },
      { sym: '∛', label: '∛' },
      { sym: '∜', label: '∜' },
      { sym: '|', label: '|x|' },
      { sym: '⌊', label: '⌊' },
      { sym: '⌋', label: '⌋' },
      { sym: '⌈', label: '⌈' },
      { sym: '⌉', label: '⌉' },
      { sym: '∞', label: '∞' },
    ],
  },
  {
    label: 'Calculus',
    symbols: [
      { sym: '∫', label: '∫' },
      { sym: '∬', label: '∬' },
      { sym: '∭', label: '∭' },
      { sym: '∮', label: '∮' },
      { sym: 'd/dx', label: 'd/dx' },
      { sym: '∂', label: '∂' },
      { sym: '∇', label: '∇' },
      { sym: 'Δ', label: 'Δ' },
      { sym: 'δ', label: 'δ' },
      { sym: 'lim', label: 'lim' },
      { sym: '→', label: '→' },
      { sym: '∑', label: '∑' },
      { sym: '∏', label: '∏' },
    ],
  },
  {
    label: 'Greek',
    symbols: [
      { sym: 'α', label: 'α' },
      { sym: 'β', label: 'β' },
      { sym: 'γ', label: 'γ' },
      { sym: 'Γ', label: 'Γ' },
      { sym: 'δ', label: 'δ' },
      { sym: 'Δ', label: 'Δ' },
      { sym: 'ε', label: 'ε' },
      { sym: 'ζ', label: 'ζ' },
      { sym: 'η', label: 'η' },
      { sym: 'θ', label: 'θ' },
      { sym: 'Θ', label: 'Θ' },
      { sym: 'λ', label: 'λ' },
      { sym: 'μ', label: 'μ' },
      { sym: 'π', label: 'π' },
      { sym: 'Π', label: 'Π' },
      { sym: 'ρ', label: 'ρ' },
      { sym: 'σ', label: 'σ' },
      { sym: 'Σ', label: 'Σ' },
      { sym: 'τ', label: 'τ' },
      { sym: 'φ', label: 'φ' },
      { sym: 'Φ', label: 'Φ' },
      { sym: 'χ', label: 'χ' },
      { sym: 'ψ', label: 'ψ' },
      { sym: 'ω', label: 'ω' },
      { sym: 'Ω', label: 'Ω' },
    ],
  },
  {
    label: 'Set Theory',
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
      { sym: '∀', label: '∀' },
      { sym: '∃', label: '∃' },
      { sym: '∄', label: '∄' },
      { sym: 'ℕ', label: 'ℕ' },
      { sym: 'ℤ', label: 'ℤ' },
      { sym: 'ℚ', label: 'ℚ' },
      { sym: 'ℝ', label: 'ℝ' },
      { sym: 'ℂ', label: 'ℂ' },
    ],
  },
  {
    label: 'Logic',
    symbols: [
      { sym: '∧', label: '∧' },
      { sym: '∨', label: '∨' },
      { sym: '¬', label: '¬' },
      { sym: '→', label: '→' },
      { sym: '↔', label: '↔' },
      { sym: '⊕', label: '⊕' },
      { sym: '⊤', label: '⊤' },
      { sym: '⊥', label: '⊥' },
      { sym: '∴', label: '∴' },
      { sym: '∵', label: '∵' },
    ],
  },
  {
    label: 'Geometry',
    symbols: [
      { sym: '°', label: '°' },
      { sym: '∠', label: '∠' },
      { sym: '⊥', label: '⊥' },
      { sym: '∥', label: '∥' },
      { sym: '△', label: '△' },
      { sym: '□', label: '□' },
      { sym: '○', label: '○' },
      { sym: '≅', label: '≅' },
      { sym: '∼', label: '∼' },
      { sym: 'π', label: 'π' },
    ],
  },
  {
    label: 'Fractions',
    symbols: [
      { sym: '½', label: '½' },
      { sym: '⅓', label: '⅓' },
      { sym: '⅔', label: '⅔' },
      { sym: '¼', label: '¼' },
      { sym: '¾', label: '¾' },
      { sym: '⅕', label: '⅕' },
      { sym: '⅙', label: '⅙' },
      { sym: '⅛', label: '⅛' },
    ],
  },
  {
    label: 'Arrows',
    symbols: [
      { sym: '→', label: '→' },
      { sym: '←', label: '←' },
      { sym: '↑', label: '↑' },
      { sym: '↓', label: '↓' },
      { sym: '↔', label: '↔' },
      { sym: '⇒', label: '⇒' },
      { sym: '⇐', label: '⇐' },
      { sym: '⇔', label: '⇔' },
      { sym: '↦', label: '↦' },
      { sym: '∞', label: '∞' },
    ],
  },
];

export default function MathTyper({ setPage, toggleDark, dark }) {
  const [text,      setText]      = useState('');
  const [activeGrp, setActiveGrp] = useState(0);
  const [copied,    setCopied]    = useState(false);
  const taRef = useRef(null);

  // Insert symbol at cursor position
  const insertSymbol = (sym) => {
    const ta    = taRef.current;
    if (!ta) { setText(t => t + sym); return; }
    const start = ta.selectionStart;
    const end   = ta.selectionEnd;
    const newText = text.slice(0, start) + sym + text.slice(end);
    setText(newText);
    setTimeout(() => {
      ta.focus();
      ta.setSelectionRange(start + sym.length, start + sym.length);
    }, 0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleClear = () => {
    setText('');
    taRef.current?.focus();
  };

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage('home')}>← Back</button>
        <span className="topbar-info">Math Typer</span>
        <button className="dark-toggle" onClick={toggleDark} title={dark ? 'Light Mode' : 'Dark Mode'}>
          {dark ? '☀️' : '🌙'}
        </button>
      </header>

      <main className="page" style={{ paddingBottom: 40 }}>

        {/* Header */}
        <div className="home-hero" style={{ marginBottom: 16 }}>
          <p className="home-eyebrow">Practice Tool</p>
          <h1 className="home-heading">Math Typer</h1>
          <p className="home-sub">Click any symbol to insert it. Practice typing math questions just like your computer exam.</p>
        </div>

        {/* Symbol Panel */}
        <div className="mt-panel">
          {/* Category tabs */}
          <div className="mt-tabs">
            {SYMBOL_GROUPS.map((grp, i) => (
              <button
                key={i}
                className={`mt-tab${activeGrp === i ? ' mt-tab-active' : ''}`}
                onClick={() => setActiveGrp(i)}
              >
                {grp.label}
              </button>
            ))}
          </div>

          {/* Symbols grid */}
          <div className="mt-symbols">
            {SYMBOL_GROUPS[activeGrp].symbols.map((s, i) => (
              <button
                key={i}
                className="mt-sym-btn"
                onClick={() => insertSymbol(s.sym)}
                title={s.sym}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Writing Area */}
        <div className="mt-editor">
          <div className="mt-editor-header">
            <span className="mt-editor-label">✏️ Write your answer here</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="mt-action-btn" onClick={handleCopy}>
                {copied ? '✓ Copied!' : '⧉ Copy'}
              </button>
              <button className="mt-action-btn mt-clear-btn" onClick={handleClear}>
                ✕ Clear
              </button>
            </div>
          </div>

          <textarea
            ref={taRef}
            className="mt-textarea"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Start typing your math solution here...
Example: If f(x) = x² + 3x, find f'(x)
f'(x) = 2x + 3

Click the symbols above to insert them!"
            spellCheck={false}
          />

          {/* Preview */}
          {text && (
            <div className="mt-preview">
              <div className="mt-preview-label">Preview</div>
              <div className="mt-preview-text">{text}</div>
            </div>
          )}

          {/* Character count */}
          <div className="mt-footer">
            <span>{text.length} characters</span>
            <span>{text.split('\n').length} lines</span>
          </div>
        </div>

        {/* Quick reference */}
        <div className="mt-tip">
          💡 <strong>Tip:</strong> You can also type directly on your keyboard. Click symbols to insert them at the cursor position.
        </div>

      </main>
    </div>
  );
}