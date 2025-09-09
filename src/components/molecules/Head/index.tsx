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
      <meta
        name="description"
        content="Portfolio Frontend Developera specjalizującego się w React, JavaScript i TypeScript."
      />
    </Helmet>
  );
};

export default Head;
