import React, { useState } from 'react';
import examData from '../data/examData';
import subjects from '../data/subjects';

export default function ExamPaper({ subject, paperType, setPage }) {
  const sub    = subjects.find(s => s.id === subject);
  const paper  = examData[subject]?.[paperType];

  const [mcqAnswers,  setMcqAnswers]  = useState({});
  const [subjAnswers, setSubjAnswers] = useState({});
  const [submitted,   setSubmitted]   = useState(false);
  const [score,       setScore]       = useState(0);

  if (!paper) {
    return (
      <div className="shell fade-in">
        <header className="topbar">
          <span className="topbar-info">Exam Not Found</span>
        </header>
        <main className="page">
          <div className="empty-card">
            <div className="empty-icon">📋</div>
            <div className="empty-title">Paper Not Available</div>
            <div className="empty-desc">This exam paper hasn't been added yet.</div>
          </div>
        </main>
      </div>
    );
  }

  const mcqs         = paper.mcqs        || [];
  const subjectives  = paper.subjective  || [];
  const hasSubj      = subjectives.length > 0;

  const handleMcq = (idx, opt) => {
    if (submitted) return;
    setMcqAnswers(prev => ({ ...prev, [idx]: opt }));
  };

  const handleSubj = (idx, val) => {
    setSubjAnswers(prev => ({ ...prev, [idx]: val }));
  };

  const handleSubmit = () => {
    let correct = 0;
    mcqs.forEach((q, i) => {
      if (mcqAnswers[i] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const allMcqAttempted = mcqs.every((_, i) => mcqAnswers[i]);

  // ── Result Screen ──
  if (submitted) {
    const total   = mcqs.length;
    const pct     = Math.round((score / total) * 100);
    const passed  = pct >= 50;
    const emoji   = pct >= 80 ? '🏆' : passed ? '🌟' : '📖';

    return (
      <div className="shell fade-in">
        <header className="topbar">
          <span className="topbar-info">{paper.title}</span>
        </header>
        <main className="page">

          {/* Score card */}
          <div className="result-card" style={{ marginBottom: 16 }}>
            <span className="result-emoji">{emoji}</span>
            <div className="result-heading">{pct >= 80 ? 'Excellent!' : passed ? 'Good Work!' : 'Keep Practicing!'}</div>
            <div className="result-sub">{paper.title}</div>
            <div className="result-stats">
              <div className="rs"><div className="rs-num">{score}</div><div className="rs-lbl">Correct</div></div>
              <div className="rs"><div className="rs-num">{total - score}</div><div className="rs-lbl">Wrong</div></div>
              <div className="rs"><div className="rs-num">{pct}%</div><div className="rs-lbl">Score</div></div>
            </div>
            <div className={`result-banner ${passed ? 'rb-pass' : 'rb-fail'}`}>
              {passed ? '✓ MCQ section passed!' : '⚠ Review your lecture notes and try again.'}
            </div>
          </div>

          {/* MCQ review */}
          <p className="sec-label">MCQ Review</p>
          {mcqs.map((q, i) => {
            const selected = mcqAnswers[i];
            const correct  = selected === q.answer;
            return (
              <div key={i} style={{
                background: 'var(--card-bg)',
                border: `1.5px solid ${correct ? '#34d399' : '#f87171'}`,
                borderRadius: 12, padding: '12px 14px', marginBottom: 10,
              }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                    background: correct ? '#10b981' : '#ef4444', color: '#fff',
                    fontSize: 12, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{correct ? '✓' : '✗'}</span>
                  <div style={{ fontSize: 13.5, color: 'var(--text-primary)', fontWeight: 500 }}>{q.q}</div>
                </div>
                {!correct && (
                  <div style={{ fontSize: 12.5, color: '#065f46', background: '#ecfdf3', borderRadius: 8, padding: '6px 10px' }}>
                    ✓ Correct: {q.answer}
                  </div>
                )}
              </div>
            );
          })}

          {/* Subjective section reminder */}
          {hasSubj && (
            <div style={{
              background: '#fffbeb', border: '1.5px solid #fbbf24',
              borderRadius: 12, padding: '14px 16px', marginTop: 8,
            }}>
              <div style={{ fontWeight: 700, color: '#78350f', marginBottom: 6 }}>📝 Subjective Section</div>
              <div style={{ fontSize: 13, color: '#92400e', lineHeight: 1.6 }}>
                Your subjective answers have been saved below for self-review. Check them against your textbook / lecture notes for marking.
              </div>
              {subjectives.map((q, i) => (
                <div key={i} style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#78350f', marginBottom: 4 }}>
                    Q{mcqs.length + i + 1}. [{q.marks} marks] {q.q}
                  </div>
                  <div style={{
                    fontSize: 13, color: '#374151', background: '#fff',
                    border: '1px solid #fde68a', borderRadius: 8, padding: '8px 10px',
                    whiteSpace: 'pre-wrap', minHeight: 40,
                  }}>
                    {subjAnswers[i] || '(No answer written)'}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="result-actions" style={{ marginTop: 16 }}>
            <button className="btn-dark" onClick={() => {
              setSubmitted(false); setScore(0);
              setMcqAnswers({}); setSubjAnswers({});
              window.scrollTo(0, 0);
            }}>
              Try Again
            </button>
            <button className="btn-ghost" onClick={() => setPage(subject)}>Back to Lectures</button>
          </div>
        </main>
      </div>
    );
  }

  // ── Exam Paper Screen ──
  return (
    <div className="shell fade-in">
      <header className="topbar">
        <span className="topbar-info" style={{ fontWeight: 700 }}>{paper.title}</span>
      </header>

      <main className="page">

        {/* Paper header */}
        <div style={{
          background: 'var(--card-bg)', border: '1.5px solid var(--border)',
          borderRadius: 14, padding: '16px', marginBottom: 16,
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
            {paper.title}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Total Marks: {paper.totalMarks} &nbsp;·&nbsp; MCQs: {mcqs.length} × {paper.mcqMarks} marks
            {hasSubj && ` · Subjective: ${subjectives.reduce((a, s) => a + s.marks, 0)} marks`}
          </div>
          <div style={{ fontSize: 12, color: '#2563eb', marginTop: 6, fontWeight: 500 }}>
            📌 Attempt all questions. MCQs are auto-checked. Subjective answers are for self-review.
          </div>
        </div>

        {/* ── Section A: MCQs ── */}
        <div style={{ marginBottom: 8 }}>
          <p className="sec-label">Section A — Multiple Choice Questions ({mcqs.length} marks)</p>
          {mcqs.map((q, i) => (
            <div key={i} style={{
              background: 'var(--card-bg)', border: '1.5px solid var(--border)',
              borderRadius: 12, padding: '14px 16px', marginBottom: 10,
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>
                Q{i + 1}. {q.q}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {q.options.map((opt, j) => {
                  const selected = mcqAnswers[i] === opt;
                  return (
                    <button key={j} onClick={() => handleMcq(i, opt)} style={{
                      textAlign: 'left', padding: '9px 14px',
                      borderRadius: 9, border: `1.5px solid ${selected ? '#2563eb' : 'var(--border)'}`,
                      background: selected ? '#eff6ff' : 'var(--bg)',
                      color: selected ? '#1d4ed8' : 'var(--text-primary)',
                      fontSize: 13.5, cursor: 'pointer', fontFamily: 'inherit',
                      fontWeight: selected ? 600 : 400, transition: 'all 0.12s',
                    }}>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── Section B: Subjective ── */}
        {hasSubj && (
          <div style={{ marginBottom: 16 }}>
            <p className="sec-label">Section B — Subjective Questions</p>
            {subjectives.map((q, i) => (
              <div key={i} style={{
                background: 'var(--card-bg)', border: '1.5px solid var(--border)',
                borderRadius: 12, padding: '14px 16px', marginBottom: 10,
              }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                  Q{mcqs.length + i + 1}. [{q.marks} Marks]
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--text-secondary)', marginBottom: 10, lineHeight: 1.6 }}>
                  {q.q}
                </div>
                <textarea
                  value={subjAnswers[i] || ''}
                  onChange={e => handleSubj(i, e.target.value)}
                  placeholder="Write your answer here..."
                  rows={5}
                  style={{
                    width: '100%', padding: '10px 12px',
                    fontSize: 14, fontFamily: "'Georgia', serif",
                    lineHeight: 1.7, resize: 'vertical',
                    background: 'var(--bg)', color: 'var(--text-primary)',
                    border: '1.5px solid var(--border)', borderRadius: 8, outline: 'none',
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={!allMcqAttempted}
          style={{
            width: '100%', padding: '14px',
            borderRadius: 12, border: 'none',
            background: allMcqAttempted ? '#2563eb' : 'var(--border)',
            color: allMcqAttempted ? '#fff' : 'var(--text-muted)',
            fontSize: 15, fontWeight: 700,
            cursor: allMcqAttempted ? 'pointer' : 'default',
            fontFamily: 'inherit', marginBottom: 24,
          }}
        >
          {allMcqAttempted ? '✓ Submit Paper' : `Attempt all MCQs to submit (${Object.keys(mcqAnswers).length}/${mcqs.length} done)`}
        </button>

      </main>
    </div>
  );
}