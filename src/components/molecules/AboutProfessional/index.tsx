import React from "react";
import * as S from "./styles";
import { AboutProfessionalProps } from "./types";
import { useContextState, IAppState, AppCtx } from "../../contexted";

const AboutProfessional: React.FC<AboutProfessionalProps> = ({
  professionally,
}): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <S.AboutProfessionalWrapper>
      <S.TabsWrapper>
        {professionally.map((item, index) => (
          <S.Tab
            key={index}
            onClick={() => setActiveTab(index)}
            aria-selected={activeTab === index}
          >
            {item.title[language]}
          </S.Tab>
        ))}
      </S.TabsWrapper>
      <S.DescriptionWrapper>
        {professionally[activeTab].description[language]}
      </S.DescriptionWrapper>
    </S.AboutProfessionalWrapper>
  );
};
export default AboutProfessional;
