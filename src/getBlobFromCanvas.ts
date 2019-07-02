// polyfill: Promise

export const getBlobFromCanvasWithCallback = (
  canvas: HTMLCanvasElement,
  contentType: string,
  cb: (err: any, blob: Blob | null) => void
): void => {
  try {
    canvas.toBlob(
      (blob) =>
        blob == null ? cb(new Error('empty blob'), null) : cb(null, blob),
      contentType
    );
  } catch (e) {
    cb(e, null);
  }
};

export const getBlobFromCanvas = (
  canvas: HTMLCanvasElement,
  contentType: string
): Promise<Blob> =>
  new Promise((resolve, reject): void => {
    getBlobFromCanvasWithCallback(canvas, contentType, (err, blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(err);
      }
    });
  });
