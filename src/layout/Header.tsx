import React from 'react';
import { Button } from '../components/Button';

import classes from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={classes['header']}>
      <h5 className="heading--hairline-2">Create, explore, & collect digital art NFTs.</h5>
      <h3 className="heading--headline-3">The new creative economy.</h3>
      <Button variant="secondary">Start your search</Button>
    </header>
  );
};
