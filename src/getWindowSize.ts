export interface IWindowSize {
  width: number;
  height: number;
}

export const getWindowSize = (): IWindowSize | null => {
  if (typeof window !== 'undefined') {
    let width = window.innerWidth || 0;
    let height = window.innerHeight || 0;

    const el = window && window.document && window.document.documentElement;
    if (el) {
      if (el.clientWidth > width) {
        width = el.clientWidth;
      }
      if (el.clientHeight > height) {
        height = el.clientHeight;
      }
    }

    if (width && height) {
      return { width, height };
    }
  }
  return null;
};
