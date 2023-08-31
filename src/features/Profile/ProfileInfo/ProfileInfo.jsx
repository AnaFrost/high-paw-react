import React from "react";
import { ProfileAvatar } from "./ProfileAvatar";
import { UserInfo } from "./UserInfo";

import "./styles.css";

export function ProfileInfo() {
  return (
    <div className="profile__info">
      <ProfileAvatar />
      <UserInfo name="Jacques-Meow Coustou" bio="Bed explorer" />
    </div>
  );
}
