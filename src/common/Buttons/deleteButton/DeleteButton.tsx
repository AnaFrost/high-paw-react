import React, { FC } from "react";
import { TrashBinIcon } from "@icons";

import { DeleteButtonEl } from "../Button.styled";

export const DeleteButton: FC = () => {
  return (
    <DeleteButtonEl>
      <TrashBinIcon />
    </DeleteButtonEl>
  );
};
