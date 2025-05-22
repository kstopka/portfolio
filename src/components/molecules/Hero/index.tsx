import React from "react";
import * as S from "./styles";
import { HeroProps } from "./types";

const Hero: React.FC<HeroProps> = ({ fullname, description }): JSX.Element => (
  <S.HeroWrapper>
    <div>
      <h2>{fullname}</h2>
    </div>
    <div dangerouslySetInnerHTML={{ __html: description }} />
  </S.HeroWrapper>
);
export default Hero;
