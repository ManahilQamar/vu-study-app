import React, { useState, useEffect, useRef } from 'react';
import subjects, { semesters } from '../data/subjects';
import mcqs from '../data/mcqs';

/* ──────────────────────────────────────────────────────────
   Animated List Component
────────────────────────────────────────────────────────── */
function AnimatedList({
  children,
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`anim-item ${visible ? 'anim-show' : ''}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Progress
────────────────────────────────────────────────────────── */
function getProgress(subId) {
  const sub = subjects.find(s => s.id === subId);

  if (!sub) return { done: 0, total: 0 };

  const saved = localStorage.getItem('vu_un_' + subId);

  const un = saved
    ? JSON.parse(saved)
    : { 0: true };

  const done = Object.keys(un).filter(k => {
    const i = parseInt(k);

    const has =
      mcqs[subId]?.[i + 1]?.questions?.length > 0 ||
      !!localStorage.getItem('vu_ai_' + subId + '_' + i);

    return (
      un[k] &&
      has &&
      !!localStorage.getItem('vu_best_' + subId + '_' + i)
    );
  }).length;

  return {
    done,
    total: sub.total,
  };
}

/* ──────────────────────────────────────────────────────────
   Colors
────────────────────────────────────────────────────────── */
const SEM_COLORS = [
  '#2563eb',
  '#7c3aed',
  '#0891b2',
  '#16a34a',
  '#ea580c',
  '#dc2626',
  '#9333ea',
  '#0f766e',
];

/* ──────────────────────────────────────────────────────────
   Home
────────────────────────────────────────────────────────── */
export default function Home({
  setPage,
  toggleDark,
  dark,
}) {
  const [openSem, setOpenSem] = useState(1);

  const totalDone = subjects.reduce(
    (a, s) => a + getProgress(s.id).done,
    0
  );

  const totalSubjects = subjects.length;
  const totalSems = semesters.length;

  return (
    <div className="shell fade-in">

      {/* ───────────────── Topbar ───────────────── */}
      <header className="topbar">
        <div className="topbar-brand">
          <div className="vu-logo-mark">VU</div>
          <span className="topbar-logo">Study</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <button
            className="dark-toggle"
            onClick={toggleDark}
            title={dark ? 'Light Mode' : 'Dark Mode'}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="page" style={{ paddingTop: 0 }}>

        {/* ───────────────── Hero ───────────────── */}
        <AnimatedList delay={100}>
          <div className="home-banner">
            <div className="home-banner-content">
              <div className="home-banner-tag">
                BS Computer Science
              </div>

              <h1 className="home-banner-title">
                Prepare Smarter,
                <br />
                Score Better
              </h1>

              <p className="home-banner-sub">
                MCQs · Summaries · Past Papers · AI Chat
              </p>
            </div>

            <div className="home-banner-graphic">
              <div className="hbg-ring hbg-ring-1" />
              <div className="hbg-ring hbg-ring-2" />
              <div className="hbg-center">📚</div>
            </div>
          </div>
        </AnimatedList>

        {/* ───────────────── Quick Actions ───────────────── */}
        <AnimatedList delay={200}>
          <div className="quick-actions">

            <button
              className="qa-btn qa-papers"
              onClick={() => setPage('papers')}
            >
              <span className="qa-icon">📄</span>
              <span className="qa-label">Past Papers</span>
            </button>

            <button
              className="qa-btn qa-math"
              onClick={() => setPage('math')}
            >
              <span className="qa-icon">∑</span>
              <span className="qa-label">Math Typer</span>
            </button>

          </div>
        </AnimatedList>

        {/* ───────────────── Stats ───────────────── */}
        <AnimatedList delay={300}>
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
        </AnimatedList>

        {/* ───────────────── Semester Label ───────────────── */}
        <AnimatedList delay={350}>
          <p
            className="sec-label"
            style={{ marginTop: 24 }}
          >
            Semesters
          </p>
        </AnimatedList>

        {/* ───────────────── Semesters ───────────────── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {semesters.map((sem, idx) => {
            const isOpen = openSem === sem.sem;

            const color =
              SEM_COLORS[idx % SEM_COLORS.length];

            const semDone = sem.subjects.reduce(
              (a, s) => a + getProgress(s.id).done,
              0
            );

            const semTotal = sem.subjects.reduce(
              (a, s) => a + s.total,
              0
            );

            const semPct = Math.round(
              (semDone / semTotal) * 100
            );

            return (
              <AnimatedList
                key={sem.sem}
                delay={idx * 120}
              >
                <div
                  className={`sem-block ${
                    isOpen ? 'sem-block-open' : ''
                  }`}
                >
                  <button
                    className="sem-header"
                    onClick={() =>
                      setOpenSem(
                        isOpen ? null : sem.sem
                      )
                    }
                  >
                    <div
                      className="sem-badge"
                      style={{
                        background: color,
                      }}
                    >
                      {sem.sem}
                    </div>

                    <div className="sem-info">
                      <div className="sem-title">
                        Semester {sem.sem}
                      </div>

                      <div className="sem-subtitle">
                        {sem.subjects.length} subjects
                      </div>
                    </div>

                    <div className="sem-right">

                      <div className="sem-pct-wrap">

                        <div className="sem-pct-track">
                          <div
                            className="sem-pct-fill"
                            style={{
                              width: semPct + '%',
                              background: color,
                            }}
                          />
                        </div>

                        <span className="sem-pct-lbl">
                          {semPct}%
                        </span>

                      </div>

                      <span
                        className="sem-chevron"
                        style={{ color }}
                      >
                        {isOpen ? '▲' : '▼'}
                      </span>

                    </div>
                  </button>

                  {isOpen && (
                    <div className="sem-subjects-list">

                      {sem.subjects.map((sub, subIdx) => {
                        const { done, total } =
                          getProgress(sub.id);

                        const pct = Math.round(
                          (done / total) * 100
                        );

                        return (
                          <AnimatedList
                            key={sub.id}
                            delay={subIdx * 80}
                          >
                            <button
                              className="sem-subj-row"
                              onClick={() =>
                                setPage(sub.id)
                              }
                            >
                              <div
                                className="ssrow-icon"
                                style={{
                                  background: sub.bg,
                                  color: sub.color,
                                }}
                              >
                                {sub.icon}
                              </div>

                              <div className="ssrow-info">
                                <div className="ssrow-name">
                                  {sub.id}
                                </div>

                                <div className="ssrow-full">
                                  {sub.fullName}
                                </div>
                              </div>

                              <div className="ssrow-right">

                                {done > 0 && (
                                  <span className="ssrow-done">
                                    {done} done
                                  </span>
                                )}

                                <div className="ssrow-pbar">
                                  <div
                                    className="ssrow-pfill"
                                    style={{
                                      width: pct + '%',
                                      background:
                                        sub.color,
                                    }}
                                  />
                                </div>

                                <span className="ssrow-arrow">
                                  ›
                                </span>

                              </div>
                            </button>
                          </AnimatedList>
                        );
                      })}

                    </div>
                  )}
                </div>
              </AnimatedList>
            );
          })}
        </div>

        <div style={{ height: 30 }} />

      </main>
    </div>
  );
}