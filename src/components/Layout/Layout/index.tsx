import React from "react";
import { useLocation } from "@reach/router";
import * as S from "./styles";

import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { AppCtx, useContextState } from "../../contexted";
import { IAppState } from "../../contexted/App/types";
import { GlobalStyles } from "../../../styles/global";
import { Navbar } from "../../molecules";
import { Footer } from "../../molecules";
import { IPage } from "../../../types/standard";

interface ILayout {
  children: React.ReactNode;
  personalInfo?: IPage[`acfContact`][`contact`];
}

const Layout: React.FC<ILayout> = ({ children, personalInfo }): JSX.Element => {
  const location = useLocation();
  const { theme: themeValue } = useContextState<IAppState>(AppCtx, ["theme"]);
  console.log("personalInfo", personalInfo);

  return (
    <ThemeProvider theme={theme[themeValue]}>
      <GlobalStyles />
      <S.Layout>
        <Navbar />
        <S.Main>{children}</S.Main>
        <Footer personalInfo={personalInfo} />
      </S.Layout>
    </ThemeProvider>
  );
};

export default Layout;
