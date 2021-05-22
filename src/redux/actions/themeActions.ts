import * as type from './types';

export type ThemeType = 'light' | 'dark';

export const setTheme = (theme: ThemeType) => {
  return {
    type: type.SET_THEME,
    theme,
  };
};
