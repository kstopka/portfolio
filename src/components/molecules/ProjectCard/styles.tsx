import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const ProjectCardWrapper = styled.div`
  ${flexColumn}
  justify-content: space-between;
  row-gap: 16px;

  padding: 20px;
  min-height: 368px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  transition: ${({ theme }) => theme.transitions.standard};
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ProjectTitle = styled.h4``;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.neutral[30]};
`;

export const Role = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ theme }) => theme.colors.primary[20]};
`;

export const TechList = styled.ul`
  ${flexRow}
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechItem = styled.li`
  list-style-type: none;
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.fonts.size.small};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MoreButton = styled.button`
  /* padding: 8px 16px;
  font-size: ${({ theme }) => theme.fonts.size.small};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary[10]};
  color: #fff;
  align-self: flex-start;
  transition: ${({ theme }) => theme.transitions.standard};

  &:hover {
    opacity: 0.9;
  } */
`;
