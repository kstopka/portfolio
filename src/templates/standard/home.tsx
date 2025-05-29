import React from "react";
import { IPage } from "../../types/standard";
import { Layout, Loading } from "../../components/Layout";
import Button from "../../components/atoms/Button";
import { useContextState, IAppState, AppCtx } from "../../components/contexted";
import { ColourPalette, Hero, PageHeader } from "../../components/molecules";

interface HomeProps {
  pageContext: {
    page: IPage;
  };
}

const HomePage: React.FC<HomeProps> = ({ pageContext }): JSX.Element => {
  const { hero } = pageContext.page.acfHome;
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  if (!hero || !language) return <Loading />;

  return (
    <Layout>
      {/* <ColourPalette /> */}
      <Hero
        title={hero.title[language]}
        fullname={hero.fullname}
        description={hero.description[language]}
        secendaryBackground
      />
    </Layout>
  );
};
export default HomePage;
