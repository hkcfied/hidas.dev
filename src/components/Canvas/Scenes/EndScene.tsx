import c from '../Canvas.module.css';
import t from '../../Typography/Typography.module.css';

export function EndScene() {
  return (
    <div className={c.scene} id="scene-end" style={{ gap: '1.5vw' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1vw' }}>
        <div className={t.subtitle}>Hey, I'm</div>
        <div className={t.heading} data-anim="heading" style={{ fontSize: 'clamp(50px, 11.5vw, 192px)' }}>
          HIDAS
        </div>
        <div className={c.bar} style={{ marginTop: '1vw' }} />
        <div className={t.label} style={{ marginTop: '3vw', fontSize: 'clamp(10px, 1.2vw, 18px)', color: '#444' }}>
          Bengaluru, India
        </div>
      </div>
    </div>
  );
}
