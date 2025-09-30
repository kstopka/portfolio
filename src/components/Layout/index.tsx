import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import * as S from "./styles";

import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { AppCtx, useContextState } from "../contexted";
import { IAppState } from "../contexted/App/types";
import { GlobalStyles } from "../../styles/global";
import { Head, Loading, Navbar } from "../molecules";
import { Footer } from "../molecules";
import { PersonalInfo } from "../../types/standard";

interface ILayout {
  children: React.ReactNode;
  personalInfo?: PersonalInfo;
}

const Layout: React.FC<ILayout> = ({
  children,
  personalInfo: propsPersonalInfo,
}): JSX.Element => {
  const location = useLocation();
  const { theme: themeValue } = useContextState<IAppState>(AppCtx, ["theme"]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(
    propsPersonalInfo || null
  );

  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setNavClass("nav-hidden");
      } else if (currentScrollY < lastScrollY) {
        setNavClass("");
      } else {
        setNavClass("");
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!personalInfo) {
      fetch("/personalInfo.json")
        .then((res) => res.json())
        .then((data) => setPersonalInfo(data))
        .catch((err) => console.error("Failed to load personalInfo:", err));
    }
  }, []);

  if (!personalInfo) return <Loading />;

  return (
    <ThemeProvider theme={theme[themeValue]}>
      <GlobalStyles />
      <S.Layout>
        <Head />
        <Navbar className={navClass} />
        <S.Main>{children}</S.Main>
        <Footer personalInfo={personalInfo} />
      </S.Layout>
    </ThemeProvider>
  );
};

export default Layout;
