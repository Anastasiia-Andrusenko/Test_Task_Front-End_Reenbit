import ListOfTrips from 'components/ListOfTrips/ListOfTrips';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <section className={css.main}>
        <h1 className={css.title}>Weather Forecast</h1>
        {/* {isLoggedIn ? <UserMenu/> : <p>To plan a trip log in or register</p>} */}
        <p>To plan a trip log in or register</p>
        <ListOfTrips/>
      </section>
      <section className={css.aside}>
        <p>24 C</p>
      </section>
    </div>
  )
};

export default Home;