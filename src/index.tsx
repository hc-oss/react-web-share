import { RWebShareProps } from "interfaces";
import React, { cloneElement } from "react";

import Backdrop from "./components/backdrop";
import iconList from "./components/icon/list";
import Portal from "./components/portal";
import SocialIcons from "./components/social-icons";
import useDisclosure from "./hooks/use-disclosure";

export const RWebShare = ({ children, data, sites = Object.keys(iconList) }: RWebShareProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const shareData = {
    title: "share",
    text: "",
    url: typeof window !== `undefined` ? window.location.href : undefined,
    ...data,
  };

  const handleOnClick = () => {
    if ((window as any).navigator.share) {
      (window as any).navigator.share(shareData).catch(console.error);
    } else {
      onOpen();
    }
  };

  return (
    <>
      {cloneElement(children, {
        ...children?.props,
        onClick: handleOnClick,
      })}
      {isOpen && (
        <Portal>
          <Backdrop onClose={onClose}>
            <SocialIcons onClose={onClose} sites={sites} data={shareData} />
          </Backdrop>
        </Portal>
      )}
    </>
  );
};
