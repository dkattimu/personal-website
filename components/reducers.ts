import { IThemes, TTWTheme, TTheme } from './context-store';

export enum Actions {
  DARKEN_THEME,
  LIGHTEN_THEME,
  ALWAYS_SHOW_HOME,
  CONTINUOUS_NAV_BAR,
}

type TACTION =
  | {
      type: typeof Actions.DARKEN_THEME | Actions.LIGHTEN_THEME;
      payload: IThemes<TTheme | TTWTheme>;
    }
  | { type: typeof Actions.ALWAYS_SHOW_HOME; payload: boolean }
  | { type: Actions.CONTINUOUS_NAV_BAR; payload: boolean };
