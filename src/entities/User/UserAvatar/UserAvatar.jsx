import React from "react";

import user_avatar from "@images/haru.jpg";
import "./styles.css";

export function UserAvatar() {
  return <img src={user_avatar} className="user__avatar" alt="avatar" />;
}
