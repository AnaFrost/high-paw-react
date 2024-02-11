import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
  transition: 0.3s opacity ease-in;
`;

export const DropdownMenu = styled.menu`
  background-color: var(--colors-bg);
  color: var(--colors-text);
  width: 300px;
  display: none;
  position: absolute;
  left: 64px;
  padding: 0;
  margin: 0;
  z-index: 1;

  ${DropdownContainer}:hover & {
    display: inline-block;
    opacity: 1;
  }
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  transition: 0.3s opacity ease-in;

  &:hover {
    opacity: 0.6;
    transition: 0.3s opacity ease-in;
  }
`;

export const UnorderedList = styled.ul`
  cursor: pointer;
  list-style-type: none;
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--colors-text);
  transition: 0.3s opacity ease-in;

  &:hover {
    opacity: 0.3;
    transition: 0.3s opacity ease-in;
  }
`;
