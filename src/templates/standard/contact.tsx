import React from "react";
import { IPage, PersonalInfo } from "../../types/standard";
import { AppCtx, IAppState, useContextState } from "../../components/contexted";
import { PageHeader, Loading } from "../../components/molecules";
import Layout from "../../components/Layout";

interface ContactProps {
  pageContext: {
    page: IPage;
    personalInfo: PersonalInfo;
  };
}

const ContactPage: React.FC<ContactProps> = ({ pageContext }) => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const title = pageContext.page.acfPageheader?.title;
  const { contact } = pageContext.page.acfContact;

  if (!pageContext || !language) return <Loading />;

  return (
    <Layout personalInfo={pageContext.personalInfo}>
      <PageHeader title={title[language]} />
      <p>{contact.country[language]}</p>
      <p>{contact.city[language]}</p>
    </Layout>
  );
};
export default ContactPage;
