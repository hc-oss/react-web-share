import { IconProps } from "interfaces";
import React, { CSSProperties } from "react";

import iconList from "./list";

const SocialIconStyle: CSSProperties = {
  width: "100%",
  height: "auto",
  cursor: "pointer",
  border: 0,
  background: "#1A78F6",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  fontSize: 0,
};

export default function Icon({ name, data, onClose }: IconProps) {
  const { path, viewBox = "0 0 24 24", color, e } = iconList[name];
  return (
    <button
      onClick={() => e(data.url, data.text, data.title) && onClose()}
      aria-label={name}
      style={{ ...SocialIconStyle, background: color }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox={viewBox}>
        {path}
      </svg>
    </button>
  );
}
