import React, { FC, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ANIMATION_TIME } from "./const";
import "./styles.css";
import "./animation.css";
import { Button } from "@common/buttons";
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
    <div className="container">
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div ref={overlayRef} className="overlay">
          <Button close onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className="content">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
