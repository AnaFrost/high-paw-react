import React from "react";
import { UserAvatar } from "./UserAvatar";
import { UserInfo } from "./UserInfo";

import "./styles.css";

export function User() {
  return (
    <div className="user">
      <UserAvatar />
      <UserInfo name="Jacques-Meow Coustou" bio="Bed explorer" />
    </div>
  );
}
