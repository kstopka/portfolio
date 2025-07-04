import React from "react";
import * as S from "./styles";
import { HomeAboutProps } from "./types";
import { ContinuousSlider, SectionWrapper } from "..";
import { GraduateCapSVG } from "../../../assets/symbols";

const HomeAbout: React.FC<HomeAboutProps> = ({
  aboutMe,
  secendaryBackground,
}): JSX.Element => {
  return (
    <SectionWrapper secendaryBackground={secendaryBackground}>
      <ContinuousSlider technologies={aboutMe.technologies} />
      {/* <S.HomeAboutWrapper>
      <S.ItemWrapper>
        <S.IconWrapper>
          <GraduateCapSVG />
        </S.IconWrapper>
        <h4>Inżnier Informatyki</h4>
        <h5>Specjalizacja Bazy danych</h5>
        <h6>Menedżerska Akademia Nauk Stosowanych w Warszawie</h6>
      </S.ItemWrapper>
    </S.HomeAboutWrapper> */}
    </SectionWrapper>
  );
};
export default HomeAbout;
