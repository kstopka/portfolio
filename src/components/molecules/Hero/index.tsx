import React from "react";
import * as S from "./styles";
import { HeroProps } from "./types";
import { SectionWrapper } from "../";

const Hero: React.FC<HeroProps> = ({
  fullname,
  title,
  description,
  secendaryBackground,
}): JSX.Element => (
  <SectionWrapper secendaryBackground={secendaryBackground}>
    <S.HeroWrapper>
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.FullName>{fullname}</S.FullName>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </S.TextWrapper>
    </S.HeroWrapper>
  </SectionWrapper>
);
export default Hero;
