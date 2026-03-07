import { WORK_ITEMS } from '../../../config/sceneConfig';
import c from '../Canvas.module.css';
import t from '../../Typography/Typography.module.css';
import w from './WorkScene.module.css';

const WORK_ICONS: Record<string, JSX.Element> = {
  ww1: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  ww2: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  ww3: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12A10 10 0 1112 2" />
      <path d="M22 2L13.5 10.5" />
      <path d="M16 2h6v6" />
    </svg>
  ),
  ww4: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.57-3.25 3.92" />
      <path d="M8.24 4.47A4 4 0 0112 2" />
      <path d="M12 9v3M9 18h6M10 22h4" />
      <circle cx="12" cy="15" r="3" />
    </svg>
  ),
};

export function WorkScene() {
  return (
    <div className={c.scene} id="scene-work" style={{ gap: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vw', width: '100%' }}>
        <div className={t.label} style={{ marginBottom: '1vw' }}>
          What I Build
        </div>
        <div className={w.grid}>
          {WORK_ITEMS.map((item) => (
            <div
              key={item.id}
              className={w.card}
              id={item.id}
              style={{
                borderColor: item.borderColor,
              }}
            >
              <div
                className={w.icon}
                style={{
                  color: item.borderColor,
                }}
              >
                {WORK_ICONS[item.id]}
              </div>
              <div className={w.tag}>{item.label}</div>
              <div className={w.name}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
