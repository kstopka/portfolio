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
    description: TranslateItem;
  };
}
export interface IAcfContact {
  contact: {
    email: string;
    city: TranslateItem;
    country: TranslateItem;
  };
}
