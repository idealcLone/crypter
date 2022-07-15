import React from 'react';

import classes from './Auction.module.scss';
import classNames from 'classnames';
import { Button } from '../UI/Button';

export const Auction: React.FC = () => {
  return (
    <section className={classes['auction']}>
      <div className={classes['image-wrapper']}>
        <img src="../../assets/img/auction.png" alt="Auction Image" className={classes['image']} />
      </div>
      <div className={classes['info']}>
        <div className={classes['description']}>
          <h2 className="heading--headline-1">Marco carrillo®</h2>
          <div className={classes['creators']}>
            <div className={classNames(classes['creator'], classes['creator--1'])}>
              <img
                src="../../assets/img/avatar-1.png"
                alt="Creator Avatar"
                className={classes['creator-avatar']}
              />
              <div className={classNames(classes['creator-label'], 'heading--caption-2')}>
                Creator
              </div>
              <div className={classNames(classes['creator-name'], 'heading--caption-1-bold')}>
                Enrico Cole
              </div>
            </div>
            <div className={classNames(classes['creator'], classes['creator--2'])}>
              <img
                src="../../assets/icons/stopline.svg"
                alt="Stop Line"
                className={classes['creator-avatar']}
              />
              <div className={classNames(classes['creator-label'], 'heading--caption-2')}>
                Instant price
              </div>
              <div className={classNames(classes['creator-name'], 'heading--caption-1-bold')}>
                3.5 ETH
              </div>
            </div>
          </div>
        </div>
        <div className={classes['card']}>
          <div className={classes['card-description']}>
            <div className={classNames(classes['card-title'], 'heading--body-2-bold')}>
              Current Bid
            </div>
            <div className={classNames(classes['card-price'], 'heading--headline-2')}>1.00 ETH</div>
            <div className={classNames(classes['card-dollars'], 'heading--body-1-bold')}>
              $3,618.36
            </div>
          </div>
          <div className={classes['auction-countdown']}>
            <div className={classNames(classes['auction-countdown-title'], 'heading--body-2-bold')}>
              Auction ending in
            </div>
            <div className={classes['auction-time']}>
              <div className={classNames(classes['time-value'], 'heading--headline-4')}>19</div>
              <div className={classNames(classes['time-value'], 'heading--headline-4')}>24</div>
              <div className={classNames(classes['time-value'], 'heading--headline-4')}>19</div>
              <div className={classNames(classes['time-label'], 'heading--body-2-bold')}>Hrs</div>
              <div className={classNames(classes['time-label'], 'heading--body-2-bold')}>mins</div>
              <div className={classNames(classes['time-label'], 'heading--body-2-bold')}>secs</div>
            </div>
          </div>
        </div>
        <div className={classes['buttons']}>
          <Button variant="primary" className="button-1" size="lg">
            Place a bid
          </Button>
          <Button variant="secondary" className="button-1" size="lg">
            View Item
          </Button>
        </div>
        <div className={classes['arrows']}>
          <div className={classes['arrow-left-box']}>
            <img
              src="../../assets/icons/arrow-left.svg"
              alt="Arrow left"
              className={classes['arrow-left']}
            />
          </div>
          <div className={classes['arrow-right-box']}>
            <img
              src="../../assets/icons/arrow-right.svg"
              alt="Arrow right"
              className={classes['arrow-right']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
