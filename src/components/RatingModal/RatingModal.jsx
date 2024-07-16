import React, { useState } from 'react';
import styles from './RatingModal.module.css';

const RatingModal = ({ rating, setRating }) => {

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={value <= rating ? styles.filledStar : styles.emptyStar}
          onClick={() => handleClick(value)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default RatingModal;