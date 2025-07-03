import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const AboutContentWrapper = styled.div`
  ${flexColumn}
  gap: 50px;
`;
export const Title = styled.h2``;
export const Descriptions = styled.div`
  ${flexColumn}
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${flexRow}
  }
`;
export const Description = styled.div`
  max-width: ${({ theme }) => theme.layout.sectionWrapperWidth};
`;
