import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { EditIcon, AddIcon } from "@icons";

import "./styles.css";

export function Button({ edit, add }) {
  return (
    <>
      <button
        className={clsx("button", {
          "button_edit-profile": edit,
          "button_add-card": add,
        })}
      >
        {edit ? <EditIcon /> : <AddIcon />}
      </button>
    </>
  );
}

Button.propTypes = {
  edit: PropTypes.bool,
  add: PropTypes.bool,
};
