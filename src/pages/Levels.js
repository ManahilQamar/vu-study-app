import React, { useState } from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';
import practice from '../data/practice';
import notesData from '../data/notesData';

// Note type styles
const NOTE_TYPES = {
  notes: {
    icon: '📒',
    label: 'Handwritten Notes',
    color: '#16a34a',
    bg: '#f0fdf4',
    btnBg: '#16a34a',
  },
  numericals: {
    icon: '🔢',
    label: 'Solved Numericals',
    color: '#7c3aed',
    bg: '#f5f3ff',
    btnBg: '#7c3aed',
  },
  summary: {
    icon: '📋',
    label: 'Summary Notes',
    color: '#2563eb',
    bg: '#eff6ff',
    btnBg: '#2563eb',
  },
};

export default function Levels({ subject, setPage, toggleDark, dark }) {
  const sub = subjects.find(s => s.id === subject);
  const [activeTab, setActiveTab] = useState('lectures');

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

  const hasData     = i => mcqs[subject]?.[i + 1]?.questions?.length > 0 || !!localStorage.getItem('vu_ai_' + subject + '_' + i);
  const hasPractice = i => (practice[subject]?.[i + 1]?.problems?.length || 0) > 0;
  const isDone      = i => hasData(i) && !!localStorage.getItem('vu_best_' + subject + '_' + i);

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

        {/* Subject Banner */}
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
            className={`levels-tab ${activeTab === 'notes' ? 'levels-tab-active' : ''}`}
            style={activeTab === 'notes' ? { borderBottomColor: sub.color, color: sub.color } : {}}
            onClick={() => setActiveTab('notes')}
          >
            📒 Notes
            {notes.length > 0 && (
              <span className="levels-tab-badge" style={{ background: sub.color }}>
                {notes.length}
              </span>
            )}
          </button>
          <button
            className={`levels-tab ${activeTab === 'lectures' ? 'levels-tab-active' : ''}`}
            style={activeTab === 'lectures' ? { borderBottomColor: sub.color, color: sub.color } : {}}
            onClick={() => setActiveTab('lectures')}
          >
            📚 Lectures
          </button>
        </div>

        {/* ══════════════════════════
            NOTES TAB
        ══════════════════════════ */}
        {activeTab === 'notes' && (
          <div style={{ marginTop: 8 }}>
            {notes.length === 0 ? (
              <div className="empty-card">
                <div className="empty-icon">📒</div>
                <div className="empty-title">No Notes Yet</div>
                <div className="empty-desc">
                  {sub.id} ke notes jald add honge. Tab tak MCQs practice karo!
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {notes.map(note => {
                  const typeStyle = NOTE_TYPES[note.type] || NOTE_TYPES.notes;
                  return (
                    <div key={note.id} style={{
                      background: 'var(--card-bg)',
                      border: `1.5px solid var(--border)`,
                      borderRadius: 16,
                      overflow: 'hidden',
                    }}>
                      {/* Note info */}
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '16px',
                        borderBottom: '1px solid var(--border)',
                      }}>
                        <div style={{
                          width: 50, height: 50, borderRadius: 12,
                          background: typeStyle.bg, flexShrink: 0,
                          display: 'flex', alignItems: 'center',
                          justifyContent: 'center', fontSize: 26,
                        }}>
                          {typeStyle.icon}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            display: 'inline-block',
                            fontSize: 10, fontWeight: 700,
                            color: typeStyle.color,
                            background: typeStyle.bg,
                            padding: '2px 8px', borderRadius: 6,
                            marginBottom: 5, letterSpacing: '0.3px',
                            textTransform: 'uppercase',
                          }}>
                            {typeStyle.label}
                          </div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>
                            {note.title}
                          </div>
                          <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
                            {note.description}
                          </div>
                        </div>
                      </div>

                      {/* View + Download buttons */}
                      <div style={{ display: 'flex' }}>
                        <a
                          href={note.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flex: 1, padding: '12px',
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'center', gap: 6,
                            fontSize: 13, fontWeight: 600,
                            color: typeStyle.color,
                            background: typeStyle.bg,
                            borderRight: '1px solid var(--border)',
                            textDecoration: 'none',
                            transition: 'opacity 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                          👁 View
                        </a>
                        <a
                          href={note.path}
                          download
                          style={{
                            flex: 1, padding: '12px',
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'center', gap: 6,
                            fontSize: 13, fontWeight: 600,
                            color: '#fff',
                            background: typeStyle.btnBg,
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
                  );
                })}

                <div style={{
                  background: '#eff6ff', border: '1px solid #bfdbfe',
                  borderRadius: 12, padding: '12px 14px',
                  fontSize: 13, color: '#1e40af', lineHeight: 1.6,
                }}>
                  💡 <strong>Tip:</strong> Notes download kar lo offline padhai ke liye. Exam se pehle zaroor revise karo!
                </div>
              </div>
            )}
          </div>
        )}

        {/* ══════════════════════════
            LECTURES TAB
        ══════════════════════════ */}
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