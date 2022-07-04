import React from 'react';

import classes from './HotBid.module.scss';
import classNames from 'classnames';

export const HotBid: React.FC = () => {
  return (
    <div className={classes['hot-bid']}>
      <div className={classes['hot-bid__header']}>
        <h2 className="heading--headline-3">Hot bid</h2>
        <div className={classes['hot-bid__navigator']}>
          <img src="../assets/icons/arrow-left.svg" alt="Left arrow" />
          <img src="../assets/icons/arrow-right.svg" alt="Right arrow" />
        </div>
      </div>
      <div className={classes['hot-bid__main']}>
        <div className={classes['hot-bid__card']}>
          <img
            className={classes['hot-bid__img']}
            src="../assets/img/hot-bid-1.png"
            alt="Hot Bid Image 1"
          />
          <div className={classes['card__description']}>
            <div className={classes['card__header']}>
              <div className="heading--body-2-bold">Amazing digital art</div>
              <div className={classNames(classes['card__price'], 'heading--hairline-2')}>
                2.45 ETH
              </div>
            </div>
            <div className={classes['card__body']}>
              <div className={classes['card__creators']}>
                <img src="../assets/img/avatar-1.png" alt="Creator 1" />
                <img src="../assets/img/avatar-2.png" alt="Creator 2" />
                <img src="../assets/img/avatar-3.png" alt="Creator 3" />
              </div>
              <div className={classNames(classes['card__count'], 'heading--caption-1-bold')}>
                3 in stock
              </div>
            </div>
          </div>
          <div className={classes['card__footer']}>
            <div className={classes['card__highest-bid']}>
              <img src="../assets/icons/candlesticks.svg" alt="Highest bid icon" />
              <span className="heading--caption-2">Highest bid</span>
              <span className="heading--caption-2-bold">0.001 ETH</span>
            </div>
            <div className={classes['card__new-bid']}>
              <span className="heading--caption-2">New bid 🔥</span>
            </div>
          </div>
        </div>
        <div className={classes['hot-bid__card']}>
          <img
            className={classes['hot-bid__img']}
            src="../assets/img/hot-bid-2.png"
            alt="Hot Bid Image 2"
          />
          <div className={classes['card__description']}>
            <div className={classes['card__header']}>
              <div className="heading--body-2-bold">Amazing digital art</div>
              <div className={classNames(classes['card__price'], 'heading--hairline-2')}>
                2.45 ETH
              </div>
            </div>
            <div className={classes['card__body']}>
              <div className={classes['card__creators']}>
                <img src="../assets/img/avatar-1.png" alt="Creator 1" />
                <img src="../assets/img/avatar-2.png" alt="Creator 2" />
                <img src="../assets/img/avatar-3.png" alt="Creator 3" />
              </div>
              <div className={classNames(classes['card__count'], 'heading--caption-1-bold')}>
                3 in stock
              </div>
            </div>
          </div>
          <div className={classes['card__footer']}>
            <div className={classes['card__highest-bid']}>
              <img src="../assets/icons/candlesticks.svg" alt="Highest bid icon" />
              <span className="heading--caption-2">Highest bid</span>
              <span className="heading--caption-2-bold">0.001 ETH</span>
            </div>
            <div className={classes['card__new-bid']}>
              <span className="heading--caption-2">New bid 🔥</span>
            </div>
          </div>
        </div>
        <div className={classes['hot-bid__card']}>
          <img
            className={classes['hot-bid__img']}
            src="../assets/img/hot-bid-3.png"
            alt="Hot Bid Image 3"
          />
          <div className={classes['card__description']}>
            <div className={classes['card__header']}>
              <div className="heading--body-2-bold">Amazing digital art</div>
              <div className={classNames(classes['card__price'], 'heading--hairline-2')}>
                2.45 ETH
              </div>
            </div>
            <div className={classes['card__body']}>
              <div className={classes['card__creators']}>
                <img src="../assets/img/avatar-1.png" alt="Creator 1" />
                <img src="../assets/img/avatar-2.png" alt="Creator 2" />
                <img src="../assets/img/avatar-3.png" alt="Creator 3" />
              </div>
              <div className={classNames(classes['card__count'], 'heading--caption-1-bold')}>
                3 in stock
              </div>
            </div>
          </div>
          <div className={classes['card__footer']}>
            <div className={classes['card__highest-bid']}>
              <img src="../assets/icons/candlesticks.svg" alt="Highest bid icon" />
              <span className="heading--caption-2">Highest bid</span>
              <span className="heading--caption-2-bold">0.001 ETH</span>
            </div>
            <div className={classes['card__new-bid']}>
              <span className="heading--caption-2">New bid 🔥</span>
            </div>
          </div>
        </div>
        <div className={classes['hot-bid__card']}>
          <img
            className={classes['hot-bid__img']}
            src="../assets/img/hot-bid-4.png"
            alt="Hot Bid Image 4"
          />
          <div className={classes['card__description']}>
            <div className={classes['card__header']}>
              <div className="heading--body-2-bold">Amazing digital art</div>
              <div className={classNames(classes['card__price'], 'heading--hairline-2')}>
                2.45 ETH
              </div>
            </div>
            <div className={classes['card__body']}>
              <div className={classes['card__creators']}>
                <img src="../assets/img/avatar-1.png" alt="Creator 1" />
                <img src="../assets/img/avatar-2.png" alt="Creator 2" />
                <img src="../assets/img/avatar-3.png" alt="Creator 3" />
              </div>
              <div className={classNames(classes['card__count'], 'heading--caption-1-bold')}>
                3 in stock
              </div>
            </div>
          </div>
          <div className={classes['card__footer']}>
            <div className={classes['card__highest-bid']}>
              <img src="../assets/icons/candlesticks.svg" alt="Highest bid icon" />
              <span className="heading--caption-2">Highest bid</span>
              <span className="heading--caption-2-bold">0.001 ETH</span>
            </div>
            <div className={classes['card__new-bid']}>
              <span className="heading--caption-2">New bid 🔥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
