import { Language } from "../../components/contexted/App/types";
import { TranslateItem } from "../common";

export type TranslateContent = {
  [key: string]: TranslateItem;
};

export type PersonalInfo = Pick<
  IPage[`acfContact`][`contact`],
  "fullname" | "github" | "linkedin" | "email"
>;

export interface IPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  acfContact: IAcfContact;
  acfPageheader: IAcfPageheader;
  acfAboutme: IAcfAboutme;
  acfHome: IAcfHome;
}

export interface TabContent {
  title: TranslateItem;
  description: TranslateItem;
}

export interface TimelineContent {
  title: TranslateItem;
  description: TranslateItem;
  contents: ContentItem[];
}

export interface ContentItem {
  content: {
    title: TranslateItem;
    description: TranslateItem;
    attributes: Attribute[];
  };
}

export interface Attribute {
  attributeName: TranslateItem;
}

export interface FaqTab {
  title: TranslateItem;
  description: TranslateItem;
}
export interface FaqContent {
  title: TranslateItem;
  description: TranslateItem;
  content: FaqTab[];
}

export interface IAcfHome {
  homeProjects: {
    nodes: { id: strinf }[];
  };
  faq: {
    title: TranslateItem;
    description: TranslateItem;
    contents: FaqContent[];
  };
  experience: TimelineContent;
  aboutMe: {
    technologies: { technology: string }[];
    content: {
      title: TranslateItem;
      personally: TranslateItem;
      professionally: TabContent[];
    };
  };
  hero: {
    prefix: TranslateItem;
    roles: {
      role: string;
    }[];
  };
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
