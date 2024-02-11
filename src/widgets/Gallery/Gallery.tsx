import React, { Component } from "react";
import { Card } from "@entities/card";
import { getCardsList } from "./getCardsList";

import { GalleryEl } from "./Gallery.styled";

interface IGalery {
  items: {
    id: number;
    url: string;
    type: string;
    description: string;
  }[];
  deleteItem: (id: number) => void;
}

export class Gallery extends Component {
  cardsList = getCardsList("http://localhost:4000/cards");
  state = this.cardsList;

  deleteItem = (id: number) => {
    this.setState((cardsList: { id: number }[]) => {
      const idx = cardsList.findIndex((el: { id: number }) => el.id === id);

      const newArray = [
        ...cardsList.slice(0, idx),
        ...cardsList.slice(idx + 1),
      ];

      return { cardsList: newArray };
    });
  };

  render() {
    return (
      <GalleryEl>
        {items.map(({ id, description, url }) => {
          return (
            <Card
              key={id}
              id={id}
              text={description}
              image={url}
              onDeleted={() => deleteItem(id)}
            />
          );
        })}
      </GalleryEl>
    );
  }
}
