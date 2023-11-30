import React, { FC, useState } from "react";
import { LikeIcon, LikeActiveIcon } from "@icons";

import { LikeButtonEl } from "../Button.styled";

export const LikeButton: FC = () => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <LikeButtonEl onClick={handleClick}>
      {!isActive ? <LikeIcon /> : <LikeActiveIcon />}
    </LikeButtonEl>
  );
};
