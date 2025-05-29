import styled from "styled-components";
import { flexColumn } from "../../../styles/mixins";

export const HeroWrapper = styled.div`
  ${flexColumn};
  height: ${({ theme }) => `calc(100dvh - ${theme.layout.navigationHeight})`};
`;

export const TextWrapper = styled.div`
  ${flexColumn};
  align-items: flex-start;
  row-gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.layout.sectionWrapperWidth};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary[50]};
`;
export const FullName = styled.h2`
  color: ${({ theme }) => theme.colors.primary[60]};
`;
