import { useEffect } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { SCENES } from '../../config/sceneConfig';
import { IntroScene } from './Scenes/IntroScene';
import { DesignerScene } from './Scenes/DesignerScene';
import { NameScene } from './Scenes/NameScene';
import { ThoughtsScene } from './Scenes/ThoughtsScene';
import { BengaluruScene } from './Scenes/BengaluruScene';
import { WorkScene } from './Scenes/WorkScene';
import { ReflectionScene } from './Scenes/ReflectionScene';
import { EndScene } from './Scenes/EndScene';
import s from './Canvas.module.css';

export function Canvas() {
  const { progress } = useScroll();

  useEffect(() => {
    updateSceneOpacity(progress);
  }, [progress]);

  return (
    <div className={s.canvas}>
      <IntroScene />
      <DesignerScene />
      <NameScene />
      <ThoughtsScene />
      <BengaluruScene />
      <WorkScene />
      <ReflectionScene />
      <EndScene />
    </div>
  );
}

function updateSceneOpacity(progress: number) {
  SCENES.forEach((scene) => {
    const el = document.getElementById(scene.id);
    if (!el) return;

    let opacity = 0;

    if (progress >= scene.inStart && progress <= scene.outEnd) {
      if (progress < scene.inEnd) {
        opacity = (progress - scene.inStart) / (scene.inEnd - scene.inStart);
      } else if (progress <= scene.outStart) {
        opacity = 1;
      } else {
        opacity = 1 - (progress - scene.outStart) / (scene.outEnd - scene.outStart);
      }
    }

    opacity = Math.max(0, Math.min(1, opacity));
    el.style.opacity = String(opacity);
    el.style.pointerEvents = opacity > 0.1 ? 'auto' : 'none';
  });

  // Social links appear with end screen
  const socialWrapper = document.getElementById('socialWrapper');
  if (socialWrapper) {
    const socOpacity = Math.max(0, Math.min(1, (progress - 90) / 4));
    socialWrapper.style.opacity = String(socOpacity);
    socialWrapper.style.pointerEvents = socOpacity > 0.1 ? 'auto' : 'none';
  }

  // Work windows stagger
  const workProgress = Math.max(0, Math.min(1, (progress - 62) / 5));
  const workIds = ['ww1', 'ww2', 'ww3', 'ww4'];
  workIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const delay = i * 0.18;
    const p = Math.max(0, Math.min(1, (workProgress - delay) / (1 - delay)));
    el.style.opacity = String(p);
    el.style.transform = `translateY(${(1 - p) * 30}px)`;
  });

  // Name slide-up animation
  const nameP = Math.max(0, Math.min(1, (progress - 25) / 4));
  const nameEls = document.querySelectorAll('#scene-name [data-anim="heading"]') as NodeListOf<HTMLElement>;
  nameEls.forEach((el, i) => {
    el.style.transform = `translateY(${(1 - nameP) * (40 + i * 20)}px)`;
  });

  // Location slide up
  const benP = Math.max(0, Math.min(1, (progress - 50) / 4));
  const locEl = document.querySelector('#scene-bengaluru [data-anim="location"]') as HTMLElement;
  if (locEl) locEl.style.transform = `translateY(${(1 - benP) * 50}px)`;

  // Thoughts stagger
  const thoughtEls = document.querySelectorAll('[data-anim="thought"]') as NodeListOf<HTMLElement>;
  thoughtEls.forEach((el, i) => {
    const tp = Math.max(0, Math.min(1, (progress - 36 - i * 1.5) / 3));
    el.style.opacity = String(tp);
    el.style.transform = `translateX(${(1 - tp) * (i % 2 === 0 ? -30 : 30)}px)`;
  });

  // Scroll indicator fade out
  const scrollHeader = document.querySelector('[data-role="scroll-indicator"]') as HTMLElement;
  if (scrollHeader) scrollHeader.style.opacity = String(Math.max(0, 1 - progress / 10));
}
