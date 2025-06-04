import React from "react";
import * as S from "./styles";
import { ExampleProps } from "./types";
import { SectionWrapper } from "..";

const Example: React.FC<ExampleProps> = ({
  secendaryBackground,
}): JSX.Element => (
  <SectionWrapper secendaryBackground={secendaryBackground}>
    <S.ExampleWrapper></S.ExampleWrapper>
  </SectionWrapper>
);
export default Example;
