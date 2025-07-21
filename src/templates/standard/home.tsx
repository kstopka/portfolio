import React, { useEffect } from "react";
import { IPage } from "../../types/standard";
import Button from "../../components/atoms/Button";
import { useContextState, IAppState, AppCtx } from "../../components/contexted";
import {
  ColourPalette,
  Hero,
  HomeAbout,
  PageHeader,
  Loading,
  ContinuousSlider,
  VerticalTimeline,
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
  const { aboutMe, hero, experience } = pageContext.page.acfHome;
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  if (!pageContext || !language) return <Loading />;

  return (
    <Layout personalInfo={pageContext.personalInfo}>
      {/* <ColourPalette /> */}
      <Hero
        fullname={fullname}
        github={github}
        linkedin={linkedin}
        hero={hero}
        secendaryBackground
        fullWidth
      />
      <ContinuousSlider
        array={aboutMe.technologies}
        itemKey="technology"
        fullWidth
        id="about"
      />
      <HomeAbout aboutMe={aboutMe} />
      <VerticalTimeline timelineContent={experience} />
    </Layout>
  );
};
export default HomePage;
