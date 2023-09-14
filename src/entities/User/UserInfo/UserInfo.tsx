import React from "react";

import { AddCardModal } from "@entities/addCardModal";
import { EditProfileModal } from "@entities/editProfileModal";

import "./styles.css";

interface IUserInfo {
  name: string;
  bio: string;
}

export const UserInfo: React.FC<IUserInfo> = ({ name, bio }) => {
  return (
    <>
      <div className="user__info">
        <div className="user__container">
          <div className="user__container-info">
            <span className="user__name">{name}</span>
            <p className="user__bio">{bio}</p>
          </div>
          <EditProfileModal />
        </div>
        <AddCardModal />
      </div>
    </>
  );
};
