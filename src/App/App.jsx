import React from "react";
import { Header } from "@widgets/Header";
import { UserProfile } from "@widgets/UserProfile";
import { Gallery } from "@widgets/Gallery";
import { Footer } from "@widgets/Footer";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <UserProfile />
      <Gallery />
      <Footer />
    </div>
  );
};
