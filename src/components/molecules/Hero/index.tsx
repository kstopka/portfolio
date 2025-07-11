import React from "react";
import * as S from "./styles";
import { HeroProps } from "./types";
import { SectionWrapper } from "../";
import Button from "../../atoms/Button";
import { navigate } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useContextState, IAppState, AppCtx } from "../../contexted";

const Hero: React.FC<HeroProps> = ({
  fullname,
  github,
  linkedin,
  hero,
  secendaryBackground,
}): JSX.Element => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  return (
    <SectionWrapper secendaryBackground={secendaryBackground}>
      <S.HeroWrapper>
        <S.ContentWrapper>
          <S.FullName>{fullname}</S.FullName>
          <S.DescriptionWrapper>
            <S.PrefixTitle>{hero.prefix[language]}</S.PrefixTitle>
            <S.SwipperWrapper>
              <Swiper
                direction="vertical"
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay]}
                slidesPerView={1}
                allowTouchMove={false}
              >
                {hero.roles.map(({ role }, index) => (
                  <SwiperSlide key={index}>
                    <S.Title>{role}</S.Title>
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.SwipperWrapper>
          </S.DescriptionWrapper>
          {/* <S.ButtonsWrapper>
          <Button
            label="GitHub"
            onClick={() => navigate(`https://github.com/${github}`)}
          />
          <Button
            label="LinkedIn"
            onClick={() => navigate(`https://www.linkedin.com/in/${linkedin}`)}
          />
        </S.ButtonsWrapper> */}
        </S.ContentWrapper>
      </S.HeroWrapper>
    </SectionWrapper>
  );
};
export default Hero;
