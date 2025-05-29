import styled from "styled-components";

export const SectionWrapperWrapper = styled.div<{
  secendaryBackground: boolean | undefined;
}>`
  background: ${({ theme, secendaryBackground }) =>
    secendaryBackground
      ? theme.colors.secondaryBackground
      : theme.colors.background};

  padding: 0 ${(props) => props.theme.layout.paddingXMobile};
  width: 100%;

  > div {
    max-width: ${(props) => props.theme.layout.maxWidth};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 ${(props) => props.theme.layout.paddingX};
  }
`;
