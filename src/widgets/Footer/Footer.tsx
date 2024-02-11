import React, { FC } from "react";

import { Dropdown } from "@common/dropdown";

import { FooterEl, Copyright } from "./Footer.styled";

export const Footer: FC = () => {
  return (
    <FooterEl>
      <Dropdown />
      <Copyright>&#169; 2022 High paw</Copyright>
    </FooterEl>
  );
};
