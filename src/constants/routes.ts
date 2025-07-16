// INFO: URL_PATHS
const URL_PATHS = {
  home: { pl: "Strona Główna", en: "Home", path: "/" },
  about: { pl: "O mnie", en: "About Me", path: "#about" },
  contact: { pl: "Kontakt", en: "Contact", path: "#contact" },
};

const URL_PATHS_Arr = Object.entries(URL_PATHS).map(([key, value]) => ({
  ...value,
  key,
}));

export { URL_PATHS, URL_PATHS_Arr };
