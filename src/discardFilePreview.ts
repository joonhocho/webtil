export interface IFile {
  preview?: string;
}

export const discardFilePreview = (file: IFile): boolean => {
  if (
    typeof window !== 'undefined' &&
    window.URL &&
    window.URL.revokeObjectURL &&
    file.preview
  ) {
    try {
      window.URL.revokeObjectURL(file.preview);
      return true;
    } catch (e) {
      // do nothing
    }
  }
  return false;
};
