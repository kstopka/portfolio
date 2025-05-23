import { css } from "styled-components";

export const flexRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const flexColumn = css`
  ${flexRow}
  flex-direction: column;
`;
