import React from "react";
import * as S from "./styles";
import { AboutContentProps } from "./types";
import { TabbedContent, SectionWrapper } from "..";
import { useContextState, IAppState, AppCtx } from "../../contexted";

const AboutContent: React.FC<AboutContentProps> = ({
  content: { title, personally, professionally },
}): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  return (
    <S.AboutContentWrapper>
      <S.Title>{title[language]}</S.Title>
      <S.Descriptions>
        <S.Description>{personally[language]}</S.Description>
        <TabbedContent tabs={professionally} />
      </S.Descriptions>
    </S.AboutContentWrapper>
  );
};
export default AboutContent;
