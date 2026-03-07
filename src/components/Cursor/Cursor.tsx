import { useCursor } from '../../hooks/useCursor';
import s from './Cursor.module.css';

export function Cursor() {
  const { x, y, pupilOffset } = useCursor();

  return (
    <div
      className={s.cursor}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div
        className={s.pupil}
        style={{
          transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))`,
        }}
      />
    </div>
  );
}
