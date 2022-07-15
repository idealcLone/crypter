import React from 'react';

import classes from './InputRange.module.scss';

type PropsType = {
  min: number;
  max: number;
  label?: string;
  name: string;
};

export const InputRange: React.FC<PropsType> = ({ min, max, label, name }) => {
  return (
    <div className={classes['input-range']}>
      {label && (
        <label className="heading--hairline-2" htmlFor={name}>
          {label}
        </label>
      )}
      <input type="range" name={name} id={name} min={min} max={max} step={0.01} />
      <div className={classes['min-max']}>
        <span className="heading--caption-1-bold">{min} ETH</span>
        <span className="heading--caption-1-bold">{max} ETH</span>
      </div>
    </div>
  );
};
