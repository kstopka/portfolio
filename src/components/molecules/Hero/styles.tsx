import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const HeroWrapper = styled.div`
  ${flexColumn};
  height: ${({ theme }) => `calc(100dvh - ${theme.layout.navigationHeight})`};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[90]} 0%,
    ${({ theme }) => theme.colors.primary[70]} 50%,
    ${({ theme }) => theme.colors.primary[50]} 100%
  );
`;

export const ContentWrapper = styled.div`
  ${flexColumn};
  align-items: flex-start;
  row-gap: 16px;
  padding: 0 ${({ theme }) => theme.layout.paddingXMobile};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.layout.sectionWrapperWidth};
    padding: 0 ${({ theme }) => theme.layout.paddingX};
  }
`;

export const FullName = styled.h1`
  color: ${({ theme }) => theme.colors.primary[50]};
`;

export const DescriptionWrapper = styled.div`
  ${flexColumn}
  align-items: flex-start;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${flexRow}
    justify-content: flex-start;
    align-items: center;
  }
`;
export const PrefixTitle = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 10px;
  }
`;
export const SwipperWrapper = styled.div`
  height: 28px;
  overflow: hidden;

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
  }
`;

export const Dag = styled.span`
  p {
    display: inline;
  }

  code {
    color: ${({ theme }) => theme.colors.primary[30]};
  }
`;

export const Title = styled.h5`
  display: inline;
  color: ${({ theme }) => theme.colors.primary[30]};
`;

export const ButtonsWrapper = styled.div`
  ${flexColumn}
  align-items: flex-start;
  row-gap: 16px;
`;
