import React from "react";
import * as S from "./styles";
import { HomeAboutProps } from "./types";
import { SectionWrapper } from "..";
import Button from "../../atoms/Button";
import { navigate } from "gatsby";
import { GraduateCapSVG } from "../../../assets/symbols";

const HomeAbout: React.FC<HomeAboutProps> = ({
  secendaryBackground,
}): JSX.Element => (
  <SectionWrapper secendaryBackground={secendaryBackground}>
    <S.HomeAboutWrapper>
      <S.ItemWrapper>
        <S.IconWrapper>
          <GraduateCapSVG />
        </S.IconWrapper>
        <h4>Inżnier Informatyki</h4>
        <h5>Specjalizacja Bazy danych</h5>
      </S.ItemWrapper>
    </S.HomeAboutWrapper>
  </SectionWrapper>
);
export default HomeAbout;
