import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const HomeAboutWrapper = styled.div`
  ${flexRow}
  flex-wrap: wrap;
  gap: 16px;
`;

export const ItemWrapper = styled.div`
  ${flexColumn}
  gap: 12px;

  border: 1px solid ${({ theme }) => theme.colors.neutral[30]};
  padding: 16px;
  width: 328px;
  height: 328px;

  text-align: center;
`;

export const IconWrapper = styled.div`
  ${flexColumn}

  svg {
    max-width: 100%;
    max-height: 150px;
  }
`;
