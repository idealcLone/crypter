import React from 'react';
import classes from './SearchBar.module.scss';

export const SearchBar: React.FC = () => {
  return (
    <div className={classes['search-bar']}>
      <input type="text" className={classes['search-input']} placeholder="Search" />
      <img src="../assets/icons/search.svg" alt="Search Icon" className={classes['search-icon']} />
    </div>
  );
};
