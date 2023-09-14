import React, { FC } from "react";

import user_avatar from "@images/haru.jpg";

import "./styles.css";

export const UserAvatar: FC = () => {
  return <img src={user_avatar} className="user__avatar" alt="avatar" />;
};
