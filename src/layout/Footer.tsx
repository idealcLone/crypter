import React from 'react';

import classes from './Footer.module.scss';
import classNames from 'classnames';
import { Button } from '../components/Button';

export const Footer: React.FC = () => {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer__body']}>
        <div className={classes['company']}>
          <div className={classes['company__name']}>
            <img src="../assets/icons/logo.svg" alt="Logo" />
            <div className="heading--body-1-bold">crypter</div>
          </div>
          <div className={classNames(classes['company__quote'], 'heading--body-1')}>
            The New Creative Economy.
          </div>
        </div>
        <div className={classes['links']}>
          <div className="heading--body-2-bold">Crypter.</div>
          <ul className={classes['links__list']}>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>Discover</li>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>
              Connect wallet
            </li>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>Create item</li>
          </ul>
        </div>
        <div className={classes['links']}>
          <div className="heading--body-2-bold">Info</div>
          <ul className={classes['links__list']}>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>Download</li>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>Demos</li>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>Support</li>
          </ul>
        </div>
        <div className={classes['newsletter']}>
          <div className="heading--body-2-bold">Join Newsletter</div>
          <p className={classNames(classes['newsletter__description'], 'heading--caption-1')}>
            Subscribe our newsletter to get more free design course and resource
          </p>
          <Button variant="secondary">
            Enter your email
            <img src="../assets/icons/arrow-right.svg" alt="Arrow right" />
          </Button>
        </div>
      </div>
      <div className={classes['footer__bottom']}>
        <p className={classNames(classes['copyright'], 'heading--caption-2')}>
          Copyright © 2021 UI8 LLC. All rights reserved
        </p>
        <p className={classNames(classes['cookies'], 'heading--caption-2')}>
          <span>We use cookies for better service.</span>
          <a href="#">Accept</a>
        </p>
      </div>
    </footer>
  );
};
