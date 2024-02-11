import React, { useState } from "react";

import {
  DropdownButton,
  DropdownContainer,
  DropdownMenu,
  UnorderedList,
  Link,
} from "./Dropdown.styled";

import { AdoptIcon } from "@icons";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleMenu}>
        <AdoptIcon />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          <span>Adopt centers</span>
          <UnorderedList>
            <li>
              <Link
                href="https://alkindom.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Алькин дом
              </Link>
            </li>
            <li>
              <Link
                href="https://vk.com/club138680271"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ковчег Надежды
              </Link>
            </li>
          </UnorderedList>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};
