import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import Home       from './pages/Home';
import Levels     from './pages/Levels';
import Upload     from './pages/Upload';
import Quiz       from './components/Quiz';
import Summary    from './pages/Summary';
import PastPapers from './pages/PastPapers';
import MathTyper  from './pages/MathTyper';
import Practice   from './pages/Practice';

// Read the page name from the URL hash (e.g. #quiz-MTH101-0 -> 'quiz-MTH101-0')
function getPageFromHash() {
  const h = window.location.hash.replace(/^#/, '');
  return h || 'home';
}

export default function App() {
  const [page, setPageState] = useState(getPageFromHash);
  const [dark, setDark] = useState(() => localStorage.getItem('vu_theme') === 'dark');
  const isPopRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('vu_theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Make sure the very first load has a hash entry, so the FIRST back press
  // from "home" goes to the real previous site (Google etc.), not a blank state.
  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }
  }, []);

  // Listen for back/forward navigation (hash changes)
  useEffect(() => {
    const onHashChange = () => {
      isPopRef.current = true;
      setPageState(getPageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Navigate forward: push a new hash entry (creates real browser history)
  const setPage = useCallback((next) => {
    if (window.location.hash.replace(/^#/, '') === next) return;
    window.location.hash = next;
    // setPageState will be triggered by the hashchange listener above,
    // but we also set it immediately for snappier UI feedback.
    setPageState(next);
    window.scrollTo(0, 0);
  }, []);

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
  if (page.startsWith('practice-')) {
    const [, subj, idx] = page.split('-');
    return <Practice subject={subj} lectureIndex={parseInt(idx)} {...sharedProps} />;
  }

  return <Levels subject={page} {...sharedProps} />;
}