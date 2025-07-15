import { css } from "styled-components";

export const flexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const flexColumn = css`
  ${flexRow}
  flex-direction: column;
`;

export const descriptionContainer = css`
  ${flexColumn};
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.neutral[70]};
  border: 1px solid ${({ theme }) => theme.colors.primary[50]};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;
