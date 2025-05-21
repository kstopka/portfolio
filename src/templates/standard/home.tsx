import React from "react";
import { IPage } from "../../types/standard";
import { Layout, Loading } from "../../components/Layout";
import Button from "../../components/atoms/Button";
import { useContextState, IAppState, AppCtx } from "../../components/contexted";

interface HomeProps {
  pageContext: {
    page: IPage;
  };
}

const HomePage: React.FC<HomeProps> = ({ pageContext }: HomeProps) => {
  const { hero } = pageContext.page.acfHome;
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  if (!hero || !language) return <Loading />;

  return (
    <Layout>
      <h1>{hero.title[language]}</h1>
      <div dangerouslySetInnerHTML={{ __html: hero.description[language] }} />
      <Button
        onClick={() => console.log("test")}
        label="Test"
        type="submit"
      ></Button>
    </Layout>
  );
};
export default HomePage;
