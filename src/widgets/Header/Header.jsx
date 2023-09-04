import React from "react";

import logo from "@images/icon-paw.svg";

import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">High paw</h1>
      <img src={logo} className="header__logo" alt="High Paw logo" />
    </header>
  );
}
