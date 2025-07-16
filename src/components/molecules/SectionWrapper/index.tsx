import React from "react";
import * as S from "./styles";
import { SectionWrapperProps } from "./types";

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  secendaryBackground = false,
  fullWidth = false,
  id = "",
  children,
}): JSX.Element => (
  <S.SectionWrapperWrapper
    secendaryBackground={secendaryBackground}
    fullWidth={fullWidth}
    id={id}
  >
    {children}
  </S.SectionWrapperWrapper>
);
export default SectionWrapper;
