import React from "react";
import * as S from "./styles";
import { FaqTabProps } from "./types";
import { useContextState, IAppState, AppCtx } from "../../contexted";

const FaqTab: React.FC<FaqTabProps> = ({ tab }): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  return (
    <S.FaqTabWrapper>
      <S.Title>{tab.title[language]}</S.Title>
      <S.Description>{tab.description[language]}</S.Description>
    </S.FaqTabWrapper>
  );
};
export default FaqTab;
