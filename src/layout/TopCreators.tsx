import React from 'react';

import classes from './TopCreators.module.scss';
import classNames from 'classnames';
import { Slider } from '../components/Slider';

export const TopCreators: React.FC = () => {
  return (
    <section className={classes['top-creators']}>
      <div className={classes['header']}>
        <h3 className={classes['header__title']}>
          <span className="heading--body-1-bold">Popular</span>
          <div className={classes['header__sellers']}>
            <span className="heading--headline-3">Sellers</span>
            <img src="../assets/icons/arrow-down.svg" alt="Arrow down" />
          </div>
        </h3>
        <div className={classes['header__select']}>
          <label htmlFor="header-select-time" className="heading--hairline-2">
            Timeframe
          </label>
          <select name="time" id="header-select-time" className="heading--caption-1-bold">
            <option value="Today">Today</option>
            <option value="Yesterday">Yesterday</option>
          </select>
        </div>
      </div>
      <Slider />
    </section>
  );
};
