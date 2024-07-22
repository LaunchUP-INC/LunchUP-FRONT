import React, { useState } from 'react';
import styles from './RatingModal.module.css';

const RatingModal = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={
            value <= (hoverRating || rating) ? styles.filledStar : styles.emptyStar
          }
          onClick={() => handleClick(value)}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default RatingModal;
