import React from "react";
import { createPortal } from "react-dom";

export const Portal: any = ({ children }: any) => {
  const el = document.createElement("div");

  React.useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return createPortal(children, el);
};
