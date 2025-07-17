import React from "react";
import * as S from "./styles";
import { TabbedContentProps } from "./types";
import { useContextState, IAppState, AppCtx } from "../../contexted";

const TabbedContent: React.FC<TabbedContentProps> = ({ tabs }): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <S.TabbedContentWrapper>
      <S.TabsWrapper>
        {tabs.map((item, index) => (
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
        {tabs[activeTab].description[language]}
      </S.DescriptionWrapper>
    </S.TabbedContentWrapper>
  );
};
export default TabbedContent;
