import { Link } from 'react-router-dom';
import * as classes from './Navbar.module.scss';

interface NavbarProps {

}

export const Navbar = () => {
  return (
    <div className={classes.navbar}>
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
