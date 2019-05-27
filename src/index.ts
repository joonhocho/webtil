interface INavigator {
  readonly language?: string;
  readonly languages?: readonly string[];
  readonly userLanguage?: string;
  readonly browserLanguage?: string;
}

export const getLanguages = (): string[] => {
  if (typeof navigator !== 'undefined' && navigator) {
    const {
      languages,
      language,
      userLanguage,
      browserLanguage,
    } = navigator as INavigator;

    if (languages) {
      return [...languages];
    }

    const lang = language || userLanguage || browserLanguage;
    if (lang) {
      return [lang];
    }
  }
  return [];
};

export const getReferrer = (): string | null => {
  if (typeof document !== 'undefined' && document) {
    return document.referrer || null;
  }
  return null;
};

export const getUserAgent = (): string | null => {
  if (typeof navigator !== 'undefined' && navigator) {
    return navigator.userAgent || null;
  }
  return null;
};

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

interface IScreen {
  systemXDPI?: number;
  logicalXDPI?: number;
}

export const getDevicePixelRatio = (min = 1, max = 3): number => {
  if (typeof window === 'undefined') {
    return 1;
  }

  const screen = window.screen as IScreen;

  let ratio = 1;
  if (
    typeof screen !== 'undefined' &&
    screen.systemXDPI != null &&
    screen.logicalXDPI != null &&
    screen.systemXDPI > screen.logicalXDPI
  ) {
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    // Only allow for values > 1
    ratio = screen.systemXDPI / screen.logicalXDPI || 1;
  } else if (window.devicePixelRatio != null) {
    ratio = window.devicePixelRatio || 1;
  }

  // allow 1, 2, 3
  return Math.min(Math.max(Math.round(ratio), min), max);
};
