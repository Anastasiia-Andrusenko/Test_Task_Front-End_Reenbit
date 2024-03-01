
import css from './ListOfTrips.module.css';

import TripCard from 'components/TripCard/TripCard';




const ListOfTrips = () => {

  const city1 = {
    name: 'Berline',
    period: '14.07.2023 - 21.07.2023',
    img: '../../img/berlin.jpg',
  };

  const city2 = {
    name: 'Tokyo',
    period: '14.07.2023 - 21.07.2023',
    img: '../../img/tokyo.jpg',
  };

  const city3 = {
    name: 'Barcelona',
    period: '14.07.2023 - 21.07.2023',
    img: '../../img/barcelona.jpg',
  };

  return <ul className={css.list}>
    <TripCard city={city1}/>
    <TripCard city={city2}/>
    <TripCard city={city3}/>
  </ul>
}

export default ListOfTrips;