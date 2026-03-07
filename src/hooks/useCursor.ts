import { useState, useEffect, useRef } from 'react';
import type { CursorPosition } from '../types';

interface CursorState extends CursorPosition {
  pupilOffset: {
    x: number;
    y: number;
  };
}

export function useCursor(): CursorState {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    pupilOffset: { x: 0, y: 0 },
  });

  const mousePos = useRef<CursorPosition>({ x: 0, y: 0 });
  const cursorPos = useRef<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Calculate pupil offset
      const cx = cursorPos.current.x;
      const cy = cursorPos.current.y;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 8;
      const d = Math.min(dist, maxDist);
      const angle = Math.atan2(dy, dx);

      setCursor((prev) => ({
        ...prev,
        pupilOffset: {
          x: Math.cos(angle) * d,
          y: Math.sin(angle) * d,
        },
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.12;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.12;

      setCursor((prev) => ({
        ...prev,
        x: cursorPos.current.x,
        y: cursorPos.current.y,
      }));

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return cursor;
}
