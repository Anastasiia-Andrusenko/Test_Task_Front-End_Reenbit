import css from './TripCard.module.css';


const TripCard = ({ city }) => {
 
  return <>
    <li className={css.card}>
      <div className={css.cityPhoto} >
      <img alt={city.name} src={city.img} />
      </div>
      <div className={css.info}>
        <h3 className={css.cityName}>{city.name}</h3>
        <p className={css.period}>{city.period}</p>
      </div>
    </li>
  </>
}

export default TripCard;