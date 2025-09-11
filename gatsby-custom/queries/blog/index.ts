import { CreatePagesArgs } from "gatsby";
import { IAllWpPost } from "./types";

class BlogResourceClass {
  getPosts = async (graphql: CreatePagesArgs[`graphql`]) => {
    const {
      data,
    }: {
      errors?: any;
      data?: IAllWpPost;
    } = await graphql(`
      {
        allWpPost {
          nodes {
            id
            categories {
              nodes {
                id
                name
                parentId
              }
            }
            tags {
              nodes {
                id
                name
              }
            }
            acfProjects {
              title {
                pl
                en
              }
              description {
                pl
                en
              }
              role {
                pl
                en
              }
              link
            }
          }
        }
      }
    `);

    return data?.allWpPost.nodes;
  };
}

const BlogResource = new BlogResourceClass();

export default BlogResource;
