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
  return (
    <SectionWrapper secendaryBackground={secendaryBackground}>
      <S.VerticalTimelineWrapper finalColourSettings={finalColourSettings}>
        test
      </S.VerticalTimelineWrapper>
    </SectionWrapper>
  );
};
export default VerticalTimeline;
