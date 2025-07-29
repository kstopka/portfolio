import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const FaqTabWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[30]};
  cursor: pointer;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

export const MainWrapper = styled.div`
  ${flexRow}
`;

export const TitleWrapper = styled.div`
  flex-grow: 1;
`;

export const SvgWrapper = styled.div<{ isOpen: boolean }>`
  ${flexColumn}
  height: 28px;
  width: 28px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

export const Title = styled.p`
  ${flexRow}
  justify-content: space-between;
`;
export const Description = styled.p<{ isOpen: boolean }>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[30]};
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    `
    max-height: 200px;
  `}
`;
