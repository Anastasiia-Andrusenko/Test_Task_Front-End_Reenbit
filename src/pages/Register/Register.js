
import { Helmet } from 'react-helmet';
import RegisterForm from "components/RegisterForm/RegisterForm";
import { UseSelector, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";
import { Navigate } from "react-router-dom";

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
  </div>
}