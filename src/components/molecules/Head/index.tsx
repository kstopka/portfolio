import React from "react";
import Helmet from "react-helmet";
import { useContextState, IAppState, AppCtx } from "../../contexted";

interface HeadProps {}

const Head: React.FC<HeadProps> = () => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  return (
    <Helmet
      htmlAttributes={{
        lang: language || "pl",
      }}
      title={"Frontend Developer | React | Javascript | TypeScript"}
    >
      {/* DESCRIPTION */}
      <meta
        name="description"
        content="Portfolio Frontend Developera specjalizującego się w React, JavaScript i TypeScript."
      />
      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
};

export default Head;
