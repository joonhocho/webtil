export const getUserAgent = (): string | null => {
  if (typeof navigator !== 'undefined' && navigator) {
    return navigator.userAgent || null;
  }
  return null;
};
