import { GatsbyNode } from "gatsby";
import {
  StandardResource,
  StandardPagesGenerator,
  BlogResource,
} from "./gatsby-custom";
import { IPage } from "./src/types/standard";
import { IPost } from "./src/types/blog";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const pages: IPage[] | undefined = await StandardResource.getPages(graphql);
  const blogPosts: IPost[] | undefined = await BlogResource.getPosts(graphql);

  if (!pages) return console.log(`pages undefined in create page`);
  if (!blogPosts) return console.log(`blogPosts undefined in create page`);

  // Create homoePorjects

  // Create personal info
  const contactPage = pages.find((el) => el.slug === `contact`);
  const personalInfo = contactPage?.acfContact?.contact;

  // Create to Single pages
  pages.forEach(({ slug }) =>
    StandardPagesGenerator.simplePage(createPage, pages, slug, personalInfo)
  );
};
