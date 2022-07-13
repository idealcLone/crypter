import React from 'react';

import classes from './HotBid.module.scss';
import classNames from 'classnames';
import { IBid } from '../../ts/interfaces';
import { Slider } from '../Slider';

const bids: IBid[] = [
  {
    id: 1,
    img: '../../assets/img/hot-bid-1.png',
    name: 'Amazing digital art',
    price: 2.45,
    stockCount: 3,
    highestBid: 0.001,
  },
  {
    id: 2,
    img: '../../assets/img/hot-bid-1.png',
    name: 'Amazing digital art',
    price: 2.45,
    stockCount: 3,
    highestBid: 0.001,
  },
  {
    id: 3,
    img: '../../assets/img/hot-bid-1.png',
    name: 'Amazing digital art',
    price: 2.45,
    stockCount: 3,
    highestBid: 0.001,
  },
  {
    id: 4,
    img: '../../assets/img/hot-bid-1.png',
    name: 'Amazing digital art',
    price: 2.45,
    stockCount: 3,
    highestBid: 0.001,
  },
  {
    id: 5,
    img: '../../assets/img/hot-bid-1.png',
    name: 'Amazing digital art',
    price: 2.45,
    stockCount: 3,
    highestBid: 0.001,
  },
  {
    id: 6,
    img: '../../assets/img/hot-bid-1.png',
    name: 'Amazing digital art',
    price: 2.45,
    stockCount: 3,
    highestBid: 0.001,
  },
];

export const HotBid: React.FC = () => {
  return (
    <div className={classes['hot-bid']}>
      <div className={classes['hot-bid__header']}>
        <h2 className="heading--headline-3">Hot bid</h2>
        <div className={classes['hot-bid__navigator']}>
          <img src="../../assets/icons/arrow-left.svg" alt="Left arrow" />
          <img src="../../assets/icons/arrow-right.svg" alt="Right arrow" />
        </div>
      </div>
      <Slider className={classes['slider']}>
        {bids.map((bid) => (
          <div key={bid.id} className={classes['card']}>
            <img className={classes['card__img']} src={bid.img} alt={`Hot Bid Image ${bid.id}`} />
            <div className={classes['card__description']}>
              <div className={classes['card__header']}>
                <div className="heading--body-2-bold">{bid.name}</div>
                <div className={classNames(classes['card__price'], 'heading--hairline-2')}>
                  {bid.price} ETH
                </div>
              </div>
              <div className={classes['card__body']}>
                <div className={classes['card__creators']}>
                  <img src="../../assets/img/avatar-1.png" alt="Creator 1" />
                  <img src="../../assets/img/avatar-2.png" alt="Creator 2" />
                  <img src="../../assets/img/avatar-3.png" alt="Creator 3" />
                </div>
                <div className={classNames(classes['card__count'], 'heading--caption-1-bold')}>
                  {bid.stockCount} in stock
                </div>
              </div>
            </div>
            <div className={classes['card__footer']}>
              <div className={classes['card__highest-bid']}>
                <img src="../../assets/icons/candlesticks.svg" alt="Highest bid icon" />
                <span className="heading--caption-2">Highest bid</span>
                <span className="heading--caption-2-bold">{bid.highestBid} ETH</span>
              </div>
              <div className={classes['card__new-bid']}>
                <span className="heading--caption-2">New bid 🔥</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
