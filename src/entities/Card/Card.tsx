import React, { FC, useState } from "react";
import { LikeButton, DeleteButton, InvisibleButtonEl } from "@common/buttons";

import "./styles.css";
import { AnimatedModal } from "@common/animatedModal";
import {
  CardEl,
  Title,
  CardImageInPopup,
  CardImage,
  DiscriptionContainerInPopup,
  PopupWithImage,
  MarkerImage,
  DiscriptionContainer,
} from "./Card.styled";

interface ICard {
  image: string;
  typePet: React.ReactNode;
  text: string;
}

export const Card: FC<ICard> = ({ image, typePet, text }) => {
  const [opened, setOpened] = useState(false);

  return (
    <CardEl>
      <InvisibleButtonEl onClick={() => setOpened(true)}>
        <CardImage src={image} alt="card" />
      </InvisibleButtonEl>

      <AnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <PopupWithImage>
          <CardImageInPopup src={image} alt="card" />
          <DiscriptionContainerInPopup>
            <Title>{text}</Title>
          </DiscriptionContainerInPopup>
        </PopupWithImage>
      </AnimatedModal>

      <div className="card-marker">
        <MarkerImage>{typePet}</MarkerImage>
        <div className="card-marker__menu">
          <DeleteButton />
        </div>
      </div>
      <DiscriptionContainer>
        <Title>{text}</Title>
        <LikeButton />
      </DiscriptionContainer>
    </CardEl>
  );
};
