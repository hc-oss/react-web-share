# react-web-share

Tiny [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) wrapper with fallback for unsupported browsers

[![GitHub Actions Status](https://github.com/hc-oss/react-web-share/workflows/NodeJS/badge.svg)](https://github.com/hc-oss/react-web-share/actions)
[![NPM](https://img.shields.io/npm/v/react-web-share.svg)](https://npm.im/react-web-share)
[![gzip](https://badgen.net/bundlephobia/minzip/react-web-share@latest)](https://bundlephobia.com/result?p=react-web-share@latest)

[![Edit react-web-share](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-web-share-46skt)

> 💡 most browsers restricts web share api only to https websites

## ✨ Features

- 🍃 Only ~6kb gzipped and no external dependencies
- 🌀 Uses React Portal
- ✌ Written w/ TypeScript

## 🔧 Installation

```bash
npm i react-web-share    # npm
yarn add react-web-share # yarn
```

## Preview

### Mobile

![Mobile Preview](https://user-images.githubusercontent.com/5774849/188565874-177a6cc4-0521-4f14-8339-4c31f1476a5d.jpg)

### Desktop

![Desktop Preview](https://user-images.githubusercontent.com/5774849/188565984-5782d979-b57b-4b6d-9135-591f77ea8ee7.jpg)

## 📦 Example

```tsx
import React, { useState } from "react";
import { RWebShare } from "react-web-share";

const Example = () => {
  return (
    <div>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share 🔗</button>
      </RWebShare>
    </div>
  );
};

export default Example;
```

## 👀 Props

| Prop            | Description                 | Type                 | Default                                       |
| --------------- | --------------------------- | -------------------- | --------------------------------------------- |
| `data`          | Share Object                | `{text, url, title}` | `{text: "", url: currentURL, title: "Share"}` |
| `sites`         | sites                       | `string[]`           | all platforms (see list below for key list)   |
| `closeText`     | translate close             | `string`             | localise close text                           |
| `onClick`       | callback on sucessful share |                      |                                               |
| `disableNative` | disables native share       | `boolean`            | `false`                                       |

## 🌎 Sites

- facebook
- twitter
- whatsapp
- reddit
- telegram
- linkedin
- mail
- copy (Copy to Clipboard)
- vk
- okru

## 📜 License

MIT &copy; [harshzalavadiya](https://github.com/harshzalavadiya)
