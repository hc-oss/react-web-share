import React, { CSSProperties } from "react";

const ShareHeader: CSSProperties = {
  padding: "1rem 1.25rem",
  fontSize: "1.25rem",
  fontWeight: 600,
  paddingBottom: 0,
};

export default function Header({ title }) {
  return <header style={ShareHeader}>{title}</header>;
}
