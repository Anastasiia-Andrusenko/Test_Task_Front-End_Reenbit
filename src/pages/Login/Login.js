
import css from './Login.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

export default function Login() {
  return <>
    <div className={css.container}>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm/>
    <SocialLogin/>
    </div>
  </>
}

