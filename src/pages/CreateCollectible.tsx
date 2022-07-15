import React, { useState } from 'react';
import classes from './CreateCollectible.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import classNames from 'classnames';
import { Input } from '../components/UI/Input';
import { Select } from '../components/UI/Select';
import { Switch } from '../components/UI/Switch';

type StateType = {
  name: string;
  description: string;
  royalties: string;
  size: string;
  property: string;
  onSale: boolean;
  instantSale: boolean;
  unlockPurchased: boolean;
};

export const CreateCollectible: React.FC = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState<StateType>({
    name: '',
    description: '',
    property: '',
    size: '',
    royalties: '',
    onSale: true,
    instantSale: false,
    unlockPurchased: false,
  });

  const handleSwitchButton = () => {
    navigate('/create/multiple');
  };

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  return (
    <div className={classes['container']}>
      <div className={classes['collectible']}>
        <div className={classes['collectible__header']}>
          <h2 className="heading--headline-2">Create single collectible</h2>
          <Button variant="secondary" onClick={handleSwitchButton}>
            Switch to Multiple
          </Button>
        </div>
        <div className={classes['upload']}>
          <h3 className={classNames(classes['upload__heading'], 'heading--body-2-bold')}>
            Upload file
          </h3>
          <p className={classNames(classes['upload__description'], 'heading--caption-2')}>
            Drag or choose your file to upload
          </p>
          <div className={classes['upload__field']}>
            <img
              src="../assets/icons/file.svg"
              alt="File Icon"
              className={classes['upload__icon']}
            />
            <div className={classNames(classes['upload__formats'], 'heading--caption-2')}>
              PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
            </div>
          </div>
        </div>
        <div className={classes['details']}>
          <h3 className={classNames(classes['details__heading'], 'heading--body-2-bold')}>
            Item Details
          </h3>
          <div className={classes['details__row']}>
            <Input
              value={details.name}
              name="name"
              onChange={handleDetailsChange}
              placeholder='e. g. "Redeemable Bitcoin Card with logo"'
              label="Item name"
            />
          </div>
          <div className={classes['details__row']}>
            <Input
              value={details.description}
              name="description"
              onChange={handleDetailsChange}
              placeholder="e. g. “After purchasing you will able to recived the logo...”"
              label="Description"
            />
          </div>
          <div className={classes['details__row']}>
            <Select
              value={details.royalties}
              name="royalties"
              onChange={handleDetailsChange}
              label="Royalties"
              options={['10%', '20%', '30%']}
            />
            <Input
              value={details.size}
              name="size"
              onChange={handleDetailsChange}
              placeholder="e. g. Size"
              label="Size"
            />
            <Input
              value={details.property}
              name="property"
              onChange={handleDetailsChange}
              placeholder="e. g. Property"
              label="Property"
            />
          </div>
        </div>
        <div className={classes['collectible__divider']} />
        <div className={classes['settings']}>
          <div className={classes['switch__container']}>
            <div className={classes['switch__label']}>
              <h4 className={classNames('heading--body-2-bold', classes['switch__name'])}>
                Put on sale
              </h4>
              <p className={classNames('heading--caption-2', classes['switch__tip'])}>
                You’ll receive bids on this item
              </p>
            </div>
            <Switch name="onSale" value={details.onSale} onChange={handleDetailsChange} />
          </div>
          <div className={classes['switch__container']}>
            <div className={classes['switch__label']}>
              <h4 className={classNames('heading--body-2-bold', classes['switch__name'])}>
                Instant sale price
              </h4>
              <p className={classNames('heading--caption-2', classes['switch__tip'])}>
                Enter the price for which the item will be instantly sold
              </p>
            </div>
            <Switch name="instantSale" value={details.instantSale} onChange={handleDetailsChange} />
          </div>
          <div className={classes['switch__container']}>
            <div className={classes['switch__label']}>
              <h4 className={classNames('heading--body-2-bold', classes['switch__name'])}>
                Unlock once purchased
              </h4>
              <p className={classNames('heading--caption-2', classes['switch__tip'])}>
                Content will be unlocked after successful transaction
              </p>
            </div>
            <Switch
              name="unlockPurchased"
              value={details.unlockPurchased}
              onChange={handleDetailsChange}
            />
          </div>
        </div>
      </div>
      <div className={classes['preview']}></div>
    </div>
  );
};
