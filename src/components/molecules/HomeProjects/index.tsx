import React from "react";
import * as S from "./styles";
import { ProjectCard, SectionWrapper } from "..";
import { useContextState, IAppState, AppCtx } from "../../contexted";
import { HomeProjectsProps } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeProjects: React.FC<HomeProjectsProps> = ({
  secendaryBackground,
  projects,
}) => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  return (
    <SectionWrapper secendaryBackground={secendaryBackground}>
      <S.ProjectsWrapper>
        <S.Title>Projekty</S.Title>
        {projects.length > 0 && (
          <S.SwipperWrapper>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.SwipperWrapper>
        )}
      </S.ProjectsWrapper>
    </SectionWrapper>
  );
};

export default HomeProjects;
