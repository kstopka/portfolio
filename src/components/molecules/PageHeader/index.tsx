import React from "react";
import * as S from "./styles";
import { PageHeaderProps } from "./types";
import { SectionWrapper } from "../";

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle = "",
  centered = false,
  secendaryBackground = false,
}): JSX.Element => (
  <SectionWrapper secendaryBackground={secendaryBackground}>
    <S.PageHeaderWrapper centered={centered}>
      <h1>{title}</h1>
      {subtitle && <h4>{subtitle}</h4>}
    </S.PageHeaderWrapper>
  </SectionWrapper>
);
export default PageHeader;
