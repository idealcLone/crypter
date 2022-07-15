import React from 'react';

import classes from './Footer.module.scss';
import classNames from 'classnames';
import { Button } from '../UI/Button';
import { Link, useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNewsletterButton = () => {
    navigate('/');
  };

  return (
    <footer className={classes['footer']}>
      <div className={classes['footer__body']}>
        <div className={classes['company']}>
          <div className={classes['company__name']}>
            <img src="../../assets/icons/logo.svg" alt="Logo" />
            <div className="heading--body-1-bold">crypter</div>
          </div>
          <div className={classNames(classes['company__quote'], 'heading--body-1')}>
            The New Creative Economy.
          </div>
        </div>
        <div className={classes['links']}>
          <div className="heading--body-2-bold">Crypter.</div>
          <ul className={classes['links__list']}>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>
              <Link to="/discover" className={classes['links__link']}>
                Discover
              </Link>
            </li>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>
              <Link to="/connect-wallet" className={classes['links__link']}>
                Connect wallet
              </Link>
            </li>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>
              <Link to="/create-item" className={classes['links__link']}>
                Create item
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes['links']}>
          <div className="heading--body-2-bold">Info</div>
          <ul className={classes['links__list']}>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>
              <Link to="/download" className={classes['links__link']}>
                Download
              </Link>
            </li>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>
              <Link to="/demos" className={classes['links__link']}>
                Demos
              </Link>
            </li>
            <li className={classNames(classes['links__item'], 'heading--button-2')}>
              <Link to="support" className={classes['links__link']}>
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes['newsletter']}>
          <div className="heading--body-2-bold">Join Newsletter</div>
          <p className={classNames(classes['newsletter__description'], 'heading--caption-1')}>
            Subscribe our newsletter to get more free design course and resource
          </p>
          <Button variant="secondary" onClick={handleNewsletterButton}>
            Enter your email
            <img src="../../assets/icons/arrow-right.svg" alt="Arrow right" />
          </Button>
        </div>
      </div>
      <div className={classes['footer__bottom']}>
        <p className={classNames(classes['copyright'], 'heading--caption-2')}>
          Copyright © 2021 UI8 LLC. All rights reserved
        </p>
        <p className={classNames(classes['cookies'], 'heading--caption-2')}>
          <span>We use cookies for better service.</span>
          <a href="src/components/layout/Footer#">Accept</a>
        </p>
      </div>
    </footer>
  );
};
