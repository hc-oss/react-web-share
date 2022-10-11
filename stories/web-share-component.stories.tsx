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
        url: "https://on.natgeo.com/2zHaNup",
        title: "Flamingos",
      }}
      onClick={(name) => console.log(`${name} share successful!`)}
    >
      <button>Share 🔗</button>
    </RWebShare>
  </div>
);
