import React, { useState } from 'react';

import classes from './Slider.module.scss';
import classNames from 'classnames';

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
];

export const Slider: React.FC = () => {
  const [items, setItems] = useState(data.slice(0, 5));
  const [pointer, setPointer] = useState(0);
  const [currentShift, setCurrentShift] = useState(0);

  const handleLeftArrowClick = () => {
    const nextShift = currentShift === 0 ? 4 : currentShift - 1;
    const newArr = [
      ...data.slice(data.length - nextShift, data.length),
      ...data.slice(0, data.length - nextShift),
    ];
    setItems(newArr);
    setCurrentShift(nextShift);
  };

  const handleRightArrowClick = () => {
    const nextShift = currentShift === 4 ? 0 : currentShift + 1;
    const newArr = [
      ...data.slice(data.length - nextShift, data.length),
      ...data.slice(0, data.length - nextShift),
    ];
    setItems(newArr);
    setCurrentShift(nextShift);
  };

  return (
    <div className={classes['slider']}>
      <img
        src="../assets/icons/arrow-left.svg"
        alt="Arrow left"
        className={classes['slider__left']}
        onClick={handleLeftArrowClick}
      />
      <div className={classes['slider__items']}>
        {items.map(
          (item, index) =>
            index < 5 && (
              <div key={item.id} className={classes['slider__item']} id={`item--${item.id}`}>
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
            )
        )}
      </div>
      <img
        src="../assets/icons/arrow-right.svg"
        alt="Arrow right"
        className={classes['slider__right']}
        onClick={handleRightArrowClick}
      />
    </div>
  );
};
