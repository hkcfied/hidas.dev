import c from '../Canvas.module.css';
import t from '../../Typography/Typography.module.css';

export function ThoughtsScene() {
  return (
    <div className={c.scene} id="scene-thoughts" style={{ gap: '3vw' }}>
      <div data-anim="thought" style={{ transform: 'translateX(0)', opacity: 0 }}>
        <div className={t.body} style={{ fontSize: 'clamp(14px, 2vw, 32px)', color: '#555' }}>
          Frontend. Backend. Infrastructure.
        </div>
      </div>
      <div data-anim="thought" style={{ transform: 'translateX(0)', opacity: 0 }}>
        <div className={t.heading} style={{ fontSize: 'clamp(28px, 5.5vw, 90px)' }}>
          If it runs on
          <br />a screen, I ship it.
        </div>
      </div>
      <div data-anim="thought" style={{ transform: 'translateX(0)', opacity: 0 }}>
        <div className={t.body} style={{ fontSize: 'clamp(14px, 1.8vw, 28px)', color: '#555', marginTop: '2vw' }}>
          ...and make sure it stays up.
        </div>
      </div>
    </div>
  );
}
