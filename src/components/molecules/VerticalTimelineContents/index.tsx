import React from "react";
import * as S from "./styles";
import { ColourKey, VerticalTimelineContentsProps } from "./types";
import { getColorKey } from "./helper";
import { DEFAULT_COLOUR_SETTINGS } from "./settings";
import { useContextState, IAppState, AppCtx } from "../../contexted";

const VerticalTimelineContents: React.FC<VerticalTimelineContentsProps> = ({
  contents,
  colourSettings,
}) => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const finalColourSettings: Record<ColourKey, string> = {
    ...DEFAULT_COLOUR_SETTINGS,
    ...colourSettings,
  };

  return (
    <S.ItemsContainer
      finalColourSettings={finalColourSettings}
      timelineColors={contents.map((item, index) => getColorKey(index))}
    >
      {contents.map((item, index) => {
        const colorKey = getColorKey(index);

        return (
          <S.Item key={index}>
            <S.TimelineElement
              colorKey={colorKey}
              finalColourSettings={finalColourSettings}
            >
              <S.ContentBox>
                <S.ContentTitle>{item.content.title[language]}</S.ContentTitle>
                <S.ContentDescription>
                  {item.content.description[language]}
                </S.ContentDescription>
                <ul>
                  {item.content.attributes.map(({ attributeName }, attrIdx) => (
                    <li key={attrIdx}>{attributeName[language]}</li>
                  ))}
                </ul>
              </S.ContentBox>
            </S.TimelineElement>
            <S.Dot
              colorKey={colorKey}
              finalColourSettings={finalColourSettings}
            />
          </S.Item>
        );
      })}
    </S.ItemsContainer>
  );
};

export default VerticalTimelineContents;
