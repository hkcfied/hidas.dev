import c from '../Canvas.module.css';
import t from '../../Typography/Typography.module.css';

export function DesignerScene() {
  return (
    <div className={c.scene} id="scene-designer" style={{ gap: '2vw', flexDirection: 'column', alignItems: 'center' }}>
      <div className={t.label} style={{ marginBottom: '1vw' }}>
        I build things
      </div>
      <div className={t.heading} style={{ fontSize: 'clamp(24px, 4vw, 68px)' }}>
        Full Stack Engineer
      </div>
      <div className={t.body} style={{ fontSize: 'clamp(18px, 2.5vw, 42px)', color: '#a76c03', marginTop: '1vw' }}>
        End to end.
      </div>
    </div>
  );
}
