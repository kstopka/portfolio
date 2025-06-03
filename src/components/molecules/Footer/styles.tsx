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
  padding-left: ${({ theme }) => theme.layout.paddingXMobile};
  padding-right: ${({ theme }) => theme.layout.paddingXMobile};
  padding-top: ${({ theme }) => theme.layout.paddingYMobile};
  padding-bottom: ${({ theme }) => theme.layout.paddingYMobile};

  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-left: ${({ theme }) => theme.layout.paddingX};
    padding-right: ${({ theme }) => theme.layout.paddingX};
    padding-top: ${({ theme }) => theme.layout.paddingY};
    padding-bottom: ${({ theme }) => theme.layout.paddingY};
  }
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
