import styled from "styled-components";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const FaqWrapper = styled.div`
  ${flexColumn}
  margin-bottom: 20px;
  row-gap: 10px;
`;
export const Title = styled.h3`
  font-size: 24px;
`;
export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[30]};
`;
