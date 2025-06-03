import styled, { css } from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

const iconContainer = css`
  ${flexRow}

  width: 40px;
  height: 40px;

  &:hover {
    svg path {
      fill: ${({ theme }) => theme.colors.primary[10]};
    }
  }
`;

export const Footer = styled.footer`
  ${flexColumn}
  padding: 20px 0;
`;
export const FooterWrapper = styled.div`
  ${flexColumn}
  gap: 20px;
  max-width: ${({ theme }) => theme.layout.sectionWrapperWidth};
`;
export const FooterText = styled.div``;
export const ContactWrapper = styled.div`
  ${flexRow}
  gap: 12px;
`;

export const IconContainer = styled.div`
  ${iconContainer}
`;

export const IconsWrapper = styled.div`
  ${flexRow}
  gap: 12px;

  > a {
    ${iconContainer}
  }
`;
