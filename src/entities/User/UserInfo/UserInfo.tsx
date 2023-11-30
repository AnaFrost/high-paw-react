import React from "react";

import { AddCardModal } from "@entities/addCardModal";
import { EditProfileModal } from "@entities/editProfileModal";

import {
  UserInfoEl,
  ContainerEl,
  ContainerInfoEl,
  UserNameEl,
  UserBioEl,
} from "../User.styled";

interface IUserInfo {
  userName: string;
  userBio: string;
}

export const UserInfo: React.FC<IUserInfo> = ({ userName, userBio }) => {
  return (
    <>
      <UserInfoEl>
        <ContainerEl>
          <ContainerInfoEl>
            <UserNameEl>{userName}</UserNameEl>
            <UserBioEl>{userBio}</UserBioEl>
          </ContainerInfoEl>
          <EditProfileModal />
        </ContainerEl>
        <AddCardModal />
      </UserInfoEl>
    </>
  );
};
