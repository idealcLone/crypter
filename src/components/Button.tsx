import React from 'react';
import classnames from 'classnames';
import classes from './Button.module.scss';

type PropsType = {
  variant: string;
  className?: string;
  size?: string;
  children: React.ReactNode;
};

export const Button: React.FC<PropsType> = ({
  variant,
  className = 'button-2',
  size = 'md',
  children,
}) => {
  return (
    <button
      className={classnames(
        classes['btn'],
        classes[`btn--${variant}`],
        classes[`btn--${size}`],
        `heading--${className}`
      )}
    >
      {children}
    </button>
  );
};
