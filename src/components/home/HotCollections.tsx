import React from 'react';

import classes from './HotCollections.module.scss';
import classNames from 'classnames';

export const HotCollections: React.FC = () => {
  return (
    <div className={classes['hot-collections']}>
      <h2 className="heading--headline-3">Hot Collections</h2>
      <div className={classes['collections']}>
        <div className={classNames(classes['collection'], classes['collection--1'])}>
          <img
            src="../../assets/img/collection-1-1.png"
            alt="Collection 1 Item 1"
            className={classNames(classes['collection__img'], classes['collection__img--1'])}
          />
          <img
            src="../../assets/img/collection-1-2.png"
            alt="Collection 1 Item 2"
            className={classNames(classes['collection__img'], classes['collection__img--2'])}
          />
          <img
            src="../../assets/img/collection-1-3.png"
            alt="Collection 1 Item 3"
            className={classNames(classes['collection__img'], classes['collection__img--3'])}
          />
          <img
            src="../../assets/img/collection-1-4.png"
            alt="Collection 1 Item 4"
            className={classNames(classes['collection__img'], classes['collection__img--4'])}
          />
          <div className={classNames(classes['collection__name'], 'heading--body-1-bold')}>
            Awesome collection
          </div>
          <div className={classes['collection__description']}>
            <img
              className={classes['collection__avatar']}
              src="../../assets/img/avatar-1.png"
              alt="Creator avatar"
            />
            <div className={classes['collection__creator']}>
              <span className="heading--caption-1">By</span>{' '}
              <span className="heading--caption-1-bold">Kennith Olson</span>
            </div>
            <div className={classNames(classes['collection__count'], 'heading--hairline-2')}>
              28 items
            </div>
          </div>
        </div>
        <div className={classNames(classes['collection'], classes['collection--2'])}>
          <img
            src="../../assets/img/collection-2-1.png"
            alt="Collection 2 Item 1"
            className={classNames(classes['collection__img'], classes['collection__img--1'])}
          />
          <img
            src="../../assets/img/collection-2-2.png"
            alt="Collection 2 Item 2"
            className={classNames(classes['collection__img'], classes['collection__img--2'])}
          />
          <img
            src="../../assets/img/collection-2-3.png"
            alt="Collection 2 Item 3"
            className={classNames(classes['collection__img'], classes['collection__img--3'])}
          />
          <img
            src="../../assets/img/collection-2-4.png"
            alt="Collection 2 Item 4"
            className={classNames(classes['collection__img'], classes['collection__img--4'])}
          />
          <div className={classNames(classes['collection__name'], 'heading--body-1-bold')}>
            Awesome collection
          </div>
          <div className={classes['collection__description']}>
            <img
              className={classes['collection__avatar']}
              src="../../assets/img/avatar-1.png"
              alt="Creator avatar"
            />
            <div className={classes['collection__creator']}>
              <span className="heading--caption-1">By</span>{' '}
              <span className="heading--caption-1-bold">Kennith Olson</span>
            </div>
            <div className={classNames(classes['collection__count'], 'heading--hairline-2')}>
              28 items
            </div>
          </div>
        </div>
        <div className={classNames(classes['collection'], classes['collection--3'])}>
          <img
            src="../../assets/img/collection-3-1.png"
            alt="Collection 3 Item 1"
            className={classNames(classes['collection__img'], classes['collection__img--1'])}
          />
          <img
            src="../../assets/img/collection-3-2.png"
            alt="Collection 3 Item 2"
            className={classNames(classes['collection__img'], classes['collection__img--2'])}
          />
          <img
            src="../../assets/img/collection-3-3.png"
            alt="Collection 3 Item 3"
            className={classNames(classes['collection__img'], classes['collection__img--3'])}
          />
          <img
            src="../../assets/img/collection-3-4.png"
            alt="Collection 3 Item 4"
            className={classNames(classes['collection__img'], classes['collection__img--4'])}
          />
          <div className={classNames(classes['collection__name'], 'heading--body-1-bold')}>
            Awesome collection
          </div>
          <div className={classes['collection__description']}>
            <img
              className={classes['collection__avatar']}
              src="../../assets/img/avatar-1.png"
              alt="Creator avatar"
            />
            <div className={classes['collection__creator']}>
              <span className="heading--caption-1">By</span>{' '}
              <span className="heading--caption-1-bold">Kennith Olson</span>
            </div>
            <div className={classNames(classes['collection__count'], 'heading--hairline-2')}>
              28 items
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
