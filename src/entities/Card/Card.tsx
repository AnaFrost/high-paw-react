import React, { FC } from "react";
import { LikeButton, DeleteButton } from "@common/buttons";

import "./styles.css";

interface ICard {
  image: string;
  typeAnimal: React.ReactNode;
  text: string;
}

export const Card: FC<ICard> = ({ image, typeAnimal, text }) => {
  return (
    <div className="card">
      <img src={image} className="card__image" alt="card" />
      <div className="card-marker">
        <div className="marker__image">{typeAnimal}</div>
        <div className="card-marker__menu">
          <DeleteButton />
        </div>
      </div>
      <div className="card__discription">
        <h3 className="card__title">{text}</h3>
        <LikeButton />
      </div>
    </div>
  );
};
