import React from "react";
import * as S from "./styles";
import { FaqContentProps } from "./types";
import { useContextState, IAppState, AppCtx } from "../../contexted";
import { FaqTab } from "..";

const FaqContent: React.FC<FaqContentProps> = ({ faqContent }): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  return (
    <S.FaqContentWrapper>
      <S.Title>{faqContent.title[language]}</S.Title>
      <S.Description>{faqContent.description[language]}</S.Description>
      {faqContent.content.length > 0 &&
        faqContent.content.map((item, index) => (
          <FaqTab tab={item} key={index} />
        ))}
    </S.FaqContentWrapper>
  );
};
export default FaqContent;
