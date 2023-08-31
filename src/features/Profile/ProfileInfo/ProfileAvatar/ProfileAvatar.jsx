import React from "react";

import profile_avatar from "@images/haru.jpg";
import "./styles.css";

export function ProfileAvatar() {
  return <img src={profile_avatar} className="profile__avatar" alt="avatar" />;
}
