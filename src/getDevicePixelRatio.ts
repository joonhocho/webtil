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
