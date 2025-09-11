import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const ProjectsWrapper = styled.div`
  ${flexColumn}
  row-gap: 32px;
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.h3};
`;

export const SwipperWrapper = styled.div`
  width: 100%;
`;
