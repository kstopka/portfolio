import { Language } from "../../components/contexted/App/types";

type TranslateItem = {
  pl: string;
  en: string;
};
export interface IPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  acfHome: IAcfHome;
  acfContact: IAcfContact;
}

export interface IAcfHome {
  hero: {
    title: TranslateItem;
    subtitle: TranslateItem;
    fullname: string;
    description: TranslateItem;
  };
}
export interface IAcfContact {
  contact: {
    fullname: string;
    telephone: string;
    email: string;
    github: string;
    linkedin: string;
    city: TranslateItem;
    country: TranslateItem;
  };
}
