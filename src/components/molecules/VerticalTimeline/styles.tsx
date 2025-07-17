import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";
import { ColourKey, ColourSettings } from "./types";

export const VerticalTimelineWrapper = styled.div``;

export const ContentBox = styled.div`
  padding: 15px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ContentTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const ContentDescription = styled.p`
  font-size: 0.9rem;
`;

export const TimelineElement = styled.div<{
  finalColourSettings: Record<ColourKey, string>;
  colorKey: ColourKey;
}>`
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: #1e1e1e;
  color: ${({ theme, finalColourSettings, colorKey }) =>
    theme.colors.primary[finalColourSettings[colorKey]]};
`;
