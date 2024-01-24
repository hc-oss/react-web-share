export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export interface RWebShareProps {
  children: any;
  closeText?: string | JSX.Element;
  data: ShareData;
  sites?: string[];
  onClick?;
  disableNative?;
  dark?: boolean;
  scrollable?: boolean;
}

export interface SocialIconsProps {
  onClose;
  closeText?: string | JSX.Element;
  sites: string[];
  data: Required<ShareData>;
  onClick?;
  dark?: boolean;
  scrollable?: boolean;
}

export interface IconProps {
  onClose;
  name: string;
  data: Required<ShareData>;
  onClick?;
  dark?: boolean;
}

export interface IconItem {
  path: JSX.Element;
  e;
  color: string;
  viewBox?: string;
}
