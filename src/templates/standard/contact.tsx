import React from "react";
import { IPage } from "../../types/standard";
import { Layout, Loading } from "../../components/Layout";
import { AppCtx, IAppState, useContextState } from "../../components/contexted";
import { PageHeader } from "../../components/molecules";

interface ContactProps {
  pageContext: {
    page: IPage;
    personalInfo?: IPage[`acfContact`][`contact`];
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
