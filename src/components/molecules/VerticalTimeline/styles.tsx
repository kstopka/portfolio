import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";
import { ColourKey, ColourSettings } from "./types";

export const VerticalTimelineWrapper = styled.div<{
  finalColourSettings: Record<ColourKey, string>;
}>`
  color: ${({ theme, finalColourSettings }) =>
    theme.colors.primary[finalColourSettings[10]]};
`;
