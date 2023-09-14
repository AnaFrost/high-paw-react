import React, { FC } from "react";
import { TrashBinIcon } from "@icons";
import { Button } from "../Button";

import "../styles.css";

export const DeleteButton: FC = () => {
  return (
    <Button del>
      <TrashBinIcon />
    </Button>
  );
};
