import React, { FC, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ANIMATION_TIME } from "./const";

import "./animation.css";
import { InvisibleButtonEl, CloseButtonEl } from "@common/buttons";
import { Container, Overlay, Content } from "./Layout.styled";
import { CloseIcon } from "@icons";

const overlayAnimation = {
  enter: "overlayEnter",
  enterActive: "overlayEnterActive",
  exit: "overlayExit",
  exitActive: "overlayExitActive",
};

const contentAnimation = {
  enter: "contentEnter",
  enterActive: "contentEnterActive",
  exit: "contentExit",
  exitActive: "contentExitActive",
};

interface ILayout {
  onClose: () => void;
  children: React.ReactNode;
  opened: boolean;
}

export const Layout: FC<ILayout> = ({ onClose, children, opened }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <Container>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <InvisibleButtonEl onClick={onClose}>
          <Overlay ref={overlayRef} />
        </InvisibleButtonEl>
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <Content ref={contentRef}>
          <>
            <CloseButtonEl onClick={onClose}>
              <CloseIcon />
            </CloseButtonEl>
            {children}
          </>
        </Content>
      </CSSTransition>
    </Container>
  );
};
