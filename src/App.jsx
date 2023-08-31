import React from "react";
import { Header } from "@components/Header";
import { Profile } from "@features/Profile";
import { Gallery } from "@features/Gallery";
import { Footer } from "@components/Footer";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Gallery />
      <Footer />
    </div>
  );
};
