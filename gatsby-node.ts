import * as fs from "fs";
import * as path from "path";
import { GatsbyNode } from "gatsby";
import {
  StandardResource,
  StandardPagesGenerator,
  BlogResource,
  PagesGeneratorUtils,
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

  // Get Home Projects
  const homeProjects = PagesGeneratorUtils.getHomeProjects(pages, blogPosts);

  // Create personal info
  const personalInfo = PagesGeneratorUtils.getPersonalInfo(pages);

  // Save info to static/personalInfo.json
  const filePath = path.resolve("./static/personalInfo.json");
  fs.writeFileSync(filePath, JSON.stringify(personalInfo, null, 2));

  // Create to Single pages
  pages.forEach((page) =>
    StandardPagesGenerator.simplePage(
      createPage,
      page,
      homeProjects,
      personalInfo
    )
  );
};
