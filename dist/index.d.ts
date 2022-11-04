import React from 'react';

interface ShareData {
    text?: string;
    title?: string;
    url?: string;
}
interface RWebShareProps {
    children: any;
    closeText?: string;
    data: ShareData;
    sites?: string[];
    onClick?: any;
    disableNative?: any;
    styledComp?: JSX.Element;
}

declare const RWebShare: React.MemoExoticComponent<(props: RWebShareProps) => JSX.Element>;

export { RWebShare, RWebShareProps };
