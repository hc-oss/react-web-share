import React from "react";

import { RWebShare } from "../src";

export default {
  title: "Welcome",
};

export const Default = () => (
  <div>
    <style children="*{font-family: sans-serif}" />
    <RWebShare
      data={{
        text: "Like humans, flamingos make friends for life",
        url: "https://bit.ly/2UWTnlL",
        title: "Flamingos",
      }}
    >
      <button>Share 🔗</button>
    </RWebShare>
  </div>
);
