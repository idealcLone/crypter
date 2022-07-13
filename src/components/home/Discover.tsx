import React from 'react';

import classes from './Discover.module.scss';
import classNames from 'classnames';
import { Select } from '../Select';
import { Button } from '../Button';
import { InputRange } from '../InputRange';
import { Card } from '../Card';

const options = ['Recently added', 'One day ago', 'Two days ago', 'Week ago', 'Month ago'];
const categories = ['All items', 'Art', 'Game', 'Photography', 'Music', 'Video'];
const prices = ['Highest price', 'Middle price', 'Lowest price'];
const likes = ['Most liked', 'Middle liked', 'Low liked', 'Disliked'];
const creator = ['Verified only', 'Unverified'];
const cards = [
  '../assets/img/discover-1.png',
  '../assets/img/discover-2.png',
  '../assets/img/discover-3.png',
  '../assets/img/discover-4.png',
  '../assets/img/discover-5.png',
  '../assets/img/discover-6.png',
  '../assets/img/discover-7.png',
  '../assets/img/discover-8.png',
];

export const Discover: React.FC = () => {
  return (
    <section className={classes['discover']}>
      <div className={classes['discover__header']}>
        <h2 className="heading--headline-3">Discover</h2>
        <div className={classes['discover__head']}>
          <Select options={options} />
          <ul className={classes['discover__list']}>
            {categories.map((item) => (
              <li
                className={classNames(classes['discover__list-item'], 'heading--button-2')}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <Button variant="primary">
            Filter <img src="../../assets/icons/cross.svg" alt="Cross Icon" />
          </Button>
        </div>
        <div className={classes['discover__filter']}>
          <Select label="Price" options={prices} />
          <Select label="Likes" options={likes} />
          <Select label="Creator" options={creator} />
          <InputRange name="price" label="Price range" min={0.01} max={10} />
        </div>
      </div>
      <div className={classes['discover__main']}>
        <div className={classes['discover__grid']}>
          {cards.map((card, index) => (
            <Card key={index} img={card} />
          ))}
        </div>
        <div className={classes['discover__loading']}>
          <Button variant="secondary">
            Load more <img src="../../assets/icons/loading.svg" alt="Loading Icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};
