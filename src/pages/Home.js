import React from 'react';
import subjects, { semesters } from '../data/subjects';
import mcqs from '../data/mcqs';

function getProgress(subId) {
  const sub  = subjects.find(s => s.id === subId);
  if (!sub) return { done: 0, total: 0 };
  const done = Array.from({ length: sub.total }, (_, i) => i).filter(i => {
    const has = mcqs[subId]?.[i + 1]?.questions?.length > 0
      || !!localStorage.getItem('vu_ai_' + subId + '_' + i);
    return has && !!localStorage.getItem('vu_best_' + subId + '_' + i);
  }).length;
  return { done, total: sub.total };
}

const SEM_COLORS = [
  '#2563eb','#7c3aed','#0891b2','#16a34a',
  '#ea580c','#dc2626','#9333ea','#0f766e',
];

export default function Home({ setPage, toggleDark, dark }) {
  const [openSem, setOpenSem] = React.useState(1);

  const totalDone     = subjects.reduce((a, s) => a + getProgress(s.id).done, 0);
  const totalSubjects = subjects.length;
  const totalSems     = semesters.length;

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <div className="topbar-brand">
          <div className="vu-logo-mark">VU</div>
          <span className="topbar-logo">Study</span>
        </div>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      <main className="page" style={{ paddingTop: 0 }}>

        {/* Hero Banner */}
        <div className="home-banner">
          <div className="home-banner-content">
            <div className="home-banner-tag">BS Computer Science</div>
            <h1 className="home-banner-title">Prepare Smarter,<br />Score Better</h1>
            <p className="home-banner-sub">MCQs · Summaries · Past Papers · AI Chat</p>
          </div>
          <div className="home-banner-graphic">
            <div className="hbg-ring hbg-ring-1" />
            <div className="hbg-ring hbg-ring-2" />
            <div className="hbg-center">📚</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="qa-btn qa-papers" onClick={() => setPage('papers')}>
            <span className="qa-icon">📄</span>
            <span className="qa-label">Past Papers</span>
          </button>
          <button className="qa-btn qa-math" onClick={() => setPage('math')}>
            <span className="qa-icon">∑</span>
            <span className="qa-label">Math Typer</span>
          </button>
          <button className="qa-btn" onClick={() => setPage('exams')} style={{ background: '#fef2f2' }}>
            <span className="qa-icon" style={{ fontSize: 20 }}>📝</span>
            <span className="qa-label" style={{ color: '#7f1d1d' }}>Mock Exams</span>
          </button>
        </div>

        {/* Stats */}
        <div className="home-stats">
          <div className="hstat">
            <div className="hstat-num">{totalSems}</div>
            <div className="hstat-lbl">Semesters</div>
          </div>
          <div className="hstat-divider" />
          <div className="hstat">
            <div className="hstat-num">{totalSubjects}</div>
            <div className="hstat-lbl">Subjects</div>
          </div>
          <div className="hstat-divider" />
          <div className="hstat">
            <div className="hstat-num">{totalDone}</div>
            <div className="hstat-lbl">Completed</div>
          </div>
        </div>

        {/* Semester Accordion */}
        <p className="sec-label" style={{ marginTop: 24 }}>Semesters</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {semesters.map((sem, idx) => {
            const isOpen   = openSem === sem.sem;
            const color    = SEM_COLORS[idx % SEM_COLORS.length];
            const semDone  = sem.subjects.reduce((a, s) => a + getProgress(s.id).done, 0);
            const semTotal = sem.subjects.reduce((a, s) => a + s.total, 0);
            const semPct   = Math.round((semDone / semTotal) * 100);

            return (
              <div key={sem.sem} className={`sem-block ${isOpen ? 'sem-block-open' : ''}`}>
                <button
                  className="sem-header"
                  onClick={() => setOpenSem(isOpen ? null : sem.sem)}
                >
                  <div className="sem-badge" style={{ background: color }}>{sem.sem}</div>
                  <div className="sem-info">
                    <div className="sem-title">Semester {sem.sem}</div>
                    <div className="sem-subtitle">{sem.subjects.length} subjects</div>
                  </div>
                  <div className="sem-right">
                    <div className="sem-pct-wrap">
                      <div className="sem-pct-track">
                        <div className="sem-pct-fill" style={{ width: semPct + '%', background: color }} />
                      </div>
                      <span className="sem-pct-lbl">{semPct}%</span>
                    </div>
                    <span className="sem-chevron" style={{ color }}>{isOpen ? '▲' : '▼'}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="sem-subjects-list">
                    {sem.subjects.map(sub => {
                      const { done, total } = getProgress(sub.id);
                      const pct = Math.round((done / total) * 100);
                      return (
                        <button
                          key={sub.id}
                          className="sem-subj-row"
                          onClick={() => setPage(sub.id)}
                        >
                          <div className="ssrow-icon" style={{ background: sub.bg, color: sub.color }}>
                            {sub.icon}
                          </div>
                          <div className="ssrow-info">
                            <div className="ssrow-name">{sub.id}</div>
                            <div className="ssrow-full">{sub.fullName}</div>
                          </div>
                          <div className="ssrow-right">
                            {done > 0 && <span className="ssrow-done">{done} done</span>}
                            <div className="ssrow-pbar">
                              <div className="ssrow-pfill" style={{ width: pct + '%', background: sub.color }} />
                            </div>
                            <span className="ssrow-arrow">›</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ height: 20 }} />
      </main>
    </div>
  );
}