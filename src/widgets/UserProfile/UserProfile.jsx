import React from "react";
import { User } from "@entities/User";

import "./styles.css";

export function UserProfile() {
  return (
    <section className="user-profile">
      <User />
    </section>
  );
}
