import React from "react";
import * as S from "./styles";
import { VerticalTimelineProps, ColourKey } from "./types";
import { SectionWrapper } from "..";
import { DEFAULT_COLOUR_SETTINGS } from "./settings";

const getColorKey = (index: number): ColourKey =>
  (((index % 9) + 1) * 10) as ColourKey;

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({
  secendaryBackground = false,
  timelineContent,
  colourSettings = {},
}) => {
  if (!timelineContent?.contents) return null; // TODO: Replace with loading

  const finalColourSettings: Record<ColourKey, string> = {
    ...DEFAULT_COLOUR_SETTINGS,
    ...colourSettings,
  };

  return (
    <SectionWrapper secendaryBackground={secendaryBackground}>
      <S.VerticalTimelineWrapper>
        <S.Title>{timelineContent.title}</S.Title>
        <S.Description>{timelineContent.description}</S.Description>
        <S.ItemsContainer
          finalColourSettings={finalColourSettings}
          timelineColors={timelineContent.contents.map((item, index) =>
            getColorKey(index)
          )}
        >
          {timelineContent.contents.map((item, index) => {
            const colorKey = getColorKey(index);

            return (
              <S.Item key={index}>
                <S.TimelineElement
                  colorKey={colorKey}
                  finalColourSettings={finalColourSettings}
                >
                  <S.ContentBox>
                    <S.ContentTitle>{item.title}</S.ContentTitle>
                    <S.ContentDescription>
                      {item.description}
                    </S.ContentDescription>
                    <ul>
                      {item.attributes.map(({ attributeName }, attrIdx) => (
                        <li key={attrIdx}>{attributeName}</li>
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
      </S.VerticalTimelineWrapper>
    </SectionWrapper>
  );
};

export default VerticalTimeline;
