import React from "react";
import * as S from "./styles";
import { FooterProps } from "./types";
import { useContextState, IAppState, AppCtx } from "../../contexted";
import { MailSVG, LinkedinSVG, GithubSVG } from "../../../assets/symbols";
import { Link, navigate } from "gatsby";

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  return (
    <S.Footer id="contact">
      <S.FooterWrapper>
        <S.FooterText>
          {`${new Date().getFullYear()} © ${personalInfo.fullname}`}
        </S.FooterText>
        <S.ContactWrapper>
          <S.IconContainer>
            <MailSVG />
          </S.IconContainer>
          <p>{personalInfo.email}</p>
        </S.ContactWrapper>
        <S.IconsWrapper>
          <Link to={`https://www.linkedin.com/in/${personalInfo.linkedin}`}>
            <LinkedinSVG />
          </Link>
          <Link to={`https://github.com/${personalInfo.github}`}>
            <GithubSVG />
          </Link>
        </S.IconsWrapper>
      </S.FooterWrapper>
    </S.Footer>
  );
};

export default Footer;
