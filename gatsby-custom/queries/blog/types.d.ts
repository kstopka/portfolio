import { IPost } from "../../../src/types/standard";

export interface IAllWpPost {
  allWpPost: {
    nodes: IPost[];
  };
}
