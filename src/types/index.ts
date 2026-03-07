export interface SceneConfig {
  id: string;
  inStart: number;
  inEnd: number;
  outStart: number;
  outEnd: number;
}

export interface ScrollProgress {
  progress: number;
  maxScroll: number;
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface WorkItem {
  id: string;
  icon: string;
  label: string;
  name: string;
  borderColor: string;
  bgColor: string;
}
