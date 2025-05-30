import React from "react";
import * as S from "./styles";
import { HeroProps } from "./types";
import { SectionWrapper } from "../";
import Button from "../../atoms/Button";
import { navigate } from "gatsby";

const Hero: React.FC<HeroProps> = ({
  fullname,
  github,
  linkedin,
  title,
  description,
  secendaryBackground,
}): JSX.Element => (
  <SectionWrapper secendaryBackground={secendaryBackground}>
    <S.HeroWrapper>
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.FullName>{fullname}</S.FullName>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <S.ButtonsWrapper>
          <Button
            label="GitHub"
            onClick={() => navigate(`https://github.com/${github}`)}
          />
          <Button
            label="LinkedIn"
            onClick={() => navigate(`https://www.linkedin.com/in/${linkedin}`)}
          />
        </S.ButtonsWrapper>
      </S.ContentWrapper>
    </S.HeroWrapper>
  </SectionWrapper>
);
export default Hero;
