import React, { FC } from "react";

import user_avatar from "@images/haru.jpg";

import { UserAvatarEl } from "../User.styled";

export const UserAvatar: FC = () => {
  return <UserAvatarEl src={user_avatar} alt="avatar" />;
};
