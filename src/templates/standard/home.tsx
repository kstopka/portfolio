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
  const { aboutMe, hero } = pageContext.page.acfHome;
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
      <VerticalTimeline
        colourSettings={{ 10: "20", 20: "30", 30: "40" }}
        timelineContent={{
          title: "test Title",
          description: "test description",
          contents: [
            {
              title: "test title content 1",
              description: "test description 1",
              attributes: [
                { attributeName: "attributeName 1" },
                { attributeName: "attributeName 2" },
                { attributeName: "attributeName 3" },
                { attributeName: "attributeName 4" },
              ],
            },
            {
              title: "test title content 2",
              description: "test description 2",
              attributes: [
                { attributeName: "attributeName 1" },
                { attributeName: "attributeName 2" },
                { attributeName: "attributeName 3" },
                { attributeName: "attributeName 4" },
              ],
            },
            {
              title: "test title content 3",
              description: "test description 3",
              attributes: [
                { attributeName: "attributeName 1" },
                { attributeName: "attributeName 2" },
                { attributeName: "attributeName 3" },
                { attributeName: "attributeName 4" },
              ],
            },
          ],
        }}
      />
      <ContinuousSlider
        array={aboutMe.technologies}
        itemKey="technology"
        fullWidth
        id="about"
      />
      <HomeAbout aboutMe={aboutMe} />
    </Layout>
  );
};
export default HomePage;
