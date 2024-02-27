import css from './TripCard.module.css';


const TripCard = () => {
  return (
    <li className={css.card}>
      <div className={css.cityPhoto}>
      </div>
      <div className={css.info}>
        <h3 className={css.cityName}>smth</h3>
      </div>
    </li>
  )
}

export default TripCard;