import React from "react";
import { IPage } from "../../types/standard";
import Button from "../../components/atoms/Button";
import { useContextState, IAppState, AppCtx } from "../../components/contexted";
import {
  ColourPalette,
  Hero,
  HomeAbout,
  PageHeader,
  Loading,
} from "../../components/molecules";
import Layout from "../../components/Layout";

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
  fullname: "Full Name",
  github: "github",
  linkedin: "linkedin",
};

const HomePage: React.FC<HomeProps> = ({ pageContext }): JSX.Element => {
  const { fullname, github, linkedin } =
    pageContext.personalInfo || mockPersonalInfo;
  const { title, description } = pageContext.page.acfPageheader;
  const { aboutMe } = pageContext.page.acfHome;
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  if (!pageContext || !language) return <Loading />;

  return (
    <Layout personalInfo={pageContext.personalInfo}>
      {/* <ColourPalette /> */}
      <Hero
        title={title[language]}
        fullname={fullname}
        github={github}
        linkedin={linkedin}
        description={description[language]}
        secendaryBackground
      />
      <HomeAbout aboutMe={aboutMe} />
    </Layout>
  );
};
export default HomePage;
