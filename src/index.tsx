import { RWebShareProps } from "./interfaces";
import React, { cloneElement, useMemo } from "react";

import Backdrop from "./components/backdrop";
import iconList from "./components/icon/list";
import Portal from "./components/portal";
import SocialIcons from "./components/social-icons";
import useDisclosure from "./hooks/use-disclosure";

const defaultSites = Object.keys(iconList).slice(0, 8);

export const RWebShare = ({
  children,
  closeText,
  data,
  onClick,
  sites = defaultSites,
}: RWebShareProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const shareData = useMemo(
    () => ({
      ...data,
      title: data.title || "share",
      text: data.text || "",
      url: data.url || (typeof window !== "undefined" && window.location.href) || "",
    }),
    [data]
  );

  const handleOnClick = async () => {
    if (window.navigator.share) {
      try {
        await window.navigator.share(shareData);
        onClick();
      } catch (e) {
        console.warn(e);
      }
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
            <SocialIcons
              onClose={onClose}
              sites={sites}
              data={shareData}
              closeText={closeText}
              onClick={onClick}
            />
          </Backdrop>
        </Portal>
      )}
    </>
  );
};
