import { IAcfHome } from "../../../types/standard";

export interface HeroProps {
  fullname: string;
  github: string;
  linkedin: string;
  hero: IAcfHome["hero"];
  secendaryBackground?: boolean;
}
