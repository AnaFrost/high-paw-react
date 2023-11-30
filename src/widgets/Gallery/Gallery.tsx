import React, { FC } from "react";
import { Card } from "@entities/card";
import { CatMarkerIcon, DogMarkerIcon, UnicornMarkerIcon } from "@icons";

import GoliafImg from "@images/goliaf.jpg";
import LakkyImg from "@images/lakky1.jpg";
import LakkyImg2 from "@images/lakky2.jpg";
import LakkyImg3 from "@images/lakita1.jpg";
import PrudenceImg from "@images/prudence1.jpg";
import MyakaImg from "@images/myaka2.jpg";
import MyakaImg2 from "@images/myaka1.jpg";
import PrudenceImg2 from "@images/prudence2.jpg";
import RatsfImg from "@images/rats2.jpg";

import { GalleryEl } from "./Gallery.styled";

const MARKER_CAT = <CatMarkerIcon />;
const MARKER_DOG = <DogMarkerIcon />;
const MARKER_OTHER = <UnicornMarkerIcon />;

const getCardTypeLink = (typePet: string) => {
  switch (typePet) {
    case "cat":
      return MARKER_CAT;
    case "dog":
      return MARKER_DOG;
    default:
      return MARKER_OTHER;
  }
};

const initialCards = [
  {
    description: "I`m sweety chocolate maffin",
    link: GoliafImg,
    typePet: getCardTypeLink("cat"),
  },
  {
    description: "i`m Luckyy and i`m cute",
    link: LakkyImg,
    typePet: getCardTypeLink("cat"),
  },
  {
    description: "Hey, find me :з",
    link: PrudenceImg,
    typePet: getCardTypeLink("dog"),
  },
  {
    description: "Meowlax",
    link: MyakaImg,
    typePet: getCardTypeLink("cat"),
  },
  {
    description: "Puppy U・ᴥ・U",
    link: PrudenceImg2,
    typePet: getCardTypeLink("dog"),
  },
  {
    description: "Rats <3",
    link: RatsfImg,
    typePet: getCardTypeLink("other"),
  },
  {
    description: "Nya nya",
    link: LakkyImg2,
    typePet: getCardTypeLink("cat"),
  },
  {
    description: ":3",
    link: LakkyImg3,
    typePet: getCardTypeLink("cat"),
  },
  {
    description: "O_O",
    link: MyakaImg2,
    typePet: getCardTypeLink("cat"),
  },
];

export const Gallery: FC = () => {
  return (
    <GalleryEl>
      {initialCards.map((card) => {
        return (
          <Card
            key={card.link}
            text={card.description}
            image={card.link}
            typePet={card.typePet}
          />
        );
      })}
    </GalleryEl>
  );
};
