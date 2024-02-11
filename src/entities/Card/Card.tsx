import React, { FC, useState } from "react";
import { LikeButton, DeleteButtonEl, InvisibleButtonEl } from "@common/buttons";

import { TrashBinIcon } from "@icons";

import { AnimatedModal } from "@common/animatedModal";

import {
  CardEl,
  Title,
  CardImageInPopup,
  CardImage,
  DiscriptionContainerInPopup,
  PopupWithImage,
  DiscriptionContainer,
  ButtonsPanel,
} from "./Card.styled";

interface ICard {
  id: number;
  image: string;
  text: string;
  onDeleted: () => void;
}

export const Card: FC<ICard> = ({ id, image, text, onDeleted }) => {
  const [opened, setOpened] = useState(false);

  return (
    <CardEl key={id}>
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
      <DiscriptionContainer>
        <Title>{text}</Title>

        <ButtonsPanel>
          <DeleteButtonEl onClick={onDeleted}>
            <TrashBinIcon />
          </DeleteButtonEl>
          <LikeButton />
        </ButtonsPanel>
      </DiscriptionContainer>
    </CardEl>
  );
};
