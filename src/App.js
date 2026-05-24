import React, { useState, useEffect } from 'react';
import './App.css';
import Home       from './pages/Home';
import Levels     from './pages/Levels';
import Upload     from './pages/Upload';
import Quiz       from './components/Quiz';
import Summary    from './pages/Summary';
import PastPapers from './pages/PastPapers';
import MathTyper  from './pages/MathTyper';

export default function App() {
  const [page, setPage] = useState('home');
  const [dark, setDark] = useState(() => localStorage.getItem('vu_theme') === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('vu_theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleDark = () => setDark(d => !d);
  const sharedProps = { setPage, toggleDark, dark };

  if (page === 'home')    return <Home {...sharedProps} />;
  if (page === 'papers')  return <PastPapers {...sharedProps} />;
  if (page === 'math')    return <MathTyper {...sharedProps} />;

  if (page.startsWith('upload-')) {
    const [, subj, idx] = page.split('-');
    return <Upload subject={subj} lectureIndex={parseInt(idx)} {...sharedProps} />;
  }
  if (page.startsWith('quiz-')) {
    const [, subj, idx] = page.split('-');
    return <Quiz subject={subj} lectureIndex={parseInt(idx)} {...sharedProps} />;
  }
  if (page.startsWith('summary-')) {
    const [, subj, idx] = page.split('-');
    return <Summary subject={subj} lectureIndex={parseInt(idx)} {...sharedProps} />;
  }

  return <Levels subject={page} {...sharedProps} />;
}