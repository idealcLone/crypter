import React, { useState } from 'react';

import classes from './TopCreators.module.scss';
import classNames from 'classnames';
import { Slider } from '../Slider';

const data = [
  {
    id: 1,
    name: 'Payton Harris',
    price: '2.456',
    img: '../assets/img/avatar-1.png',
  },
  {
    id: 2,
    name: 'Payton Harris',
    price: '2.456',
    img: '../assets/img/avatar-2.png',
  },
  {
    id: 3,
    name: 'Payton Harris',
    price: '2.456',
    img: '../assets/img/avatar-3.png',
  },
  {
    id: 4,
    name: 'Payton Harris',
    price: '2.456',
    img: '../assets/img/avatar-4.png',
  },
  {
    id: 5,
    name: 'Payton Harris',
    price: '2.456',
    img: '../assets/img/avatar-5.png',
  },
  {
    id: 6,
    name: 'Payton Harris',
    price: '2.456',
    img: '../assets/img/avatar-2.png',
  },
  {
    id: 7,
    name: 'Payton Harris',
    price: '2.456',
    img: '../assets/img/avatar-5.png',
  },
];

export const TopCreators: React.FC = () => {
  const [items, setItems] = useState(data);

  return (
    <section className={classes['top-creators']}>
      <div className={classes['header']}>
        <h3 className={classes['header__title']}>
          <span className="heading--body-1-bold">Popular</span>
          <div className={classes['header__sellers']}>
            <span className="heading--headline-3">Sellers</span>
            <img src="../../assets/icons/arrow-down.svg" alt="Arrow down" />
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
      <Slider className={classes['slider']}>
        {items.map((item, index) => (
          <div key={item.id} className={classes['item']} id={`item--${item.id}`}>
            <div className={classes['item__header']}>
              <div className={classNames(classes['item__place'], 'heading--caption-2-bold')}>
                #{item.id}
              </div>
              <img
                src="../assets/icons/plus-square.svg"
                alt="Plus square"
                className={classes['item__plus-square']}
              />
              <img
                src="../assets/icons/expand-arrow.svg"
                alt="Expand arrow"
                className={classes['item__expand-arrow']}
              />
            </div>
            <div className={classes['item__body']}>
              <img src={item.img} alt="Item image" className={classes['item__img']} />
              <div className={classNames(classes['item__name'], 'heading--caption-1-bold')}>
                {item.name}
              </div>
              <div className={classes['item__price']}>
                <span className="heading--caption-2-bold">{item.price}</span>
                <span className="heading--caption-2">ETH</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
