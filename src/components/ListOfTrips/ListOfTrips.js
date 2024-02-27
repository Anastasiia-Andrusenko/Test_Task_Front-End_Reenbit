
import css from './ListOfTrips.module.css';

import TripCard from 'components/TripCard/TripCard';

const ListOfTrips = () => {
  return <ul className={css.list}>
    <TripCard/>
    <TripCard/>
    <TripCard/>
  </ul>
}

export default ListOfTrips;