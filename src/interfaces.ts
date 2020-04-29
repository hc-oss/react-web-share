export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export interface RWebShareProps {
  children: any;
  data: ShareData;
  sites: string[];
}

export interface SocialIconsProps {
  onClose;
  sites: string[];
  data: ShareData;
}

export interface IconProps {
  onClose;
  name: string;
  data: ShareData;
}
