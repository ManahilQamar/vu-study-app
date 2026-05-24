import React, { useState } from 'react';
import subjects, { semesters } from '../data/subjects';
import mcqs from '../data/mcqs';

function getProgress(subId) {
  const sub  = subjects.find(s => s.id === subId);
  if (!sub) return { done: 0, total: 0 };
  const saved = localStorage.getItem('vu_un_' + subId);
  const un    = saved ? JSON.parse(saved) : { 0: true };
  const done  = Object.keys(un).filter(k => {
    const i   = parseInt(k);
    const has = mcqs[subId]?.[i + 1]?.questions?.length > 0
      || !!localStorage.getItem('vu_ai_' + subId + '_' + i);
    return un[k] && has && !!localStorage.getItem('vu_best_' + subId + '_' + i);
  }).length;
  return { done, total: sub.total };
}

export default function Home({ setPage, toggleDark, dark }) {
  const [openSem, setOpenSem] = useState(1); // which semester is expanded

  const totalDone = subjects.reduce((a, s) => a + getProgress(s.id).done, 0);
  const totalLec  = subjects.reduce((a, s) => a + s.total, 0);

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="topbar-logo">VU Study</span>
          <span className="topbar-pill">BS CS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="dark-toggle" onClick={toggleDark} title={dark ? 'Light Mode' : 'Dark Mode'}>
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="page">
        <div className="home-hero">
          <p className="home-eyebrow">Study Smart</p>
          <h1 className="home-heading">VU Study</h1>
          <p className="home-sub">Practice MCQs, read summaries, and prepare for exams — semester by semester.</p>
        </div>

        {/* Stats + buttons row */}
        <div className="stats-papers-row">
          <div className="stats-row-inner">
            <div className="stat-box">
              <div className="stat-num">{semesters.length}</div>
              <div className="stat-lbl">Semesters</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{totalDone}</div>
              <div className="stat-lbl">Done</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{totalLec}</div>
              <div className="stat-lbl">Lectures</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <button className="papers-btn-sm" onClick={() => setPage('papers')}>
              <span>📄</span>
              <span>Papers</span>
            </button>
            <button className="papers-btn-sm" onClick={() => setPage('math')} style={{ background: '#7c3aed' }}>
              <span>∑</span>
              <span>Math Typer</span>
            </button>
          </div>
        </div>

        {/* Semester accordion */}
        <p className="sec-label">Semesters</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {semesters.map(sem => {
            const isOpen     = openSem === sem.sem;
            const semDone    = sem.subjects.reduce((a, s) => a + getProgress(s.id).done, 0);
            const semTotal   = sem.subjects.reduce((a, s) => a + s.total, 0);
            const semPct     = Math.round((semDone / semTotal) * 100);

            return (
              <div key={sem.sem} className="sem-block">
                {/* Semester header */}
                <button
                  className={`sem-header ${isOpen ? 'sem-header-open' : ''}`}
                  onClick={() => setOpenSem(isOpen ? null : sem.sem)}
                >
                  <div className="sem-left">
                    <div className="sem-badge">Sem {sem.sem}</div>
                    <div className="sem-info">
                      <div className="sem-title">Semester {sem.sem}</div>
                      <div className="sem-subtitle">{sem.subjects.length} subjects · {semDone}/{semTotal} done</div>
                    </div>
                  </div>
                  <div className="sem-right">
                    <div className="sem-pct-wrap">
                      <div className="sem-pct-track">
                        <div className="sem-pct-fill" style={{ width: semPct + '%' }} />
                      </div>
                      <span className="sem-pct-lbl">{semPct}%</span>
                    </div>
                    <span className="sem-chevron">{isOpen ? '▲' : '▼'}</span>
                  </div>
                </button>

                {/* Subject list (collapsible) */}
                {isOpen && (
                  <div className="sem-subjects">
                    {sem.subjects.map(sub => {
                      const { done, total } = getProgress(sub.id);
                      const pct = Math.round((done / total) * 100);
                      return (
                        <button
                          key={sub.id}
                          className="subj-card sem-subj-card"
                          onClick={() => setPage(sub.id)}
                        >
                          <div className="subj-icon" style={{ background: sub.bg, color: sub.color }}>
                            {sub.icon}
                          </div>
                          <div className="subj-info">
                            <div className="subj-name">{sub.id}</div>
                            <div className="subj-desc">{sub.fullName}</div>
                          </div>
                          <div className="subj-right">
                            <div className="subj-count">{done}/{total}</div>
                            <div className="pbar">
                              <div className="pbar-fill" style={{ width: pct + '%', background: sub.color }} />
                            </div>
                            <span className="subj-chevron">›</span>
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
      </main>
    </div>
  );
}