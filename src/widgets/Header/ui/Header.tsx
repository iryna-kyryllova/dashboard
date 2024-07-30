import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as classes from './Header.module.scss';

export const Header = () => {
  const { t } = useTranslation();
  
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">{t("Home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("About")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
