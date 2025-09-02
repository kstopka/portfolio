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
              homeProjects {
                nodes {
                  id
                }
              }
              faq {
                title {
                  pl
                  en
                }
                description {
                  pl
                  en
                }
                contents {
                  title {
                    pl
                    en
                  }
                  description {
                    pl
                    en
                  }
                  content {
                    title {
                      pl
                      en
                    }
                    description {
                      pl
                      en
                    }
                  }
                }
              }
              experience {
                title {
                  pl
                  en
                }
                description {
                  pl
                  en
                }
                contents {
                  content {
                    title {
                      pl
                      en
                    }
                    description {
                      pl
                      en
                    }
                    attributes {
                      attributeName {
                        pl
                        en
                      }
                    }
                  }
                }
              }
              aboutMe {
                content {
                  title {
                    pl
                    en
                  }
                  personally {
                    pl
                    en
                  }
                  professionally {
                    title {
                      pl
                      en
                    }
                    description {
                      pl
                      en
                    }
                  }
                }
                technologies {
                  technology
                }
              }
              hero {
                prefix {
                  pl
                  en
                }
                roles {
                  role
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
