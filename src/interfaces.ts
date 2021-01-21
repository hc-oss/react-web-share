export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export interface RWebShareProps {
  children: any;
  closeText?: string;
  data: ShareData;
  sites: string[];
}

export interface SocialIconsProps {
  onClose;
  closeText?: string;
  sites: string[];
  data: Required<ShareData>;
}

export interface IconProps {
  onClose;
  name: string;
  data: Required<ShareData>;
}
