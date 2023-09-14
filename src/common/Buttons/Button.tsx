import React, { FC } from "react";
import clsx from "clsx";

import "./styles.css";

interface IButtonProps {
  children?: React.ReactNode | string;
  onClick?: () => void;
  edit?: boolean;
  add?: boolean;
  like?: boolean;
  submit?: boolean;
  close?: boolean;
  del?: boolean;
}

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  edit,
  add,
  like,
  submit,
  close,
  del,
}) => {
  return (
    <button
      className={clsx("button", {
        "button-edit-profile": edit,
        "button-add-card": add,
        "button-like": like,
        "button-submit": submit,
        "button-close": close,
        "button-delete": del,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
