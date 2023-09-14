import React, { FC } from "react";
import { User } from "@entities/user";

import "./styles.css";

export const UserProfile: FC = () => {
  return (
    <section className="user-profile">
      <User />
    </section>
  );
};
