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

export default function App() {
  const [page, setPageState] = useState('home');
  const [dark, setDark] = useState(() => localStorage.getItem('vu_theme') === 'dark');

  // Tracks whether the current page change came from a popstate (back button)
  // event, so we don't double-push history in that case.
  const isPopRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('vu_theme', dark ? 'dark' : 'light');
  }, [dark]);

  // ── Initialize history state on first load ──
  useEffect(() => {
    if (!window.history.state || !window.history.state.vuPage) {
      window.history.replaceState({ vuPage: 'home' }, '', window.location.href);
    } else {
      // Restore page from history (e.g. on refresh)
      setPageState(window.history.state.vuPage);
    }
  }, []);

  // ── Listen for phone/browser back button ──
  useEffect(() => {
    const onPopState = (e) => {
      const targetPage = (e.state && e.state.vuPage) || 'home';
      isPopRef.current = true;
      setPageState(targetPage);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // ── Custom setPage: pushes a new history entry unless triggered by back button ──
  const setPage = useCallback((next) => {
    if (isPopRef.current) {
      // This call originated from popstate — just reset the flag, don't push again
      isPopRef.current = false;
      setPageState(next);
      return;
    }
    window.history.pushState({ vuPage: next }, '', window.location.href);
    setPageState(next);
    // Scroll to top on every navigation
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