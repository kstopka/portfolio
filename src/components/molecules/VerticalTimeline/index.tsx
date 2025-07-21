import React from "react";
import * as S from "./styles";
import { VerticalTimelineProps } from "./types";
import { Loading, SectionWrapper } from "..";
import VerticalTimelineContents from "../VerticalTimelineContents";
import { useContextState, IAppState, AppCtx } from "../../contexted";

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({
  secendaryBackground = false,
  timelineContent,
  colourSettings = {},
}) => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);

  if (!timelineContent?.contents) return <Loading />;

  return (
    <SectionWrapper secendaryBackground={secendaryBackground}>
      <S.VerticalTimelineWrapper>
        <S.Title>{timelineContent.title[language]}</S.Title>
        <S.Description>{timelineContent.description[language]}</S.Description>
        <VerticalTimelineContents
          contents={timelineContent.contents}
          colourSettings={colourSettings}
        />
      </S.VerticalTimelineWrapper>
    </SectionWrapper>
  );
};

export default VerticalTimeline;
