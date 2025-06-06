import React from "react";
import { IPage } from "../../types/standard";
import { useContextState, IAppState, AppCtx } from "../../components/contexted";
import { PageHeader, Loading } from "../../components/molecules";
import Layout from "../../components/Layout";

interface AboutMeProps {
  pageContext: {
    page: IPage;
    personalInfo?: IPage[`acfContact`][`contact`];
  };
}

const mockPersonalInfo: Pick<IPage[`acfContact`][`contact`], "fullname"> = {
  fullname: "Full Name",
};

const AboutMe: React.FC<AboutMeProps> = ({ pageContext }): JSX.Element => {
  const { fullname } = pageContext.personalInfo || mockPersonalInfo;
  const title = pageContext.page.acfPageheader?.title;
  const bio = pageContext.page.acfAboutme?.bio;
  const hobby = pageContext.page.acfAboutme?.hobby;
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  if (!pageContext || !language) return <Loading />;

  return (
    <Layout personalInfo={pageContext.personalInfo}>
      <PageHeader title={title[language]} />
    </Layout>
  );
};
export default AboutMe;
