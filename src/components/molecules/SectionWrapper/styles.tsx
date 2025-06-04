import styled from "styled-components";
import { flexRow } from "../../../styles/mixins";

export const SectionWrapperWrapper = styled.div<{
  secendaryBackground: boolean | undefined;
}>`
  ${flexRow}

  background: ${({ theme, secendaryBackground }) =>
    secendaryBackground
      ? theme.colors.secondaryBackground
      : theme.colors.background};

  padding-left: ${({ theme }) => theme.layout.paddingXMobile};
  padding-right: ${({ theme }) => theme.layout.paddingXMobile};
  padding-top: ${({ theme }) => theme.layout.paddingYMobile};
  padding-bottom: ${({ theme }) => theme.layout.paddingYMobile};

  width: 100%;

  > div {
    max-width: ${(props) => props.theme.layout.maxWidth};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-left: ${({ theme }) => theme.layout.paddingX};
    padding-right: ${({ theme }) => theme.layout.paddingX};
    padding-top: ${({ theme }) => theme.layout.paddingY};
    padding-bottom: ${({ theme }) => theme.layout.paddingY};
  }
`;
