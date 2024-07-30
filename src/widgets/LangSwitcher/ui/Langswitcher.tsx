import { useTranslation } from "react-i18next";
import { Button, ButtonStyle } from "shared/ui/Button/Button";
import * as classes from './LangSwitcher.module.scss';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.trim() === 'en' ? 'no' : 'en');
  }

  return (
    <Button
      className={classes.language}
      buttonStyle={ButtonStyle.TEXT}
      onClick={toggleLanguage}>
      {t('Language')}
    </Button>
  )
}