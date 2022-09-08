import React from "react";

interface CloseButtonProps {
  onClose;
  closeText?: string;
}

export function CloseButton({ onClose, closeText }: CloseButtonProps) {
  return (
    <button
      className="rws-close"
      aria-label="Close"
      type="button"
      onClick={onClose}
    >
      {closeText || "Close"}
    </button>
  );
}
