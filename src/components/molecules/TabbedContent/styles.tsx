import styled from "styled-components";
import {
  flexColumn,
  flexRow,
  descriptionContainer,
} from "../../../styles/mixins";

import { darken } from "polished";

export const TabbedContentWrapper = styled.div`
  ${flexColumn};
  width: 100%;
  height: -webkit-fill-available;
`;

export const TabsWrapper = styled.div`
  ${flexRow};
  justify-content: flex-start;
  margin-bottom: -1px;
`;

export const Tab = styled.div`
  padding: 8px 8px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.neutral[20]};
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.neutral[30]};
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  &:hover {
    color: ${({ theme }) => darken(0.2, theme.colors.primary[50])};
  }

  &[aria-selected="true"] {
    border: 1px solid ${({ theme }) => theme.colors.primary[50]};
    border-bottom: none;
    color: ${({ theme }) => theme.colors.primary[50]};
    font-weight: 700;
    position: relative;
    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
    padding: 8px 12px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 20px;
    padding: 8px 16px;
  }
`;

export const DescriptionWrapper = styled.div`
  ${descriptionContainer};
  flex-grow: 2;
  border-radius: 0 8px 8px 8px;
`;
