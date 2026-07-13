import React, { useState, useRef, useEffect } from 'react';
import subjects from '../data/subjects';
import practice from '../data/practice';

const API_BASE = 'https://vu-game-backend.vercel.app';

const QUICK_SYMBOLS = ['+','−','×','÷','=','≠','≤','≥','²','³','√','π','∞','→','∫','∑','Δ','θ','α','β'];

async function checkAnswerAPI(question, correctAnswer, studentAnswer, subjectId) {
  const res = await fetch(`${API_BASE}/api/check-answer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, correctAnswer, studentAnswer, subjectId }),
  });
  if (!res.ok) throw new Error('Server error');
  return res.json();
}

// KaTeX renderer hook — renders math in a div after mount
function MathText({ text, display = false }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !window.katex) return;

    // Split text by $$ or $ delimiters and render each part
    const el = ref.current;
    el.innerHTML = '';

    const parts = text.split(/(```[\s\S]*?```|\$\$[\s\S]*?\$\$|\$[^$\n]*?\$)/g);

    parts.forEach(part => {
      const span = document.createElement('span');

      if (part.startsWith('$$') && part.endsWith('$$')) {
        // Display math
        const math = part.slice(2, -2);
        try {
          span.innerHTML = window.katex.renderToString(math, { displayMode: true, throwOnError: false });
        } catch {
          span.textContent = part;
        }
      } else if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        // Inline math
        const math = part.slice(1, -1);
        try {
          span.innerHTML = window.katex.renderToString(math, { displayMode: false, throwOnError: false });
        } catch {
          span.textContent = part;
        }
      } else if (part.startsWith('```') && part.endsWith('```')) {
        // Code block
        const code = document.createElement('code');
        code.textContent = part.slice(3, -3).trim();
        code.style.cssText = 'display:block;padding:8px;background:var(--bg);border-radius:6px;font-size:13px;margin:6px 0;font-family:monospace;';
        span.appendChild(code);
      } else {
        // Plain text — preserve newlines
        part.split('\n').forEach((line, i, arr) => {
          span.appendChild(document.createTextNode(line));
          if (i < arr.length - 1) span.appendChild(document.createElement('br'));
        });
      }

      el.appendChild(span);
    });
  }, [text]);

  return (
    <div
      ref={ref}
      style={{ lineHeight: 1.8, fontSize: 15, color: 'var(--text-primary)' }}
    />
  );
}

function renderFeedback(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (!line.trim()) return <div key={i} style={{ height: 6 }} />;
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={j}>{part.slice(2, -2)}</strong>
        : part
    );
    const trimmed = line.trim();
    const isStep   = /^(step\s*\d+|^\d+[.)])/i.test(trimmed);
    const isBullet = trimmed.startsWith('-') || trimmed.startsWith('•');
    return (
      <div key={i} style={{
        fontSize: 14, lineHeight: 1.7, marginBottom: 6,
        fontWeight: isStep ? 700 : 400,
        paddingLeft: isBullet ? 14 : 0, position: 'relative',
      }}>
        {isBullet && <span style={{ position: 'absolute', left: 0 }}>•</span>}
        {isBullet ? rendered.map(r => typeof r === 'string' ? r.replace(/^[-•]\s*/, '') : r) : rendered}
      </div>
    );
  });
}

function ProblemCard({ problem, index, subjectId }) {
  const [answer,   setAnswer]   = useState('');
  const [checking, setChecking] = useState(false);
  const [result,   setResult]   = useState(null);
  const [error,    setError]    = useState('');
  const [showHint, setShowHint] = useState(false);
  const taRef = useRef(null);

  const insert = (sym) => {
    const ta = taRef.current;
    if (!ta) { setAnswer(a => a + sym); return; }
    const s = ta.selectionStart, e = ta.selectionEnd;
    const v = answer.slice(0, s) + sym + answer.slice(e);
    setAnswer(v);
    setTimeout(() => { ta.focus(); ta.setSelectionRange(s + sym.length, s + sym.length); }, 0);
  };

  const handleCheck = async () => {
    if (!answer.trim()) return;
    setChecking(true); setError(''); setResult(null);
    try {
      const data = await checkAnswerAPI(problem.q, problem.answer, answer, subjectId);
      setResult(data);
    } catch {
      setError('Could not check your answer. Please try again.');
    } finally {
      setChecking(false);
    }
  };

  const verdictStyle = (verdict) => {
    if (/correct/i.test(verdict) && !/partially|incorrect/i.test(verdict))
      return { bg: '#ecfdf3', border: '#34d399', text: '#065f46', icon: '✓', iconBg: '#10b981' };
    if (/partially/i.test(verdict))
      return { bg: '#fffbeb', border: '#fbbf24', text: '#78350f', icon: '◐', iconBg: '#f59e0b' };
    return { bg: '#fef2f2', border: '#f87171', text: '#7f1d1d', icon: '✗', iconBg: '#ef4444' };
  };

  return (
    <div style={{
      background: 'var(--card-bg)', border: '1.5px solid var(--border)',
      borderRadius: 14, overflow: 'hidden', marginBottom: 14,
    }}>
      {/* Question */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <div style={{
            width: 26, height: 26, borderRadius: 8,
            background: '#2563eb', color: '#fff',
            fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{index + 1}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <MathText text={problem.q} />
          </div>
        </div>

        {problem.hint && (
          <div style={{ marginTop: 8, marginLeft: 36 }}>
            {!showHint ? (
              <button onClick={() => setShowHint(true)} style={{
                fontSize: 12, color: '#2563eb', background: 'none',
                border: 'none', cursor: 'pointer', fontWeight: 600, padding: 0,
              }}>💡 Show hint</button>
            ) : (
              <div style={{
                fontSize: 12.5, color: '#1e40af', background: '#eff6ff',
                border: '1px solid #bfdbfe', borderRadius: 8,
                padding: '8px 10px', lineHeight: 1.5,
              }}>
                <MathText text={problem.hint} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Symbol row */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 4,
        padding: '8px 12px', background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
      }}>
        {QUICK_SYMBOLS.map((sym, i) => (
          <button key={i} onClick={() => insert(sym)} style={{
            height: 28, minWidth: 28, padding: '0 6px',
            border: '1px solid var(--border)',
            background: 'var(--card-bg)', color: 'var(--text-primary)',
            borderRadius: 6, fontSize: 13, cursor: 'pointer',
            fontFamily: "'Georgia',serif", fontWeight: 600, transition: 'all 0.1s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background='var(--card-bg)'; e.currentTarget.style.color='var(--text-primary)'; }}
          >{sym}</button>
        ))}
      </div>

      {/* Answer textarea */}
      <textarea
        ref={taRef}
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Write your solution here, step by step..."
        rows={4}
        style={{
          width: '100%', padding: '12px 16px',
          fontSize: 16, fontFamily: "'Georgia','Times New Roman',serif",
          lineHeight: 1.7, resize: 'vertical',
          background: 'var(--card-bg)', color: 'var(--text-primary)',
          border: 'none', outline: 'none',
        }}
      />

      {/* Check button + result */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid var(--border)' }}>
        <button onClick={handleCheck} disabled={!answer.trim() || checking} style={{
          width: '100%', padding: '11px', borderRadius: 10, border: 'none',
          background: !answer.trim() ? 'var(--border)' : '#2563eb',
          color: !answer.trim() ? 'var(--text-muted)' : '#fff',
          fontSize: 14, fontWeight: 700,
          cursor: !answer.trim() ? 'default' : 'pointer',
          fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          {checking ? (
            <>
              <div style={{
                width: 15, height: 15, borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff',
                animation: 'spin 0.7s linear infinite',
              }} />
              Checking...
            </>
          ) : '✓ Check Answer'}
        </button>

        {error && <div style={{ fontSize: 13, color: '#dc2626', marginTop: 8 }}>⚠ {error}</div>}

        {result && (() => {
          const vs = verdictStyle(result.verdict);
          return (
            <div style={{
              marginTop: 10, background: vs.bg,
              border: `1.5px solid ${vs.border}`,
              borderRadius: 10, padding: '14px 16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: vs.iconBg, color: '#fff',
                  fontSize: 13, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>{vs.icon}</span>
                <span style={{ fontSize: 14.5, fontWeight: 700, color: vs.text }}>{result.verdict}</span>
              </div>
              <div style={{ color: vs.text }}>{renderFeedback(result.feedback)}</div>
            </div>
          );
        })()}
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function Practice({ subject, lectureIndex, setPage }) {
  const sub      = subjects.find(s => s.id === subject);
  const lecNum   = lectureIndex + 1;
  const problems = practice[subject]?.[lecNum]?.problems || [];

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <span className="topbar-info">{sub?.id} — Practice</span>
      </header>

      <main className="page">
        <div className="home-hero" style={{ marginBottom: 16 }}>
          <p className="home-eyebrow">Hands-on Practice</p>
          <h1 className="home-heading">Lecture {lecNum} Practice</h1>
          <p className="home-sub">Solve each problem, then check your answer for step-by-step feedback.</p>
        </div>

        {problems.length === 0 ? (
          <div className="empty-card">
            <div className="empty-icon">✏️</div>
            <div className="empty-title">No Practice Problems Yet</div>
            <div className="empty-desc">Practice problems for this lecture haven't been added yet.</div>
          </div>
        ) : (
          problems.map((p, i) => (
            <ProblemCard key={i} problem={p} index={i} subjectId={subject} />
          ))
        )}
      </main>
    </div>
  );
}