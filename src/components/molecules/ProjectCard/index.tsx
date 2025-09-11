import React from "react";
import * as S from "./styles";
import { useContextState, IAppState, AppCtx } from "../../contexted";
import { ProjectCardProps } from "./types";

const mocksText = {
  seeMore: {
    pl: "Zobacz więcej",
    en: "See more",
  },
  role: {
    pl: "Moja rola: ",
    en: "My role: ",
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const {
    acfProjects,
    id,
    tags: { nodes },
  } = project;
  const { description, link, role, title } = acfProjects;
  return (
    <S.ProjectCardWrapper>
      <S.ProjectTitle>{title[language]}</S.ProjectTitle>
      <S.Description>{description[language]}</S.Description>
      <S.Role>
        {mocksText.role[language]}
        {role[language]}
      </S.Role>
      <S.TechList>
        {nodes.length > 0 &&
          nodes.map((tech, i) => <S.TechItem key={i}>{tech.name}</S.TechItem>)}
      </S.TechList>
      {link && (
        <S.MoreButton
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {mocksText.seeMore[language]}
        </S.MoreButton>
      )}
    </S.ProjectCardWrapper>
  );
};

export default ProjectCard;
