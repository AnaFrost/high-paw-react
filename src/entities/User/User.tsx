import React, { FC } from "react";
import { UserAvatar } from "./userAvatar";
import { UserInfo } from "./userInfo";

import { UserEl } from "./User.styled";

export const User: FC = () => {
  return (
    <UserEl>
      <UserAvatar />
      <UserInfo userName="Jacques-Meow Coustou" userBio="Bed explorer" />
    </UserEl>
  );
};
