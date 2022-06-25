import classnames from 'classnames';
import React from 'react';

import classes from './Button.module.scss';

type PropsType = {
  variant: string;
  className: string;
  size: string;
  children: React.ReactNode;
};

export const Button: React.FC<PropsType> = ({
  variant,
  className = 'button-2',
  size,
  children,
}) => {
  return (
    <button
      className={
        variant === 'primary'
          ? classnames(classes['btn'], classes['btn--primary'], `heading--${className}`)
          : classnames(classes['btn'], classes['btn--secondary'], `heading--${className}`)
      }
      data-size={size}
    >
      {children}
    </button>
  );
};
