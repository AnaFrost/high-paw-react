import React from "react";
import PropTypes from "prop-types";

import { LikeIcon, TrashBinIcon } from "@icons";
import "./styles.css";

export function Card({ image, type, text }) {
  return (
    <div className="card">
      <img src={image} className="card__image" alt="card image" />
      <div className="card-marker">
        <div className="marker__image">{type}</div>
        <div className="card-marker__menu">
          <button className="card__delete-btn">
            <TrashBinIcon />
          </button>
        </div>
      </div>
      <div className="card__discription">
        <h3 className="card__title">{text}</h3>
        <button className="card__like-btn">
          <LikeIcon />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};
