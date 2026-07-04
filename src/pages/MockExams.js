import React from 'react';
import subjects from '../data/subjects';
import examData from '../data/examData';

const PAPER_COLORS = {
  mid:   { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe', label: 'Mid Term' },
  final: { bg: '#f5f3ff', color: '#7c3aed', border: '#ddd6fe', label: 'Final Term' },
};

export default function MockExams({ setPage, toggleDark, dark }) {
  return (
    <div className="shell fade-in">
      <header className="topbar">
        <span className="topbar-info" style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
          📝 Mock Exams
        </span>
        <button className="dark-toggle" onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
      </header>

      <main className="page">
        <div className="home-hero" style={{ marginBottom: 20 }}>
          <p className="home-eyebrow">Exam Preparation</p>
          <h1 className="home-heading">Mock Papers</h1>
          <p className="home-sub">
            Attempt Mid Term or Final Term mock papers for each subject. MCQs are auto-checked. Good luck! 🎯
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {subjects.map(sub => {
            const hasMid   = !!examData[sub.id]?.mid;
            const hasFinal = !!examData[sub.id]?.final;
            if (!hasMid && !hasFinal) return null;

            return (
              <div key={sub.id} style={{
                background: 'var(--card-bg)',
                border: '1.5px solid var(--border)',
                borderRadius: 16,
                overflow: 'hidden',
              }}>
                {/* Subject header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 16px',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: sub.bg, color: sub.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                  }}>
                    {sub.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{sub.id}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{sub.fullName}</div>
                  </div>
                </div>

                {/* Paper buttons */}
                <div style={{ display: 'flex', gap: 0 }}>
                  {['mid', 'final'].map(type => {
                    const exists = !!examData[sub.id]?.[type];
                    const pc     = PAPER_COLORS[type];
                    const paper  = examData[sub.id]?.[type];
                    const mcqCount  = paper?.mcqs?.length || 0;
                    const subjCount = paper?.subjective?.length || 0;

                    return (
                      <button
                        key={type}
                        onClick={() => exists && setPage(`exam-${sub.id}-${type}`)}
                        disabled={!exists}
                        style={{
                          flex: 1,
                          padding: '14px 10px',
                          border: 'none',
                          borderRight: type === 'mid' ? '1px solid var(--border)' : 'none',
                          background: exists ? pc.bg : 'var(--bg)',
                          cursor: exists ? 'pointer' : 'default',
                          display: 'flex', flexDirection: 'column',
                          alignItems: 'center', gap: 4,
                          transition: 'opacity 0.15s',
                          opacity: exists ? 1 : 0.4,
                        }}
                        onMouseEnter={e => { if (exists) e.currentTarget.style.opacity = '0.8'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                      >
                        <span style={{ fontSize: 13, fontWeight: 700, color: exists ? pc.color : 'var(--text-muted)' }}>
                          {pc.label}
                        </span>
                        {exists && (
                          <span style={{ fontSize: 11, color: pc.color, opacity: 0.8 }}>
                            {mcqCount} MCQs{subjCount > 0 ? ` + ${subjCount} Subjective` : ''}
                          </span>
                        )}
                        {!exists && (
                          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Coming soon</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}