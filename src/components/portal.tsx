import React, { ReactPortal } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const PortalComponent: React.FC = ({ children }): ReactPortal => {
  const el = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return createPortal(children, el);
};

export default PortalComponent;
