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
              hero {
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
