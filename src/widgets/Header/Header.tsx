import React, { FC, useState, useEffect } from "react";

import { Container } from "@common/container";
import { SunIcon, MoonIcon, LogoIcon } from "@icons";

import {
  HeaderEl,
  ThemeSwitcher,
  Title,
  Wrapper,
  WrapperLogoTitle,
} from "./Header.styled";

export const Header: FC = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <WrapperLogoTitle>
            <Title>High paw</Title>
            {<LogoIcon />}
          </WrapperLogoTitle>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            <span style={{ marginLeft: "8px" }}>{theme} Theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
