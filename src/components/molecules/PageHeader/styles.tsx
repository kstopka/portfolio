import styled from "styled-components";

export const PageHeaderWrapper = styled.div<{
  centered: boolean | undefined;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? "center" : "flex-start")};
  justify-content: center;

  padding: 2rem 0;
  margin: 0 auto;
  width: 100%;
  text-align: ${(props) => (props.centered ? "center" : "left")};
`;
