import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    layout: {
      maxWidth: string;
      paddingX: string;
      paddingY: string;
      paddingXMobile: string;
      paddingYMobile: string;
      navigationHeight: string;
      sectionWrapperWidth: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fonts: {
      family: {
        main: string;
        w;
        secondary: string;
      };
      size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        body_20: string;
        small: string;
      };
    };
    transitions: {
      standard: string;
      time: string;
      type: string;
    };
    colors: {
      [key: string]: any;
    };
  }
}
