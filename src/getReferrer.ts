export const getReferrer = (): string | null => {
  if (typeof document !== 'undefined' && document) {
    return document.referrer || null;
  }
  return null;
};
