import s from './Borders.module.css';

export function Borders() {
  return (
    <>
      <div className={`${s.borders} ${s.secondary}`} />
      <div className={`${s.borders} ${s.primary}`} />
    </>
  );
}
