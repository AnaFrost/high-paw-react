import React, { FC } from "react";
import { UserAvatar } from "./userAvatar";
import { UserInfo } from "./userInfo";

import "./styles.css";

export const User: FC = () => {
  return (
    <div className="user">
      <UserAvatar />
      <UserInfo name="Jacques-Meow Coustou" bio="Bed explorer" />
    </div>
  );
};
