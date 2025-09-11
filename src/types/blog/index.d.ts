import { TranslateItem } from "../common";

export interface IPost {
  id: string;
  categories: {
    nodes: ICategory[];
  };
  tags: {
    nodes: ITag[];
  };
  acfProjects: IAcfProjects;
}
export interface IAcfProjects {
  title: TranslateItem;
  description: TranslateItem;
  role: TranslateItem;
  link?: string;
}
export type IPorject = IPost;

export interface ICategory {
  id: string;
  name: string;
  parentId: string;
}
export interface ITag {
  id: string;
  name: string;
}
