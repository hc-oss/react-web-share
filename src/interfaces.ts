import { ReactElement } from "react";

export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export interface RWebShareProps {
  children: ReactElement;
  closeText?: string;
  data: ShareData;
  sites?: Site[];
  onClick?: () => void;
  disableNative?: boolean;
}

export interface SocialIconsProps {
  onClose: IconProps["onClose"];
  closeText?: string;
  sites: Site[];
  data: Required<ShareData>;
  onClick?: IconProps["onClick"];
}

export interface IconProps {
  onClose: () => void;
  name: Site;
  data: Required<ShareData>;
  onClick?: (name: Site) => void;
}

export interface IconItem {
  path: JSX.Element;
  e: (url: string, text: string, title: string) => void;
  color: string;
  viewBox?: string;
}

export type Site =
  | "facebook"
  | "twitter"
  | "whatsapp"
  | "reddit"
  | "telegram"
  | "linkedin"
  | "mail"
  | "copy"
  | "vk"
  | "okru";
