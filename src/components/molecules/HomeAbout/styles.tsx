import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const HomeAboutWrapper = styled.div`
  ${flexColumn};
`;

export const ItemWrapper = styled.div`
  ${flexColumn}
  border: 1px solid ${({ theme }) => theme.colors.neutral[30]};

  max-width: ${({ theme }) => theme.layout.sectionWrapperWidth};
  max-height: ${({ theme }) => theme.layout.sectionWrapperWidth};
`;

export const IconWrapper = styled.div`
  ${flexColumn}

  svg {
    max-width: 100%;
    max-height: 150px;
  }
`;
