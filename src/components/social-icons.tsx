import React from "react";

import { SocialIconsProps } from "../interfaces";
import { CloseButton } from "./close";
import { Header } from "./header";
import Icon from "./icon";

export const SocialIcons = ({
  onClose,
  sites,
  data,
  closeText,
  onClick,
  dark,
  scrollable = false,
}: SocialIconsProps) => (
  <section
    role="dialog"
    aria-modal="true"
    className="rws-container web-share-fade-in-up"
  >
    <Header title={data.title} />
    <div className={`${scrollable ? "rws-icons-scroll" : "rws-icons"}`}>
      {sites.map((name) => (
        <Icon
          name={name}
          key={name}
          data={data}
          onClose={onClose}
          onClick={onClick}
          dark={dark}
        />
      ))}
    </div>
    <CloseButton onClose={onClose} closeText={closeText} />
  </section>
);
