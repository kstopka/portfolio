import { Language } from "../../components/contexted/App/types";

type TranslateItem = {
  pl: string;
  en: string;
};

export type TranslateContent = {
  [key: string]: TranslateItem;
};

export interface IPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  acfContact: IAcfContact;
  acfPageheader: IAcfPageheader;
  acfAboutme: IAcfAboutme;
}

export interface IAcfAboutme {
  bio: TranslateItem;
  hobby: {
    title: TranslateItem;
    description: TranslateItem;
    image: {
      node: {
        title: string;
        altText: string;
        sourceUrl: string;
      };
    };
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

export interface IAcfPageheader {
  title: TranslateItem;
  subtitle: TranslateItem;
  description: TranslateItem;
}
