import React, { useState, useRef } from 'react';
import subjects from '../data/subjects';
import practice from '../data/practice';

const API_BASE = 'https://vu-game-backend.vercel.app';

// ─── Compact symbol toolbar (reused from Math Typer) ─────────────
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

function ProblemCard({ problem, index, subjectId }) {
  const [answer,   setAnswer]   = useState('');
  const [checking, setChecking] = useState(false);
  const [result,   setResult]   = useState(null); // { verdict, feedback }
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
    setChecking(true);
    setError('');
    setResult(null);
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
    if (/correct/i.test(verdict) && !/partially|incorrect/i.test(verdict)) {
      return { bg: '#f0fdf4', border: '#86efac', color: '#16a34a', icon: '✓' };
    }
    if (/partially/i.test(verdict)) {
      return { bg: '#fffbeb', border: '#fde68a', color: '#b45309', icon: '◐' };
    }
    return { bg: '#fef2f2', border: '#fca5a5', color: '#dc2626', icon: '✗' };
  };

  return (
    <div style={{
      background: 'var(--card-bg)',
      border: '1.5px solid var(--border)',
      borderRadius: 14,
      overflow: 'hidden',
      marginBottom: 14,
    }}>
      {/* Question header */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <div style={{
            width: 26, height: 26, borderRadius: 8,
            background: '#2563eb', color: '#fff',
            fontSize: 13, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, marginTop: 1,
          }}>
            {index + 1}
          </div>
          <div style={{ fontSize: 15, color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 500 }}>
            {problem.q}
          </div>
        </div>

        {problem.hint && (
          <div style={{ marginTop: 8, marginLeft: 36 }}>
            {!showHint ? (
              <button onClick={() => setShowHint(true)} style={{
                fontSize: 12, color: '#2563eb', background: 'none',
                border: 'none', cursor: 'pointer', fontWeight: 600, padding: 0,
              }}>
                💡 Show hint
              </button>
            ) : (
              <div style={{
                fontSize: 12.5, color: '#1e40af', background: '#eff6ff',
                border: '1px solid #bfdbfe', borderRadius: 8,
                padding: '8px 10px', lineHeight: 1.5,
              }}>
                {problem.hint}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Quick symbol row */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 4,
        padding: '8px 12px',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
      }}>
        {QUICK_SYMBOLS.map((sym, i) => (
          <button key={i} onClick={() => insert(sym)} style={{
            height: 28, minWidth: 28, padding: '0 6px',
            border: '1px solid var(--border)',
            background: 'var(--card-bg)', color: 'var(--text-primary)',
            borderRadius: 6, fontSize: 13, cursor: 'pointer',
            fontFamily: "'Georgia',serif", fontWeight: 600,
            transition: 'all 0.1s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--card-bg)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            {sym}
          </button>
        ))}
      </div>

      {/* Answer writing area */}
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

      {/* Check button */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid var(--border)' }}>
        <button
          onClick={handleCheck}
          disabled={!answer.trim() || checking}
          style={{
            width: '100%', padding: '11px',
            borderRadius: 10, border: 'none',
            background: !answer.trim() ? 'var(--border)' : '#2563eb',
            color: !answer.trim() ? 'var(--text-muted)' : '#fff',
            fontSize: 14, fontWeight: 700,
            cursor: !answer.trim() ? 'default' : 'pointer',
            fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
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

        {error && (
          <div style={{ fontSize: 13, color: '#dc2626', marginTop: 8 }}>⚠ {error}</div>
        )}

        {result && (
          <div style={{
            marginTop: 10,
            background: verdictStyle(result.verdict).bg,
            border: `1.5px solid ${verdictStyle(result.verdict).border}`,
            borderRadius: 10, padding: '12px 14px',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 14, fontWeight: 700,
              color: verdictStyle(result.verdict).color,
              marginBottom: 6,
            }}>
              <span style={{ fontSize: 16 }}>{verdictStyle(result.verdict).icon}</span>
              {result.verdict}
            </div>
            <div style={{
              fontSize: 13.5, color: 'var(--text-secondary)',
              lineHeight: 1.7, whiteSpace: 'pre-wrap',
            }}>
              {result.feedback}
            </div>
          </div>
        )}
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
        <button className="topbar-back" onClick={() => setPage(subject)}>← Back</button>
        <span className="topbar-info">{sub?.id} — Practice</span>
      </header>

      <main className="page">
        <div className="home-hero" style={{ marginBottom: 16 }}>
          <p className="home-eyebrow">Hands-on Practice</p>
          <h1 className="home-heading">Lecture {lecNum} Practice</h1>
          <p className="home-sub">
            Solve each problem step by step, then check your answer to see if you got it right.
          </p>
        </div>

        {problems.length === 0 ? (
          <div className="empty-card">
            <div className="empty-icon">✏️</div>
            <div className="empty-title">No Practice Problems Yet</div>
            <div className="empty-desc">
              Practice problems for this lecture haven't been added yet. Check back soon!
            </div>
            <button className="btn-ghost" onClick={() => setPage(subject)}>← Go Back</button>
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