import css from './AppBar.module.css';

import AuthNav from '../AuthNav/AuthNav';
import { RiHome7Line } from "react-icons/ri";

// import UserMenu from 'components/UserMenu/UserMenu';

import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
const { NavLink } = require("react-router-dom");

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <NavLink to="/">
        <p className={css.navLink}>Home
          <RiHome7Line className={css.icon}/>
        </p>
      </NavLink>
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
  )
}

export default AppBar;