export const getScreenSize = (): {
  width: number;
  height: number;
} | null => {
  if (typeof screen !== 'undefined' && screen) {
    const width = Math.max(screen.availWidth || 0, screen.width || 0);
    const height = Math.max(screen.availHeight || 0, screen.height || 0);
    if (width && height) {
      return { width, height };
    }
  }
  return null;
};
