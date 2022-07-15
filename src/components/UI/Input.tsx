import React from 'react';
import classes from './Input.module.scss';
import classNames from 'classnames';

type PropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

export const Input: React.FC<PropsType> = ({
  value,
  onChange,
  name,
  label,
  placeholder,
  className,
}) => {
  return (
    <div className={className ? classNames(className, classes['input']) : classes['input']}>
      {label && (
        <label
          className={classNames(classes['input__label'], 'heading--hairline-2')}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        className={classNames(classes['input__input'], 'heading--caption-1-bold')}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
      />
    </div>
  );
};
