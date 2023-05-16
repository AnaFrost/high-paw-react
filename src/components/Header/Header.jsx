import React from "react";
import "./styles.css";

export const Header = () => {
  return (
    <div className="header">
      <header className="header__title">High paw</header>
      <img src="/image/icon-paw.svg" className="header__logo" alt="Логотип High Paw" />
    </div>
  );
};
