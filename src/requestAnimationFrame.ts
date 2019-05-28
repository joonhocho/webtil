export const requestAnimationFrame =
  (typeof window !== 'undefined' && window.requestAnimationFrame) ||
  ((cb: () => void): number => (setTimeout(cb, 0) as any) as number);
