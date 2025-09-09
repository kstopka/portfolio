// gatsby-ssr.js
import React from "react";
import wrapRootElement from "./src/AllContextsWrapper";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="fonts" rel="stylesheet" href="/fonts.css" />,
    <link
      key="preload-cabin"
      rel="preload"
      as="font"
      type="font/ttf"
      href="/fonts/Cabin/Cabin-Regular.ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-livvic"
      rel="preload"
      as="font"
      type="font/ttf"
      href="/fonts/Livvic/Livvic-Regular.ttf"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-cabin-bold"
      rel="preload"
      as="font"
      type="font/woff2"
      href="/fonts/Cabin/Cabin-Bold.woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-livvic-bold"
      rel="preload"
      as="font"
      type="font/woff2"
      href="/fonts/Livvic/Livvic-Bold.woff2"
      crossOrigin="anonymous"
    />,
  ]);
};

export { wrapRootElement };
