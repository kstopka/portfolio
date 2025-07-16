import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
  top: ${({ theme }) => theme.layout.navigationHeight};
`;

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    overflow: visible;
  }
`;
