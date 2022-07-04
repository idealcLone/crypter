import React from 'react';

import classes from './CTA.module.scss';
import { Button } from '../components/Button';
import classNames from 'classnames';

export const CTA: React.FC = () => {
  return (
    <section className={classes['cta']}>
      <div className={classes['cta__hero']}>
        <div className={classNames(classes['cta__hairline'], 'heading--hairline-1')}>
          Save your time with stacks
        </div>
        <h2 className="heading--headline-1">Earn free crypto with Crypter</h2>
        <p className="heading--body-2">A creative agency that lead and inspire</p>
        <div className={classes['cta__actions']}>
          <Button variant="primary">Earn now</Button>
          <Button variant="secondary">Discover more</Button>
        </div>
      </div>
      <div className={classes['cta__image']} />
    </section>
  );
};
