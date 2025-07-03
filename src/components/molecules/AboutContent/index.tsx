import React from "react";
import * as S from "./styles";
import { AboutContentProps } from "./types";
import { SectionWrapper } from "..";

const AboutContent: React.FC<AboutContentProps> = ({}): JSX.Element => (
  <S.AboutContentWrapper>
    <S.Title>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</S.Title>
    <S.Descriptions>
      <S.Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        voluptas repellendus error modi, earum excepturi provident nesciunt
        labore dolore tempore! Possimus inventore expedita, consequatur ipsa
        modi fugit ut reiciendis fugiat?
      </S.Description>
      <S.Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        voluptas repellendus error modi, earum excepturi provident nesciunt
        labore dolore tempore! Possimus inventore expedita, consequatur ipsa
        modi fugit ut reiciendis fugiat?
      </S.Description>
    </S.Descriptions>
  </S.AboutContentWrapper>
);
export default AboutContent;
