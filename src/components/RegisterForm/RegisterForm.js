
import { useDispatch } from "react-redux";

import css from './RegisterForm.module.css';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";

import { register } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';
import { useState } from "react";
// import { isVisible } from "@testing-library/user-event/dist/utils";s
// import { toast } from "react-toastify";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [isVisible, setVisible] = useState(false);
  const [password, setPassword] = useState('');

  const toggleVisiblePassword = () => {
    setVisible(!isVisible);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  const error = useSelector(selectError);
  
  if (error) {
    // toast.error(`${error}`);
    console.log(error);
  }


  return <>
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <HiOutlineUserCircle className={css.icon}/>
        <input type="text" name="name" className={css.input}/>
      </label>
      <label className={css.label}>
        Email
        <FiMail className={`${css.icon} ${css.mail}`}/>
        <input type="email" name="email" className={css.input}/>
      </label>
      <label className={css.label}>
        Password
        <RiLockPasswordLine className={css.icon}/>
        <input 
          type={isVisible ? 'text' : 'password'} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="min 7 symbols"
          name="password" 
          className={css.input}/>
        <button 
        type="button" 
        className={css.btnVisible} 
        onClick={toggleVisiblePassword}>
          {isVisible ? <AiOutlineEyeInvisible className={css.btnIcon}/> 
           :  <IoMdEye className={css.btnIcon}/>}
        </button> 
      </label>
      <button type="submit" className={css.btn}>
        Register
      </button>
    </form>
  </>
};

export default RegisterForm;