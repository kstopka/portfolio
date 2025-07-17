import React from "react";
import * as S from "./styles";
import { ContinuousSliderProps } from "./types";
import { SectionWrapper } from "..";

const ContinuousSlider: React.FC<ContinuousSliderProps> = ({
  array,
  itemKey,
  fullWidth = false,
  id = "",
}): JSX.Element => (
  <SectionWrapper fullWidth={fullWidth} id={id}>
    <S.MarqueeWrapper>
      <S.MarqueeTrack>
        {[...array, ...array, ...array].map((item, index) => (
          <S.Slide key={index}>{item[itemKey].toUpperCase()}</S.Slide>
        ))}
      </S.MarqueeTrack>
    </S.MarqueeWrapper>
  </SectionWrapper>
);
export default ContinuousSlider;
