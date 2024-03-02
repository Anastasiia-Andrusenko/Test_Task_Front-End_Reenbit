import ListOfTrips from 'components/ListOfTrips/ListOfTrips';
import css from './Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {


  return (
    <div className={css.container}>
      <section className={css.main}>
        <h1 className={css.title}>Weather  <span className={css.titleBold}>Forecast</span></h1>
        {/* {isLoggedIn ? <UserMenu/> : <p>To plan a trip log in or register</p>} */}
        <p className={css.caption}>
          Please{' '}
            <NavLink className={css.link} to="/login">LogIn</NavLink>{' '}
            or <NavLink className={css.link} to="/register">Register</NavLink></p>
        <ListOfTrips/>
      </section>
      <section className={css.aside}>
        <div className={css.weather}>
          <p className={css.day}>Saturday</p>
          <p className={css.temperature}>24<span className={css.degree}> С</span></p>
          <p className={css.cityName}>Berlin</p>
        </div>
      </section>
    </div>
  )
};

export default Home;