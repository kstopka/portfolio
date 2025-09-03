import React from "react";
import * as S from "./styles";
import { FaqContentProps } from "./types";
import { useContextState, IAppState, AppCtx } from "../../contexted";
import FaqTab from "../FaqTab";
import { getColorKey } from "../../../hooks/getColorKey";

const FaqContent: React.FC<FaqContentProps> = ({
  faqContent,
  index,
}): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const colorKey = getColorKey(index);

  return (
    <S.FaqContentWrapper aria-labelledby={faqContent.title[language]}>
      <S.Title $colorKey={colorKey}>{faqContent.title[language]}</S.Title>
      {/* <S.Description>{faqContent.description[language]}</S.Description> */}
      {faqContent.content.length > 0 &&
        faqContent.content.map((item, index) => (
          <FaqTab tab={item} key={index} />
        ))}
    </S.FaqContentWrapper>
  );
};
export default React.memo(FaqContent);
