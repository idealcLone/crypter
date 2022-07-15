import React from 'react';

import classes from './Feed.module.scss';
import classNames from 'classnames';
import { Button } from '../UI/Button';

export const Feed: React.FC = () => {
  return (
    <div className={classes['feed']}>
      <div className={classes['main']}>
        <img
          src="../../assets/img/feed-main-image.png"
          alt="Feed Main item"
          className={classes['main__image']}
        />
        <div className={classes['main__description']}>
          <img
            src="../../assets/img/avatar-1.png"
            alt="Main item avatar"
            className={classes['main__avatar']}
          />
          <div className={classes['main__info']}>
            <div className="heading--body-1-bold">The future of ETH®</div>
            <div className="heading--caption-1-bold">18 in stock</div>
          </div>
          <div className={classes['main__bid']}>
            <div className={classNames(classes['main__bid-label'], 'heading--caption-2')}>
              Highest bid
            </div>
            <div className={classNames(classes['main__bid-price'], 'heading--hairline-2')}>
              1.125 ETH
            </div>
          </div>
        </div>
      </div>
      <ul className={classes['item__list']}>
        <li className={classes['item']}>
          <img
            src="../../assets/img/feed-sub-1.png"
            alt="Feed sub 1"
            className={classes['item__image']}
          />
          <div className={classes['item__description']}>
            <h4 className="heading--body-2-bold">ETH never die</h4>
            <div className={classes['item__pricing']}>
              <img
                src="../../assets/img/avatar-1.png"
                alt="Creator avatar"
                className={classes['item__creator']}
              />
              <div className={classNames(classes['item__price'], 'heading--hairline-2')}>
                0.27 ETH
              </div>
              <div className={classNames(classes['item__count'], 'heading--caption-1')}>
                1 of 12
              </div>
            </div>
            <Button variant="secondary" size="sm">
              Place a bid
            </Button>
          </div>
        </li>
        <li className={classes['item']}>
          <img
            src="../../assets/img/feed-sub-2.png"
            alt="Feed sub 2"
            className={classes['item__image']}
          />
          <div className={classes['item__description']}>
            <h4 className="heading--body-2-bold">Future coming soon</h4>
            <div className={classes['item__pricing']}>
              <img
                src="../../assets/img/avatar-1.png"
                alt="Creator avatar"
                className={classes['item__creator']}
              />
              <div className={classNames(classes['item__price'], 'heading--hairline-2')}>
                0.27 ETH
              </div>
              <div className={classNames(classes['item__count'], 'heading--caption-1')}>1 of 3</div>
            </div>
            <Button variant="primary" size="sm" className={classes['item__btn']}>
              Place a bid
            </Button>
          </div>
        </li>
        <li className={classes['item']}>
          <img
            src="../../assets/img/feed-sub-3.png"
            alt="Feed sub 3"
            className={classes['item__image']}
          />
          <div className={classes['item__description']}>
            <h4 className="heading--body-2-bold">Elon Musk silver coin 3d print</h4>
            <div className={classes['item__pricing']}>
              <img
                src="../../assets/img/avatar-1.png"
                alt="Creator avatar"
                className={classes['item__creator']}
              />
              <div className={classNames(classes['item__price'], 'heading--hairline-2')}>
                0.27 ETH
              </div>
              <div className={classNames(classes['item__count'], 'heading--caption-1')}>1 of 4</div>
            </div>
            <Button variant="secondary" size="sm" className={classes['item__btn']}>
              Place a bid
            </Button>
          </div>
        </li>
      </ul>
      <div className={classes['creators']}>
        <h4 className="heading--caption-2-bold">Latest upload from creators 🔥</h4>
        <ul className={classes['creator__list']}>
          <li className={classes['creator']}>
            <div className={classes['creator__avatar']}>
              <img
                src="../../assets/img/avatar-1.png"
                alt="Creator avatar"
                className={classes['creator__img']}
              />
              <div className={classNames('heading--caption-2-bold', classes['creator__sold'])}>
                6
              </div>
            </div>
            <div className={classes['creator__info']}>
              <div className={classNames('heading--caption-1-bold', classes['creator__name'])}>
                Payton Harris
              </div>
              <div className={classNames('heading--caption-2-bold', classes['creator__price'])}>
                <span>2.456</span>
                <span>ETH</span>
              </div>
            </div>
          </li>
          <li className={classes['creator']}>
            <div className={classes['creator__avatar']}>
              <img
                src="../../assets/img/avatar-2.png"
                alt="Creator avatar"
                className={classes['creator__img']}
              />
              <div className={classNames('heading--caption-2-bold', classes['creator__sold'])}>
                2
              </div>
            </div>
            <div className={classes['creator__info']}>
              <div className={classNames('heading--caption-1-bold', classes['creator__name'])}>
                Anita Bins
              </div>
              <div className={classNames('heading--caption-2-bold', classes['creator__price'])}>
                <span>2.456</span>
                <span>ETH</span>
              </div>
            </div>
          </li>
          <li className={classes['creator']}>
            <div className={classes['creator__avatar']}>
              <img
                src="../../assets/img/avatar-3.png"
                alt="Creator avatar"
                className={classes['creator__img']}
              />
              <div className={classNames('heading--caption-2-bold', classes['creator__sold'])}>
                3
              </div>
            </div>
            <div className={classes['creator__info']}>
              <div className={classNames('heading--caption-1-bold', classes['creator__name'])}>
                Joana Wuckert
              </div>
              <div className={classNames('heading--caption-2-bold', classes['creator__price'])}>
                <span>2.456</span>
                <span>ETH</span>
              </div>
            </div>
          </li>
          <li className={classes['creator']}>
            <div className={classes['creator__avatar']}>
              <img
                src="../../assets/img/avatar-4.png"
                alt="Creator avatar"
                className={classes['creator__img']}
              />
              <div className={classNames('heading--caption-2-bold', classes['creator__sold'])}>
                4
              </div>
            </div>
            <div className={classes['creator__info']}>
              <div className={classNames('heading--caption-1-bold', classes['creator__name'])}>
                Lorena Ledner
              </div>
              <div className={classNames('heading--caption-2-bold', classes['creator__price'])}>
                <span>2.456</span>
                <span>ETH</span>
              </div>
            </div>
          </li>
        </ul>
        <Button variant="secondary">Discover more &rarr;</Button>
      </div>
    </div>
  );
};
