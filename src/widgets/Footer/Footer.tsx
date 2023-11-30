import React, { FC } from "react";

import { FooterEl, Copyright } from "./Footer.styled";

export const Footer: FC = () => {
  return (
    <FooterEl>
      <Copyright>&#169; 2022 High paw</Copyright>
    </FooterEl>
  );
};
