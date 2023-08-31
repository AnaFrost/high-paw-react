import React from "react";
import { CloseIcon } from "@icons";

import "../styles.css";

export function CloseButton() {
  return (
    <>
      <button className="button button_close">
        <CloseIcon />
      </button>
    </>
  );
}
