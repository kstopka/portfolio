import React, { useState, useCallback } from "react";
import * as S from "./styles";
import { FaqTabProps } from "./types";
import { useContextState, IAppState, AppCtx } from "../../contexted";
import { ArrowSVG } from "../../../assets/symbols";

const FaqTab: React.FC<FaqTabProps> = ({ tab }): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <S.FaqTabWrapper>
      <S.MainWrapper onClick={toggleOpen}>
        <S.TitleWrapper>
          <S.Title>{tab.title[language]}</S.Title>
        </S.TitleWrapper>
        <S.SvgWrapper $isOpen={isOpen}>
          <ArrowSVG />
        </S.SvgWrapper>
      </S.MainWrapper>
      <S.Description $isOpen={isOpen}>
        {tab.description[language]}
      </S.Description>
    </S.FaqTabWrapper>
  );
};
export default React.memo(FaqTab);
