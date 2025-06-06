import React from "react";
import { HeadFC, PageProps } from "gatsby";

import { useContextState, IAppState, AppCtx } from "../components/contexted";
import { navigate } from "gatsby";
import { URL_PATHS } from "../constants";
import Button from "../components/atoms/Button";
import Layout from "../components/Layout";

const TranslateNotFoundPage = {
  title: {
    pl: "Strona nie znaleziona",
    en: "Page not found",
  },
  description: {
    pl: "Nie znaleziono strony, która mogła by być wyświetlona. Kliknij aby wrócić do strony głównej.",
    en: "The page you are looking for could not be found. Click to go back to the home page.",
  },
};
const NotFoundPage: React.FC<PageProps> = () => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const { title, description } = TranslateNotFoundPage;

  return (
    <Layout>
      <h1>{title[language]}</h1>
      <p>{description[language]}</p>
      <Button
        onClick={() => navigate(URL_PATHS.home.path)}
        label={URL_PATHS.home[language]}
      ></Button>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
