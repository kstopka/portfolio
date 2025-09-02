import { Actions } from "gatsby";

import * as path from "path";
import { slash } from "gatsby-core-utils";
import { IPage, PersonalInfo } from "../../../src/types/standard";
import { IPorject } from "../../../src/types/blog";

class StandardPagesGeneratorClass {
  simplePage = (
    createPage: Actions["createPage"],
    page: IPage,
    projects: IPorject[],
    personalInfo: PersonalInfo
  ) => {
    const { slug } = page;
    const pagePath = path.resolve(`./src/templates/standard/${slug}.tsx`);
    const isHome = slug === `home`;

    createPage({
      path: isHome ? "/" : `/${slug}`,
      component: slash(pagePath),
      context: {
        page,
        personalInfo,
        projects: isHome ? projects : [],
      },
    });
  };
}

const StandardPagesGenerator = new StandardPagesGeneratorClass();

export default StandardPagesGenerator;
