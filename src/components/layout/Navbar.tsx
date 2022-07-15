import React from 'react';

import classes from './Navbar.module.scss';
import { Button } from '../Button';
import classnames from 'classnames';
import { SearchBar } from '../SearchBar';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <nav className={classes['navbar']}>
      <div className={classes['left-content']}>
        <div className={classes['logo-box']} onClick={handleLogoClick}>
          <img src="../../assets/icons/logo.svg" alt="Logo" className={classes['logo']} />
          <div className="heading heading--body-1-bold">crypter</div>
        </div>
        <div className={classes['divider']} />
        <a
          href="src/components/layout/Navbar#"
          className={classnames(classes['link'], 'heading--button-2')}
        >
          Discover
        </a>
        <a
          href="src/components/layout/Navbar#"
          className={classnames(classes['link'], 'heading--button-2')}
        >
          How it work
        </a>
      </div>
      <div className={classes['right-content']}>
        <SearchBar />
        <div className={classes['notification']}>
          <img
            src="../../assets/icons/notification.svg"
            alt="Notification Icon"
            className={classes['notification-icon']}
          />
          <img
            src="../../assets/icons/status-new.svg"
            alt="Status Icon"
            className={classes['status-icon']}
          />
        </div>
        <div className={classes['buttons']}>
          <Button variant="primary" onClick={handleUploadClick}>
            Upload
          </Button>
          <Button variant="secondary" onClick={handleUploadClick}>
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};
