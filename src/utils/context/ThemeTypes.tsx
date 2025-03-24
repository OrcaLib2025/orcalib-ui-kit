import { JSX } from 'react';

export type Theme = 'dark' | 'light';

export type TContextState = {
  theme: Theme;
  toggle: () => void;
  setDefault: (param: Theme) => void;
};

export type TDefaultThemeProps = {
  children: JSX.Element;
};
