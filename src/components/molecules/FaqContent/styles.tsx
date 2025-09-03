import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const FaqContentWrapper = styled.div`
  ${flexColumn}
  row-gap: 5px;
  align-items: start;
  max-width: ${({ theme }) => theme.layout.sectionWrapperWidth};
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[30]};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;
export const Title = styled.h4<{ $colorKey: number }>`
  font-size: 18px;
  color: ${({ theme, $colorKey }) => theme.colors.primary[$colorKey]};
`;
export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[30]};
`;
