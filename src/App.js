import React, { useState, useEffect } from 'react';
import './App.css';
import Home       from './pages/Home';
import Levels     from './pages/Levels';
import Upload     from './pages/Upload';
import Quiz       from './components/Quiz';
import Summary    from './pages/Summary';
import PastPapers from './pages/PastPapers';

export default function App() {
  const [page, setPage] = useState('home');
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('vu_theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('vu_theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleDark = () => setDark(d => !d);

  const props = { setPage, toggleDark, dark };

  if (page === 'home')
    return <Home {...props} />;

  if (page === 'papers')
    return <PastPapers {...props} />;

  if (page.startsWith('upload-')) {
    const [, subj, idx] = page.split('-');
    return <Upload subject={subj} lectureIndex={parseInt(idx)} setPage={setPage} toggleDark={toggleDark} dark={dark} />;
  }

  if (page.startsWith('quiz-')) {
    const [, subj, idx] = page.split('-');
    return <Quiz subject={subj} lectureIndex={parseInt(idx)} setPage={setPage} toggleDark={toggleDark} dark={dark} />;
  }

  if (page.startsWith('summary-')) {
    const [, subj, idx] = page.split('-');
    return <Summary subject={subj} lectureIndex={parseInt(idx)} setPage={setPage} toggleDark={toggleDark} dark={dark} />;
  }

  return <Levels subject={page} setPage={setPage} toggleDark={toggleDark} dark={dark} />;
}