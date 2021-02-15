//This will hold contexts.

import { createContext } from 'react';

const initialTheme = { dark: {}, light: {} };

export type TTheme = {
  backgroundColor: string;
  textColor: string;
};

export type TTWTheme = {
  //Tailwind csss type theme
  className: string;
};
export interface IThemes<ThemeType> {
  //Holds both themes in one object
  dark: ThemeType;
  light: ThemeType;
}

const themeContext = createContext<TTheme | TTWTheme | any>(initialTheme); //remove any. A stub for now to avoid having to set the initial theme
export default themeContext;
