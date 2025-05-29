import React from "react";
import * as S from "./styles";
import { SectionWrapperProps } from "./types";

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  secendaryBackground = false,
  children,
}): JSX.Element => (
  <S.SectionWrapperWrapper secendaryBackground={secendaryBackground}>
    {children}
  </S.SectionWrapperWrapper>
);
export default SectionWrapper;
