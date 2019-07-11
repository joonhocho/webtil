import { filter } from 'ts-jutil/dist/browser/array/filter';
import { map } from 'ts-jutil/dist/browser/array/map';
import { trim } from 'ts-jutil/dist/browser/string/trim';

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
      return filter(
        map(languages.concat(), trim),
        (x) => x && typeof x === 'string'
      );
    }

    const lang = language || userLanguage || browserLanguage;
    if (lang && typeof lang === 'string') {
      return [lang];
    }
  }
  return [];
};
