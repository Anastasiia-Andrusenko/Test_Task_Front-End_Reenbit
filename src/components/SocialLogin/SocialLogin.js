import css from './SocialLogin.module.css';
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";

const SocialLogin = () => {
  return <div className={css.container}>
  <p className={css.caption}>or login with Google or Facebook</p>
    <div className={css.mediaLinkContainer}>
      <FcGoogle className={css.mediaLink}/>
      <FaSquareFacebook className={css.mediaLink}/>
    </div>
  </div>
}

export default SocialLogin;