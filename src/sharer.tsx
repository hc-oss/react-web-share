import "./style.css";

import React, { cloneElement, memo, useCallback, useMemo } from "react";

import { Backdrop } from "./components/backdrop";
import { IconList } from "./components/icon/list";
import Icon from "./components/icon";
import { Portal } from "./components/portal";
import { SocialIcons } from "./components/social-icons";
import { useDisclosure } from "./hooks/use-disclosure";
import type { RWebShareProps } from "./interfaces";

const defaultSites = Object.keys(IconList).slice(0, 8);

export const RWebShare = memo((props: RWebShareProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { styledComp, children, ...rest } = props;

  const shareData = useMemo(
    () => ({
      ...props.data,
      title: props.data.title || "share",
      text: props.data.text || "",
      url:
        props.data.url ||
        (typeof window !== "undefined" && window.location.href) ||
        "",
    }),
    [props.data]
  );

  const handleOnClick = useCallback(async () => {
    if (window.navigator.share && !props.disableNative) {
      try {
        await window.navigator.share(shareData);
        props.onClick();
      } catch (e) {
        console.warn(e);
      }
    } else {
      onOpen();
    }
  }, [shareData]);

  const renderShareComponent = useCallback(() => {
    if (!styledComp)
      return (
        <Portal>
          <Backdrop onClose={onClose}>
            <SocialIcons
              onClose={onClose}
              sites={props.sites || defaultSites}
              data={shareData}
              closeText={props.closeText}
              onClick={props.onClick}
            />
          </Backdrop>
        </Portal>
      );
    return cloneElement(styledComp, {
      ...rest,
      sites: props.sites || defaultSites,
      Icon,
    });
  }, [styledComp]);

  return (
    <>
      {/* Overrides Children element's `onClick` event */}
      {cloneElement(props.children, {
        ...props.children?.props,
        onClick: handleOnClick,
      })}

      {/* Share Component */}
      {isOpen && renderShareComponent()}
    </>
  );
});
