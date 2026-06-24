import React from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';
import practice from '../data/practice';

export default function Levels({ subject, setPage, toggleDark, dark }) {
  const sub = subjects.find(s => s.id === subject);

  if (!sub) {
    return (
      <div className="shell fade-in">
        <header className="topbar">
          <button className="topbar-back" onClick={() => setPage('home')}>← Back</button>
          <span className="topbar-info">Not Found</span>
        </header>
        <main className="page">
          <div className="empty-card">
            <div className="empty-icon">⚠️</div>
            <div className="empty-title">Subject Not Found</div>
            <div className="empty-desc">
              "{subject}" doesn't exist in the subject list. Go back to home and pick a subject again.
            </div>
            <button className="btn-ghost" onClick={() => setPage('home')}>← Go Home</button>
          </div>
        </main>
      </div>
    );
  }

  const hasData = i => {
    return mcqs[subject]?.[i + 1]?.questions?.length > 0
      || !!localStorage.getItem('vu_ai_' + subject + '_' + i);
  };
  const hasPractice = i => (practice[subject]?.[i + 1]?.problems?.length || 0) > 0;
  const isDone = i => hasData(i) && !!localStorage.getItem('vu_best_' + subject + '_' + i);

  const doneCount = Array.from({ length: sub.total }, (_, i) => i).filter(isDone).length;
  const pct = Math.round((doneCount / sub.total) * 100);

  const handleQuizClick = (i) => {
    if (!hasData(i)) {
      setPage('upload-' + subject + '-' + i);
      return;
    }
    setPage('quiz-' + subject + '-' + i);
  };

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage('home')}>
          ← Back
        </button>
        <span className="topbar-info">{sub.id} — {sub.fullName}</span>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      <main className="page">
        <div className="subject-banner">
          <div className="banner-icon" style={{ background: sub.bg, color: sub.color }}>
            {sub.icon}
          </div>
          <div className="banner-text">
            <div className="banner-name">{sub.id} — {sub.fullName}</div>
            <div className="banner-full">{doneCount} of {sub.total} lectures completed</div>
            <div className="banner-prog">
              <div className="prog-track">
                <div className="prog-bar" style={{ width: pct + '%', background: sub.color }} />
              </div>
              <div className="prog-label">{pct}% complete</div>
            </div>
          </div>
        </div>

        <p className="sec-label">Lectures</p>
        <div className="lec-grid-v2">
          {Array.from({ length: sub.total }, (_, i) => {
            const has = hasData(i);
            const dn  = isDone(i);
            const hasP = hasPractice(i);

            let tileClass = 'lec-card';
            let dotClass  = 'lec-dot ';
            let badgeTxt  = '';
            let badgeCls  = '';

            if (dn) {
              tileClass += ' lt-done';   dotClass += 'dot-done';
              badgeTxt = 'Done'; badgeCls = 'badge-done';
            } else if (has) {
              tileClass += ' lt-active'; dotClass += 'dot-active';
              badgeTxt = 'Play'; badgeCls = 'badge-play';
            } else {
              tileClass += ' lt-soon';   dotClass += 'dot-soon';
              badgeTxt = 'Add MCQs'; badgeCls = 'badge-soon';
            }

            const title = mcqs[subject]?.[i + 1]?.title || ('Lecture ' + (i + 1));

            return (
              <div key={i} className={tileClass}>
                <div className="lec-card-top" onClick={() => handleQuizClick(i)}>
                  <div className={dotClass} />
                  <div className="lec-num">{i + 1}</div>
                  <div className="lec-name">{title}</div>
                  <span className={`lec-badge ${badgeCls}`}>{badgeTxt}</span>
                </div>

                {has && (
                  <div className="lec-card-actions">
                    <button
                      className="lec-action-btn"
                      onClick={() => setPage('summary-' + subject + '-' + i)}
                    >
                      📖 Summary
                    </button>
                    <button
                      className="lec-action-btn"
                      onClick={() => handleQuizClick(i)}
                    >
                      🎯 Quiz
                    </button>
                    {hasP && (
                      <button
                        className="lec-action-btn lec-action-practice"
                        onClick={() => setPage('practice-' + subject + '-' + i)}
                      >
                        ✏️ Practice
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}