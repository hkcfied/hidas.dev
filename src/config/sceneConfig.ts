import type { SceneConfig, WorkItem } from '../types';

export const BODY_HEIGHT = 12000;

export const SCENES: SceneConfig[] = [
  { id: 'scene-intro', inStart: -10, inEnd: -1, outStart: 5, outEnd: 9 },
  { id: 'scene-designer', inStart: 10, inEnd: 14, outStart: 20, outEnd: 24 },
  { id: 'scene-name', inStart: 25, inEnd: 29, outStart: 35, outEnd: 39 },
  { id: 'scene-thoughts', inStart: 36, inEnd: 40, outStart: 48, outEnd: 52 },
  { id: 'scene-bengaluru', inStart: 50, inEnd: 54, outStart: 62, outEnd: 66 },
  { id: 'scene-work', inStart: 60, inEnd: 65, outStart: 77, outEnd: 81 },
  { id: 'scene-reflection', inStart: 78, inEnd: 82, outStart: 88, outEnd: 91 },
  { id: 'scene-end', inStart: 90, inEnd: 94, outStart: 200, outEnd: 201 },
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'ww1',
    icon: '◇',
    label: 'Web Apps',
    name: 'Full Stack',
    borderColor: '#b73e41',
    bgColor: '#1e1e1e',
  },
  {
    id: 'ww2',
    icon: '◆',
    label: 'APIs',
    name: 'Backend Systems',
    borderColor: '#a76c03',
    bgColor: '#1a1508',
  },
  {
    id: 'ww3',
    icon: '●',
    label: 'Infra',
    name: 'Cloud & DevOps',
    borderColor: '#2a5c2a',
    bgColor: '#0d1a0d',
  },
  {
    id: 'ww4',
    icon: '■',
    label: 'LLM',
    name: 'AI Integration',
    borderColor: '#2a2a5c',
    bgColor: '#0d0d1a',
  },
];

export const OPENING_CURTAIN_DELAY = 800;
export const WORK_WINDOW_STAGGER_DELAY = 180;
