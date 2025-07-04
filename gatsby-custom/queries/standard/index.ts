import { CreatePagesArgs } from "gatsby";
import { IAllWpPage } from "./types";

class StandardResourceClass {
  getPages = async (graphql: CreatePagesArgs[`graphql`]) => {
    const {
      data,
    }: {
      errors?: any;
      data?: IAllWpPage;
    } = await graphql(`
      {
        allWpPage {
          nodes {
            id
            slug
            title
            content
            acfHome {
              aboutMe {
                technologies {
                  technology
                }
              }
            }
            acfAboutme {
              bio {
                pl
                en
              }
              hobby {
                title {
                  pl
                  en
                }
                description {
                  pl
                  en
                }
                image {
                  node {
                    title
                    altText
                    sourceUrl
                  }
                }
              }
            }
            acfPageheader {
              title {
                pl
                en
              }
              subtitle {
                pl
                en
              }
              description {
                pl
                en
              }
            }
            acfContact {
              contact {
                fullname
                email
                telephone
                github
                linkedin
                city {
                  pl
                  en
                }
                country {
                  pl
                  en
                }
              }
            }
          }
        }
      }
    `);

    return data?.allWpPage.nodes;
  };
}

const StandardResource = new StandardResourceClass();

export default StandardResource;
