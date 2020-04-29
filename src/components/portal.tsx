import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const el = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return createPortal(children, el);
}
