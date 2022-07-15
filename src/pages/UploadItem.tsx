import React from 'react';
import classes from './UploadItem.module.scss';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

export const UploadItem: React.FC = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate('/');
  };

  const handleCurrentPathButton = () => {
    navigate('/upload-item');
  };

  const handleSingleUploadButton = () => {
    navigate('/upload-item/single');
  };

  const handleMultipleUploadButton = () => {
    navigate('/upload-item/multiple');
  };

  return (
    <div className={classes['upload']}>
      <div className={classes['upload__header']}>
        <Button variant="secondary" onClick={handleBackButton}>
          Back to home
        </Button>
        <div className={classNames('heading--button-2', classes['upload__path'])}>
          <div className={classes['upload__path--previous']} onClick={handleBackButton}>
            Home
          </div>
          <img src="../assets/icons/arrow-right-small.svg" alt="Arrow right" />
          <div className={classes['upload__path--current']} onClick={handleCurrentPathButton}>
            Upload item
          </div>
        </div>
      </div>
      <div className={classes['upload__body']}>
        <h2 className={classNames('heading--headline-2', classes['upload__title'])}>Upload item</h2>
        <p className={classNames('heading--caption-1', classes['upload__description'])}>
          Choose <span>“Single”</span> if you want your collectible to be one of a kind or
          <span>“Multiple”</span> if you want to sell one collectible multiple times
        </p>
        <div className={classes['upload__options']}>
          <div className={classes['upload__option']}>
            <img src="../assets/img/create-single.png" alt="Create Single" />
            <Button variant="secondary" onClick={handleSingleUploadButton}>
              Create Single
            </Button>
          </div>
          <div className={classes['upload__option']}>
            <img src="../assets/img/create-multiple.png" alt="Create Multiple" />
            <Button variant="primary" onClick={handleMultipleUploadButton}>
              Create Multiple
            </Button>
          </div>
        </div>
        <p className={classNames('heading--caption-2', classes['upload__privacy'])}>
          We do not own your private keys and cannot access your funds without your confirmation.
        </p>
      </div>
    </div>
  );
};
