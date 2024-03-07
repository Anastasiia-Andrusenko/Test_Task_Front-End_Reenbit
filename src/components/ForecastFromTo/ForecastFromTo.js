import css from './ForecastFromTo.module.css';

const ForecastFromTo = () => {

  return <>
    <div className={css.container}>
      <h3 className={css.caption}>Week</h3>
      <ul className={css.listForecast}>
        <li className={css.item}>
          <p className={css.day}>Wednesday</p>
          <div className={css.illustration}></div>
          <p className={css.temp}>28*/21*</p>
        </li>
        <li className={css.item}>
          <p className={css.day}>Thursday</p>
          <div className={css.illustration}></div>
          <p className={css.temp}>28*/21*</p>
        </li>
        <li className={css.item}>
          <p className={css.day}>Wednesday</p>
          <div className={css.illustration}></div>
          <p className={css.temp}>28*/21*</p>
        </li>
        <li className={css.item}>
          <p className={css.day}>Thursday</p>
          <div className={css.illustration}></div>
          <p className={css.temp}>28*/21*</p>
        </li>
        <li className={css.item}>
          <p className={css.day}>Wednesday</p>
          <div className={css.illustration}></div>
          <p className={css.temp}>28*/21*</p>
        </li>
        <li className={css.item}>
          <p className={css.day}>Thursday</p>
          <div className={css.illustration}></div>
          <p className={css.temp}>28*/21*</p>
        </li>
        <li className={css.item}>
          <p className={css.day}>Thursday</p>
          <div className={css.illustration}></div>
          <p className={css.temp}>28*/21*</p>
        </li>
      </ul>
    </div>
  </>

};


export default ForecastFromTo;

