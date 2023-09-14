import React from "react";
import { Header } from "@widgets/header";
import { UserProfile } from "@widgets/userProfile";
import { Gallery } from "@widgets/gallery";
import { Footer } from "@widgets/footer";

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
