import React, { useState } from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';
import practice from '../data/practice';
import notesData from '../data/notesData';

export default function Levels({ subject, setPage, toggleDark, dark }) {
  const sub = subjects.find(s => s.id === subject);
  const [activeTab, setActiveTab] = useState('lectures'); // 'notes' | 'lectures'

  if (!sub) {
    return (
      <div className="shell fade-in">
        <header className="topbar">
          <span className="topbar-info">Not Found</span>
          <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
        </header>
        <main className="page">
          <div className="empty-card">
            <div className="empty-icon">⚠️</div>
            <div className="empty-title">Subject Not Found</div>
            <div className="empty-desc">Use your phone/browser back button to go back.</div>
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
    if (!hasData(i)) { setPage('upload-' + subject + '-' + i); return; }
    setPage('quiz-' + subject + '-' + i);
  };

  const notes = notesData[subject] || [];

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <span className="topbar-info">{sub.id} — {sub.fullName}</span>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      <main className="page">
        {/* Subject banner */}
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

        {/* ── Tabs ── */}
        <div className="levels-tabs">
          <button
            className={`levels-tab ${activeTab === 'lectures' ? 'levels-tab-active' : ''}`}
            style={ activeTab === 'lectures' ? { borderBottomColor: sub.color, color: sub.color } : {}}
            onClick={() => setActiveTab('lectures')}
          >
            📚 Lectures
          </button>
          <button
            className={`levels-tab ${activeTab === 'notes' ? 'levels-tab-active' : ''}`}
            style={ activeTab === 'notes' ? { borderBottomColor: sub.color, color: sub.color } : {}}
            onClick={() => setActiveTab('notes')}
          >
            📒 Notes
            {notes.length > 0 && (
              <span className="levels-tab-badge">{notes.length}</span>
            )}
          </button>
        </div>

        {/* ── Notes Tab ── */}
        {activeTab === 'notes' && (
          <div style={{ marginTop: 4 }}>
            {notes.length === 0 ? (
              <div className="empty-card">
                <div className="empty-icon">📒</div>
                <div className="empty-title">No Notes Yet</div>
                <div className="empty-desc">
                  {sub.id} ke handwritten notes jald add honge. Tab tak MCQs practice karo!
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {notes.map(note => (
                  <div key={note.id} style={{
                    background: 'var(--card-bg)',
                    border: '1.5px solid var(--border)',
                    borderRadius: 16,
                    overflow: 'hidden',
                  }}>
                    {/* Note header */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '16px',
                      borderBottom: '1px solid var(--border)',
                    }}>
                      {/* PDF icon */}
                      <div style={{
                        width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                        background: '#fef2f2',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 24,
                      }}>
                        📄
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 3 }}>
                          {note.title}
                        </div>
                        <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
                          {note.description}
                          {note.pages && ` · ${note.pages} pages`}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: 0 }}>
                      {/* View button */}
                      <a
                        href={note.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1, padding: '12px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                          fontSize: 13, fontWeight: 600,
                          color: sub.color, background: sub.bg,
                          borderRight: '1px solid var(--border)',
                          textDecoration: 'none',
                          transition: 'opacity 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      >
                        👁 View Notes
                      </a>

                      {/* Download button */}
                      <a
                        href={note.path}
                        download
                        style={{
                          flex: 1, padding: '12px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                          fontSize: 13, fontWeight: 600,
                          color: '#fff', background: sub.color,
                          textDecoration: 'none',
                          transition: 'opacity 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      >
                        ⬇ Download
                      </a>
                    </div>
                  </div>
                ))}

                {/* Info box */}
                <div style={{
                  background: '#eff6ff', border: '1px solid #bfdbfe',
                  borderRadius: 12, padding: '12px 14px',
                  fontSize: 13, color: '#1e40af', lineHeight: 1.6,
                }}>
                  💡 <strong>Tip:</strong> Notes download karo aur offline bhi parh sako. Exam se pehle in notes ko zaroor revise karo!
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Lectures Tab ── */}
        {activeTab === 'lectures' && (
          <>
            <p className="sec-label" style={{ marginTop: 16 }}>Lectures</p>
            <div className="lec-grid-v2">
              {Array.from({ length: sub.total }, (_, i) => {
                const has  = hasData(i);
                const dn   = isDone(i);
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
                        <button className="lec-action-btn" onClick={() => setPage('summary-' + subject + '-' + i)}>
                          📖 Summary
                        </button>
                        <button className="lec-action-btn" onClick={() => handleQuizClick(i)}>
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
          </>
        )}

      </main>
    </div>
  );
}