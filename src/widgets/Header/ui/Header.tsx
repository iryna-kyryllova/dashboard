import { Link } from 'react-router-dom';
import * as classes from './Header.module.scss';

export const Header = () => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
