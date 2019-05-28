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
