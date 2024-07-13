import { Theme, useTheme } from 'app/context/theme';
import { classNames } from 'shared/lib/helpers/classNames';
import Sun from 'shared/assets/icons/sun.svg';
import Moon from 'shared/assets/icons/moon.svg';
import * as classes from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={classNames(classes.theme)} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Moon width="36" height="36" /> : <Sun width="36" height="36" />}
    </button>
  )
}
