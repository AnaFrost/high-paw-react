import React, { FC } from "react";
import { User } from "@entities/user";

import { UserProfileEl } from "./UserProfile.styled";

export const UserProfile: FC = () => {
  return (
    <UserProfileEl>
      <User />
    </UserProfileEl>
  );
};
