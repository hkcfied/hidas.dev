import c from '../Canvas.module.css';
import t from '../../Typography/Typography.module.css';

export function NameScene() {
  return (
    <div className={c.scene} id="scene-name" style={{ gap: 0 }}>
      <div className={t.heading} data-anim="heading" style={{ fontSize: 'clamp(50px, 11vw, 180px)', lineHeight: 0.95, color: '#fff' }}>
        10 Years
      </div>
      <div className={t.label} style={{ marginTop: '1.5vw', letterSpacing: '0.4em', color: '#a76c03' }}>
        of shipping code that matters
      </div>
    </div>
  );
}
