import React from "react";
import PropTypes from "prop-types";

import { EditButton, AddCardButton } from "@common/Buttons";

import "./styles.css";

export function UserInfo({ name, bio }) {
  return (
    <div className="user__info">
      <div className="user__container">
        <div className="user__container-info">
          <span className="user__name">{name}</span>
          <p className="user__bio">{bio}</p>
        </div>
        <EditButton />
      </div>
      <AddCardButton />
    </div>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
};
