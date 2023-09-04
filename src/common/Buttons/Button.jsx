import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./styles.css";

export function Button({
  children,
  onClick,
  type,
  edit,
  add,
  like,
  submit,
  radio,
  close,
  del,
}) {
  return (
    <button
      className={clsx("button", {
        "button-edit-profile": edit,
        "button-add-card": add,
        "button-like": like,
        "button-submit": submit,
        "button-radio": radio,
        "button-close": close,
        "button-delete": del,
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  type: PropTypes.string,
  edit: PropTypes.bool,
  add: PropTypes.bool,
  like: PropTypes.bool,
  submit: PropTypes.bool,
  radio: PropTypes.bool,
  close: PropTypes.bool,
  del: PropTypes.bool,
};
