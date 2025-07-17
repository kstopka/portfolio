import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";
import { ColourKey, ColourSettings } from "./types";

export const VerticalTimelineWrapper = styled.div`
  ${flexColumn}
`;

export const ItemsContainer = styled.div<{
  timelineColors: ColourKey[];
  finalColourSettings: Record<ColourKey, string>;
}>`
  ${flexColumn}
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    left: calc(100% - 1px);
    height: 100%;
    width: 2px;
    background: ${({ timelineColors, theme, finalColourSettings }) =>
      `linear-gradient(to bottom, ${theme.colors.background},${timelineColors
        .map((el) => theme.colors.primary[finalColourSettings[el]])
        .join(", ")}, ${theme.colors.background})`};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    &::after {
      content: "";
      position: absolute;
      left: calc(50% - 1px);
      height: 100%;
      width: 2px;
      background: ${({ timelineColors, theme, finalColourSettings }) =>
        `linear-gradient(to bottom, ${theme.colors.background},${timelineColors
          .map((el) => theme.colors.primary[finalColourSettings[el]])
          .join(", ")}, ${theme.colors.background})`};
    }
  }
`;

export const ContentBox = styled.div`
  padding: 30px;
  max-width: 480px;
`;

export const Title = styled.h2`
  align-self: center;
  text-align: center;
`;

export const Description = styled.p`
  align-self: center;
  text-align: center;
`;

export const ContentTitle = styled.h4`
  /* color: ${({ theme }) => theme.colors.text.primary}; */
`;

export const ContentDescription = styled.p`
  font-size: 0.9rem;
`;

export const TimelineElement = styled.div<{
  finalColourSettings: Record<ColourKey, string>;
  colorKey: ColourKey;
}>`
  ${flexColumn}
  color: ${({ theme, finalColourSettings, colorKey }) =>
    theme.colors.primary[finalColourSettings[colorKey]]};
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 50%;
  }

  p,
  li {
    font-size: 14px;
    color: #a8a8a8;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    justify-content: flex-start;
  }

  &:nth-child(even) {
    justify-content: flex-end;
  }
`;

export const Dot = styled.div<{
  finalColourSettings: Record<ColourKey, string>;
  colorKey: ColourKey;
}>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme, finalColourSettings, colorKey }) =>
    theme.colors.primary[finalColourSettings[colorKey]]};
  position: absolute;
  left: 100%;
  transform: translateX(-50%);
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    left: 50%;
  }
`;
