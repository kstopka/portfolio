import { GatsbyNode } from "gatsby";
import { StandardResource, StandardPagesGenerator } from "./gatsby-custom";
import { IPage } from "./src/types/standard";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const pages: IPage[] | undefined = await StandardResource.getPages(graphql);

  if (!pages) return console.log(`pages undefined in create page`);

  // Create personal info
  const contactPage = pages.find((el) => el.slug === `contact`);
  const personalInfo = contactPage?.acfContact?.contact;

  // Create to Single pages
  pages.forEach(({ slug }) =>
    StandardPagesGenerator.simplePage(createPage, pages, slug, personalInfo)
  );
};
