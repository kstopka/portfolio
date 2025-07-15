import React from "react";
import * as S from "./styles";
import { SectionWrapperProps } from "./types";

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  secendaryBackground = false,
  fullWidth = false,
  children,
}): JSX.Element => (
  <S.SectionWrapperWrapper
    secendaryBackground={secendaryBackground}
    fullWidth={fullWidth}
  >
    {children}
  </S.SectionWrapperWrapper>
);
export default SectionWrapper;
