import React from "react";

export function Backdrop({ children, onClose }) {
  const handleOnClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <div onClick={handleOnClose} className="rws-backdrop web-share-fade">
      {children}
    </div>
  );
}
