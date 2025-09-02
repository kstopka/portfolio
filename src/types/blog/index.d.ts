import { TranslateItem } from "../common";

export interface IPost {
  id: string;
  categories: {
    nodes: ICategory[];
  };
  tags: {
    nodes: ITag[];
  };
  acfProjects: {
    title: TranslateItem;
    description: TranslateItem;
  };
}

export interface ICategory {
  id: string;
  name: string;
  parentId: string;
}
export interface ITag {
  id: string;
  name: string;
}
