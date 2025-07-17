import React from "react";
import * as S from "./styles";
import { VerticalTimelineProps, ColourKey } from "./types";
import { SectionWrapper } from "..";
import { DEFAULT_COLOUR_SETTINGS } from "./settings";

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({
  secendaryBackground = false,
  timelineContent,
  colourSettings = {},
}): JSX.Element => {
  const finalColourSettings: Record<ColourKey, string> = {
    ...DEFAULT_COLOUR_SETTINGS,
    ...colourSettings,
  };

  if (!timelineContent?.contents) return <></>; // TODO: Loading

  return (
    <SectionWrapper secendaryBackground={secendaryBackground}>
      <S.VerticalTimelineWrapper>
        <S.Title>{timelineContent.title}</S.Title>
        <S.Description>{timelineContent.description}</S.Description>
        {timelineContent.contents.map((item, index) => {
          const colorKey = (((index % 9) + 1) * 10) as ColourKey;
          return (
            <S.TimelineElement
              key={index}
              finalColourSettings={finalColourSettings}
              colorKey={colorKey}
            >
              <S.ContentBox>
                <S.ContentTitle>{item.title}</S.ContentTitle>
                <S.ContentDescription>{item.description}</S.ContentDescription>
                <ul>
                  {item.attributes.map((attribute, attributeIndex) => (
                    <li key={attributeIndex}>{attribute.attributeName}</li>
                  ))}
                </ul>
              </S.ContentBox>
            </S.TimelineElement>
          );
        })}
      </S.VerticalTimelineWrapper>
    </SectionWrapper>
  );
};
export default VerticalTimeline;
