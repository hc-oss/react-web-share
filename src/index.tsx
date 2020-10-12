import { RWebShareProps } from "interfaces";
import React, { cloneElement, useMemo } from "react";

import Backdrop from "./components/backdrop";
import iconList from "./components/icon/list";
import Portal from "./components/portal";
import SocialIcons from "./components/social-icons";
import useDisclosure from "./hooks/use-disclosure";

export const RWebShare = ({ children, data, sites = Object.keys(iconList) }: RWebShareProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const shareData = useMemo(
    () => ({
      ...data,
      title: data.title || "share",
      text: data.text || "",
      url: encodeURIComponent(data.url || window?.location?.href || ""),
    }),
    [data]
  );

  const handleOnClick = () => {
    try {
      window.navigator.share(shareData);
    } catch (e) {
      console.warn(e);
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
