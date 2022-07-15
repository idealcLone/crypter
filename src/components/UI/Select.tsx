import React from 'react';
import classes from './Select.module.scss';
import classNames from 'classnames';

type PropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  options: string[];
  label?: string;
  className?: string;
};

export const Select: React.FC<PropsType> = ({
  value,
  onChange,
  name,
  label,
  options,
  className,
}) => {
  return (
    <div className={className ? classNames(classes['select'], className) : classes['select']}>
      {label && (
        <label
          htmlFor={name}
          className={classNames(classes['select__label'], 'heading--hairline-2')}
        >
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        className={classNames(classes['select__select'], 'heading--caption-1-bold')}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
