import React, { CSSProperties } from "react";

const CloseStyle: CSSProperties = {
  background: "#edf2f7",
  cursor: "pointer",
  padding: "0.75rem",
  display: "block",
  width: "100%",
  border: 0,
  fontSize: "1rem",
};

export default function CloseButton({ onClose }) {
  return (
    <button style={CloseStyle} aria-label="Close" type="button" onClick={onClose}>
      Close
    </button>
  );
}
