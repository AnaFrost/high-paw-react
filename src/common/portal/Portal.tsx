import { useEffect, useState, FC } from "react";
import ReactDOM from "react-dom";

interface IPortal {
  children: JSX.Element;
}

export const Portal: FC<IPortal> = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};
