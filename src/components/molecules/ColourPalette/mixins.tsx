import { css } from "styled-components";
import { flexRow } from "../../../styles/mixins";

export const container = css`
  width: 90px;
  height: 90px;
  margin: 20px;
`;

export const bigText = css`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
`;

export const basicWrapper = css`
  ${flexRow}
  & > div {
    ${container}
  }

  & > div > p > span {
    ${bigText}
  }
`;
