import React from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./styles";
import { VerticalTimelineContentsProps } from "./types";
import { DEFAULT_COLOUR_SETTINGS } from "./settings";
import { useContextState, IAppState, AppCtx } from "../../contexted";
import { getColorKey } from "../../../hooks/getColorKey";
import { ColourKey } from "../../../types/hooks";

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
      $finalColourSettings={finalColourSettings}
      $timelineColors={contents.map((item, index) => getColorKey(index))}
    >
      {contents.map((item, index) => {
        const colorKey = getColorKey(index);

        const isLeft = index % 2 === 0;
        const { ref, inView } = useInView({
          triggerOnce: true,
          rootMargin: "0px 0px -50px 0px",
        });

        const itemClassName = `${inView ? "fade-in" : ""}-${
          isLeft ? "left" : "right"
        }`;

        return (
          <S.Item key={index} ref={ref} className={itemClassName}>
            <S.TimelineElement
              $colorKey={colorKey}
              $finalColourSettings={finalColourSettings}
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
              $colorKey={colorKey}
              $finalColourSettings={finalColourSettings}
            />
          </S.Item>
        );
      })}
    </S.ItemsContainer>
  );
};

export default VerticalTimelineContents;
