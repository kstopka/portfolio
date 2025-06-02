import { Theme, Language } from "../../contexted/App/types";

type TranslateTheme = {
  [key in Theme]: {
    [lang in Language]: string;
  };
};

export const translateTheme: TranslateTheme = {
  dark: {
    pl: "ciemny",
    en: "dark",
  },
  light: {
    pl: "jasny",
    en: "light",
  },
};
