import React from "react";
import * as S from "./styles";
import { HomeTechnologiesProps } from "./types";
import { ContinuousSlider, SectionWrapper } from "..";

const HomeTechnologies: React.FC<HomeTechnologiesProps> = ({
  aboutMe,
  fullWidth = false,
}): JSX.Element => {
  return (
    <SectionWrapper fullWidth={fullWidth} id="about">
      <ContinuousSlider technologies={aboutMe.technologies} />
    </SectionWrapper>
  );
};
export default HomeTechnologies;
