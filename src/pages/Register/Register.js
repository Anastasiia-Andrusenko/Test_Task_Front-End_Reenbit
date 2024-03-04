import css from './Register.module.css';
import { Helmet } from 'react-helmet';
import RegisterForm from "components/RegisterForm/RegisterForm";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";
import { NavLink, Navigate } from "react-router-dom";

export default function Register() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to='/'/>
  };

  return <div>
    <Helmet>
      <title>Registration</title>
    </Helmet>
    <RegisterForm/>
    <div className={css.redirect}>
      <p className={css.question}>Already have an account? </p>
      <p className={css.action}>Then{" "}
      <NavLink to="/login" className={css.link}>Log In</NavLink>{" "}
       or {'  '} login with Google or Facebook</p>
    </div>
  </div>
}