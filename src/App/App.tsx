import React from "react";

import { Header } from "@widgets/header";
import { UserProfile } from "@widgets/userProfile";
import { Gallery } from "@widgets/gallery";
import { Footer } from "@widgets/footer";

import { AppEl } from "./App.styled";

export const App = () => {
  return (
    <AppEl>
      <Header />
      <UserProfile />
      <Gallery />
      <Footer />
    </AppEl>
  );
};
