import React from "react";
import "./styles.css";
import "./index.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};
