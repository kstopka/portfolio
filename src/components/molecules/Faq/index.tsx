import React from "react";
import * as S from "./styles";
import { FaqProps } from "./types";
import { FaqContent, SectionWrapper } from "..";
import { useContextState, IAppState, AppCtx } from "../../contexted";

const Faq: React.FC<FaqProps> = ({ secendaryBackground, faq }): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  return (
    <SectionWrapper secendaryBackground={secendaryBackground}>
      <S.FaqWrapper>
        <S.Title>{faq.title[language]}</S.Title>
        <S.Description>{faq.description[language]}</S.Description>
        {faq.contents.length > 0 &&
          faq.contents.map((item, index) => (
            <FaqContent faqContent={item} key={index} />
          ))}
      </S.FaqWrapper>
    </SectionWrapper>
  );
};
export default Faq;
