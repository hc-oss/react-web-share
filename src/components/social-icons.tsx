import { SocialIconsProps } from "interfaces";
import React, { CSSProperties } from "react";

import CloseButton from "./close";
import Header from "./header";
import Icon from "./icon";

const IconsContainer = {
  maxWidth: "24rem",
  width: "90%",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
};

const IconsLisStyle: CSSProperties = {
  padding: "1.25rem",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1.25rem",
};

export default function SocialIcons({ onClose, sites, data }: SocialIconsProps) {
  return (
    <section
      role="dialog"
      aria-modal="true"
      className="web-share-fade-in-up"
      style={IconsContainer}
    >
      <Header title={data.title} />
      <div style={IconsLisStyle}>
        {sites.map(name => (
          <Icon name={name} key={name} data={data} onClose={onClose} />
        ))}
      </div>
      <CloseButton onClose={onClose} />
    </section>
  );
}
