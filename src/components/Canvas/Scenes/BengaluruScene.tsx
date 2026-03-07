import c from '../Canvas.module.css';
import t from '../../Typography/Typography.module.css';

export function BengaluruScene() {
  return (
    <div className={c.scene} id="scene-bengaluru" style={{ gap: '1vw', flexDirection: 'column', alignItems: 'center' }}>
      <div className={t.label}>Based in</div>
      <div className={t.location} data-anim="location">BENGALURU</div>
      <div className={c.divider} style={{ marginTop: '2vw' }} />
      <div className={t.label} style={{ marginTop: '1vw', fontSize: 'clamp(10px, 1.2vw, 18px)', color: '#555' }}>
        India
      </div>
    </div>
  );
}
