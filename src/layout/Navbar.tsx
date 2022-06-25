import React from 'react';

import classes from './Navbar.module.scss';
import { Button } from '../components/Button';
import classnames from 'classnames';
import { SearchBar } from '../components/SearchBar';

export const Navbar = () => {
  return (
    <nav className={classes['navbar']}>
      <div className={classes['left-content']}>
        <div className={classes['logo-box']}>
          <img src="../assets/icons/logo.svg" alt="Logo" className={classes['logo']} />
          <div className="heading heading--body-1-bold">crypter</div>
        </div>
        <div className={classes['divider']} />
        <a href="#" className={classnames(classes['link'], 'heading--button-2')}>
          Discover
        </a>
        <a href="#" className={classnames(classes['link'], 'heading--button-2')}>
          How it work
        </a>
      </div>
      <div className={classes['right-content']}>
        <SearchBar />
        <div className={classes['notification']}>
          <img
            src="../assets/icons/notification.svg"
            alt="Notification Icon"
            className={classes['notification-icon']}
          />
          <img
            src="../assets/icons/status-new.svg"
            alt="Status Icon"
            className={classes['status-icon']}
          />
        </div>
        <div className={classes['buttons']}>
          <Button variant="primary">Upload</Button>
          <Button variant="secondary">Connect Wallet</Button>
        </div>
      </div>
    </nav>
  );
};
