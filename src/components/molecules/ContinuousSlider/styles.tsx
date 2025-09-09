import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const MarqueeWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;
`;

export const Slide = styled.div`
  padding: 0.5rem 1rem;
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: 0.2rem;
  font-weight: 700;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.primary[60]};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 1rem 2rem;
    font-size: 3rem;
    line-height: 3.5rem;
    letter-spacing: 0.5rem;
  }
`;
