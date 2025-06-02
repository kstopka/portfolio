import React from "react";
import * as S from "./styles";
import { FooterProps } from "./types";
import { translateContent } from "./translate";
import { useContextState, IAppState, AppCtx } from "../../contexted";
import { MailSVG, LinkedinSVG, GithubSVG } from "../../../assets/symbols";

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  return (
    <S.Footer>
      <S.FooterText>
        {`© ${new Date().getFullYear()} ${personalInfo?.fullname}. ${
          translateContent.rights[language]
        }.`}
      </S.FooterText>
      <S.IconsWrapper>
        <MailSVG />
        <LinkedinSVG />
        <GithubSVG />
      </S.IconsWrapper>
    </S.Footer>
  );
};

export default Footer;
