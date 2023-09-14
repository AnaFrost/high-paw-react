import React, { FC } from "react";

import "../styles.css";

interface IRadioInput {
  labelText: string;
  value: string;
  name: string;
  id: string;
}

export const RadioInput: FC<IRadioInput> = ({ labelText, value, name, id }) => {
  return (
    <>
      <input
        className="input-radio"
        type="radio"
        value={value}
        name={name}
        id={id}
      />
      <label htmlFor={id} className="label-text">
        {labelText}
      </label>
    </>
  );
};
