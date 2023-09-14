import React, { FC, useState } from "react";
import { LikeIcon, LikeActiveIcon } from "@icons";
import { Button } from "../Button";

import "../styles.css";

export const LikeButton: FC = () => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <Button like onClick={handleClick}>
      {!isActive ? <LikeIcon /> : <LikeActiveIcon />}
    </Button>
  );
};
