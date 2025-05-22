import React from "react";
import * as S from "./styles";
import { PageHeaderProps } from "./types";

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle = "",
  centered = false,
}): JSX.Element => (
  <S.PageHeaderWrapper centered={centered}>
    <h1>{title}</h1>
    {subtitle && <h4>{subtitle}</h4>}
  </S.PageHeaderWrapper>
);
export default PageHeader;
