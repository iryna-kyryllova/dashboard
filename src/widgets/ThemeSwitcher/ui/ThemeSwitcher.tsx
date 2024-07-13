import { Theme, useTheme } from 'app/context/theme';
import { Button, ButtonStyle } from 'shared/ui/Button/Button';
import Sun from 'shared/assets/icons/sun.svg';
import Moon from 'shared/assets/icons/moon.svg';
import * as classes from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={classes.theme} buttonStyle={ButtonStyle.TEXT} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Moon width="36" height="36" /> : <Sun width="36" height="36" />}
    </Button>
  )
}
