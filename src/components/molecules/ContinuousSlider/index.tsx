import React from "react";
import * as S from "./styles";
import { ContinuousSliderProps } from "./types";

const ContinuousSlider: React.FC<ContinuousSliderProps> = ({
  technologies,
}): JSX.Element => (
  <S.MarqueeWrapper>
    <S.MarqueeTrack>
      {[...technologies, ...technologies, ...technologies].map(
        ({ technology }, index) => (
          <S.Slide key={index}>{technology.toUpperCase()}</S.Slide>
        )
      )}
    </S.MarqueeTrack>
  </S.MarqueeWrapper>
);
export default ContinuousSlider;
