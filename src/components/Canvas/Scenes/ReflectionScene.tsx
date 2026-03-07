import c from '../Canvas.module.css';
import t from '../../Typography/Typography.module.css';

export function ReflectionScene() {
  return (
    <div className={c.scene} id="scene-reflection">
      <div className={t.body} style={{ fontSize: 'clamp(24px, 4.5vw, 78px)', textAlign: 'center', lineHeight: 1.2 }}>
        Code is craft.
        <br />
        <span style={{ color: '#b73e41' }}>Ship it clean.</span>
      </div>
    </div>
  );
}
