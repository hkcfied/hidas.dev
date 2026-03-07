import s from './ScrollIndicator.module.css';

export function ScrollIndicator() {
  return (
    <div className={s.header} data-role="scroll-indicator">
      <h1>SCroll</h1>
    </div>
  );
}
