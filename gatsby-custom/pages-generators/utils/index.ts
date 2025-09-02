import { IPage, PersonalInfo } from "../../../src/types/standard";
import { IPost } from "../../../src/types/blog";

class PagesGeneratorUtilsClass {
  getHomeProjects = (pages: IPage[], blogPosts: IPost[]): IPost[] => {
    const projects = blogPosts.filter((post) =>
      post.categories.nodes.find(
        (category) => category.parentId === "dGVybTozOA=="
      )
    );

    const homeProjectsIds = pages.find((page) => page.slug === "home")?.acfHome
      .homeProjects.nodes;

    if (!homeProjectsIds) {
      console.log(`homeProjectsIds is undefined`);
      return [];
    }

    const mapedHomeProjectsIds = homeProjectsIds.map(
      (homeProjectsId) => homeProjectsId.id
    );

    const homeProjects = projects.filter((project) =>
      mapedHomeProjectsIds.includes(project.id)
    );

    return homeProjects;
  };

  getPersonalInfo = (pages: IPage[]): PersonalInfo => {
    const mockPersonalInfo: PersonalInfo = {
      fullname: "Full Name",
      github: "github",
      linkedin: "linkedin",
      email: "none@email.com",
    };

    const contactPage = pages.find((el) => el.slug === `contact`);
    const personalInfo = contactPage?.acfContact?.contact;

    if (!personalInfo) return mockPersonalInfo;

    return {
      fullname: personalInfo.fullname,
      github: personalInfo.github,
      linkedin: personalInfo.linkedin,
      email: personalInfo.email,
    };
  };
}

const PagesGeneratorUtils = new PagesGeneratorUtilsClass();

export default PagesGeneratorUtils;
