import styled from "styled-components";

export const EditProfileButtonEl = styled.button`
  cursor: pointer;
  border: 2px solid;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  padding: 0;
  color: var(--colors-text);
  background-color: transparent;
  transition: 0.3s opacity ease-in;

  &:hover {
    opacity: 0.6;
    transition: 0.3s opacity ease-in;
  }
`;

export const AddCardButtonEl = styled.button`
  border: 2px solid;
  border-radius: 4px;
  width: 150px;
  height: 50px;
  color: var(--colors-text);
  background-color: transparent;
  transition: 0.3s opacity ease-in;

  &:hover {
    opacity: 0.6;
    transition: 0.3s opacity ease-in;
  }
`;

export const LikeButtonEl = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: 0.3s transform ease-in;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s transform ease-in;
  }
`;

export const CloseButtonEl = styled.button`
  border: none;
  background-color: transparent;
  transition: 0.3s opacity ease-in;

  &:hover {
    opacity: 0.6;
    transition: 0.3s opacity ease-in;
  }
`;

export const DeleteButtonEl = styled.button`
  cursor: pointer;
  color: var(--colors-text);
  background-color: transparent;
  border: none;
  transition: 0.3s all ease-in;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s transform ease-in;
  }
`;

export const InvisibleButtonEl = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  transition: 0.3s all ease-in;

  &:hover {
    opacity: 0.6;
    transition: 0.3s opacity ease-in;
  }
`;
