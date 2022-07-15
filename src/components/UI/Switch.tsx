import React from 'react';
import classes from './Switch.module.scss';
import classNames from 'classnames';

type PropsType = {
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
};

export const Switch: React.FC<PropsType> = ({ value, onChange, name, className }) => {
  return (
    <div className={className ? classNames(className, classes['switch']) : classes['switch']}>
      <input
        type="checkbox"
        className={classes['switch__checkbox']}
        name={name}
        id={name}
        onChange={onChange}
        defaultChecked={value}
      />
      <label htmlFor={name} className={classes['switch__label']} />
    </div>
  );
};
