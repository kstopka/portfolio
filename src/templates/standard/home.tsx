import React, { useEffect } from "react";
import { IPage, PersonalInfo } from "../../types/standard";
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
  Faq,
} from "../../components/molecules";
import Layout from "../../components/Layout";

interface HomeProps {
  pageContext: {
    page: IPage;
    personalInfo: PersonalInfo;
  };
}

const HomePage: React.FC<HomeProps> = ({ pageContext }): JSX.Element => {
  const { fullname, github, linkedin } = pageContext.personalInfo;
  const { aboutMe, hero, experience, faq } = pageContext.page.acfHome;

  if (!pageContext) return <Loading />;
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
      <Faq faq={faq} />
    </Layout>
  );
};
export default HomePage;
