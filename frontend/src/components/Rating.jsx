import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  console.log("arrayyyy", [...Array(5)]);
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => {
        return (
          <span>
            {value >= i + 1 ? (
              <FaStar />
            ) : value >= 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      })}
      <span className="rating-text">{text}</span>
    </div>
  );
};

export default Rating;
