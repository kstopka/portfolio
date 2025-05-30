import React from "react";
import { IPage } from "../../types/standard";
import { Layout, Loading } from "../../components/Layout";
import Button from "../../components/atoms/Button";
import { useContextState, IAppState, AppCtx } from "../../components/contexted";
import { ColourPalette, Hero, PageHeader } from "../../components/molecules";

interface HomeProps {
  pageContext: {
    page: IPage;
    personalInfo?: IPage[`acfContact`][`contact`];
  };
}

const mockPersonalInfo: Pick<
  IPage[`acfContact`][`contact`],
  "fullname" | "github" | "linkedin"
> = {
  fullname: "Full NAme",
  github: "github",
  linkedin: "linkedin",
};

const HomePage: React.FC<HomeProps> = ({ pageContext }): JSX.Element => {
  const { fullname, github, linkedin } =
    pageContext.personalInfo || mockPersonalInfo;
  const { hero } = pageContext.page.acfHome;
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  if (!hero || !language) return <Loading />;

  return (
    <Layout>
      {/* <ColourPalette /> */}
      <Hero
        title={hero.title[language]}
        fullname={fullname}
        github={github}
        linkedin={linkedin}
        description={hero.description[language]}
        secendaryBackground
      />
    </Layout>
  );
};
export default HomePage;
