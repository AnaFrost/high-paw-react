import React, { FC } from "react";

import "./styles.css";

interface IInput {
  placeholder: string;
  required: boolean;
  name: string;
  type: string;
}

export const Input: FC<IInput> = ({ placeholder, required, name, type }) => {
  return (
    <input
      className="input"
      autoComplete="off"
      placeholder={placeholder}
      required={required}
      name={name}
      type={type}
    />
  );
};
