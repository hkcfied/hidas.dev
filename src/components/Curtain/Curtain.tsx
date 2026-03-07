import { useState, useEffect } from 'react';
import { OPENING_CURTAIN_DELAY } from '../../config/sceneConfig';
import s from './Curtain.module.css';

export function Curtain() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, OPENING_CURTAIN_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`${s.top} ${isOpen ? s.open : ''}`} />
      <div className={`${s.bottom} ${isOpen ? s.open : ''}`} />
      <div className={s.label}>
        <span className={isOpen ? s.hidden : ''}></span>
      </div>
    </>
  );
}
