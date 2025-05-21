import React from "react";
import { IPage } from "../../types/standard";
import { Layout, Loading } from "../../components/Layout";
import { AppCtx, IAppState, useContextState } from "../../components/contexted";

interface ContactProps {
  pageContext: {
    page: IPage;
  };
}

const ContactPage: React.FC<ContactProps> = ({ pageContext }) => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  const { contact } = pageContext.page.acfContact;

  if (!contact || !language) return <Loading />;

  return (
    <Layout>
      <p>{contact.country[language]}</p>
      <p>{contact.city[language]}</p>
    </Layout>
  );
};
export default ContactPage;
