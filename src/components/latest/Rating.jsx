import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const roundedRating = Math.round(rating * 2) / 2;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (roundedRating >= i + 0.75) {
        // Full star
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{ color: 'goldenrod', border: '' }}
          />
        );
      } else if (roundedRating >= i + 0.25) {
        // Half star
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            style={{ color: 'goldenrod', border: '' }}
          />
        );
      } else {
        // Empty star
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{ color: 'goldenrod', border: '', opacity: 0.5 }}
          />
        );
      }
    }
    return stars;
  };

  return <div className="rating-stars">{renderStars()}</div>;
};

export default RatingStars;
