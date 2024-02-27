import css from './AppBar.module.css';

import AuthNav from 'components/AuthNav/AuthNav';

// import Navigation from 'components/Navigation/Navigation';
// import UserMenu from 'components/UserMenu/UserMenu';

// import { useAuth } from 'hooks/useAuth';
const { NavLink } = require("react-router-dom");

const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <NavLink to="/">
        Home
      </NavLink>
      <AuthNav/>
      {/* {isLoggedIn ? <UserMenu/> : <AuthNav/>} */}
    </header>
  )
}

export default AppBar;