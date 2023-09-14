import React, { FC } from "react";
import { SubmitButton } from "@common/buttons";

import "./styles.css";

interface IForm {
  formName: string;
  children: React.ReactNode;
}

export const Form: FC<IForm> = ({ formName, children }) => {
  return (
    <form className="form">
      <span className="form__title">{formName}</span>
      {children}
      <SubmitButton />
    </form>
  );
};
