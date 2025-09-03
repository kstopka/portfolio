import styled from "styled-components";
import { flexRow } from "../../../styles/mixins";

export const SectionWrapperWrapper = styled.div<{
  $secendaryBackground: boolean;
  $fullWidth: boolean;
}>`
  ${flexRow}

  background: ${({ theme, $secendaryBackground }) =>
    $secendaryBackground
      ? theme.colors.secondaryBackground
      : theme.colors.background};

  width: 100%;

  ${({ $fullWidth, theme }) =>
    $fullWidth
      ? ``
      : `
    
    padding-left: ${theme.layout.paddingXMobile};
    padding-right: ${theme.layout.paddingXMobile};
    padding-top: ${theme.layout.paddingYMobile};
    padding-bottom: ${theme.layout.paddingYMobile};
  
    > div {
      max-width: ${theme.layout.maxWidth};
    }

    @media (min-width: ${theme.breakpoints.sm}) {
      padding-left: ${theme.layout.paddingX};
      padding-right: ${theme.layout.paddingX};
      padding-top: ${theme.layout.paddingY};
      padding-bottom: ${theme.layout.paddingY};
    }
    `}
`;
