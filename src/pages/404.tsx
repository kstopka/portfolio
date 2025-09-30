import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/atoms/Button";
import { HeadFC, PageProps, navigate } from "gatsby";
import { useContextState, IAppState, AppCtx } from "../components/contexted";
import { URL_PATHS } from "../constants";
import { PersonalInfo } from "../types/standard";

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

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    fetch("/personalInfo.json")
      .then((res) => res.json())
      .then((data) => setPersonalInfo(data))
      .catch((err) => console.error("Failed to load personalInfo:", err));
  }, []);

  if (!personalInfo) return null;

  return (
    <Layout personalInfo={personalInfo}>
      <h1>{title[language]}</h1>
      <p>{description[language]}</p>
      <Button
        onClick={() => navigate(URL_PATHS.home.path)}
        label={URL_PATHS.home[language]}
      />
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
