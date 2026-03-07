import c from '../Canvas.module.css';
import t from '../../Typography/Typography.module.css';

export function IntroScene() {
  return (
    <div className={c.scene} id="scene-intro" style={{ gap: '1.5vw' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8vw' }}>
        <div className={t.subtitle}>Hey, I'm</div>
        <div className={t.heading} data-anim="heading" style={{ fontSize: 'clamp(50px, 11.5vw, 192px)' }}>
          HIDAS
        </div>
        <div className={c.bar} style={{ marginTop: '1vw' }} />
      </div>
    </div>
  );
}
