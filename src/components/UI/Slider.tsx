import React, { useEffect, useRef, useState } from 'react';

import classes from './Slider.module.scss';
import classNames from 'classnames';

type PropsType = {
  step?: number;
  className?: string;
  children: React.ReactNode;
};

export const Slider: React.FC<PropsType> = ({ step = 1, className, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const initTrack = () => {
    const slides = Array.from(trackRef.current?.children as HTMLCollectionOf<HTMLDivElement>);
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
      slide.style.left = `${(slideWidth + 32) * index}px`;
    });
  };

  useEffect(() => {
    initTrack();
  }, []);

  const moveSlider = (step: number) => {
    if (trackRef.current) {
      const newIndex = currentIndex + step;
      const moveAmount = Array.from(trackRef.current.children as HTMLCollectionOf<HTMLDivElement>)[
        newIndex
      ]?.style.left;
      trackRef.current.style.transform = `translateX(-${moveAmount})`;
      setCurrentIndex(newIndex);
    }
  };

  const handleLeftArrowClick = () => {
    moveSlider(-step);
  };

  const handleRightArrowClick = () => {
    moveSlider(step);
  };

  return (
    <div className={classNames(className, classes['slider'])}>
      {currentIndex > step - 1 && (
        <img
          src="../../assets/icons/arrow-left.svg"
          alt="Arrow left"
          className={classes['slider__left']}
          onClick={handleLeftArrowClick}
        />
      )}
      <div className={classes['slider__track']}>
        <div className={classes['slider__items']} ref={trackRef}>
          {children}
        </div>
      </div>
      {currentIndex + step + 2 < (children as [])?.length && (
        <img
          src="../../assets/icons/arrow-right.svg"
          alt="Arrow right"
          className={classes['slider__right']}
          onClick={handleRightArrowClick}
        />
      )}
    </div>
  );
};
