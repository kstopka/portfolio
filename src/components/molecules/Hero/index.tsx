import React from "react";
import * as S from "./styles";
import { HeroProps } from "./types";
import { SectionWrapper } from "../";

const Hero: React.FC<HeroProps> = ({
  fullname,
  description,
  secendaryBackground,
}): JSX.Element => (
  <SectionWrapper secendaryBackground={secendaryBackground}>
    <S.HeroWrapper>
      <div>
        <h2>{fullname}</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </S.HeroWrapper>
  </SectionWrapper>
);
export default Hero;
