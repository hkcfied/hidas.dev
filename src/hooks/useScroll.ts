import { useState, useEffect, useCallback } from 'react';
import { BODY_HEIGHT } from '../config/sceneConfig';

interface ScrollState {
  progress: number;
  scrollY: number;
}

export function useScroll(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    progress: 0,
    scrollY: 0,
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const maxScroll = BODY_HEIGHT - window.innerHeight;
    const progress = (scrollY / maxScroll) * 100;

    setScrollState({
      progress,
      scrollY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollState;
}
