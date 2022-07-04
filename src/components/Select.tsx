import React from 'react';
import classes from './Select.module.scss';

type PropsType = {
  label?: string;
  options: string[];
};

export const Select: React.FC<PropsType> = ({ label, options }) => {
  return (
    <div className={classes['select']}>
      {label && (
        <label htmlFor="select-value" className="heading--hairline-2">
          {label}
        </label>
      )}
      <select name="time" id="select-value" className="heading--caption-1-bold">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
