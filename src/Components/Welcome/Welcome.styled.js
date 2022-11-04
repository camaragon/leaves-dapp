import styled from "styled-components";

export const WelcomeContainer = styled.section`
  display: grid;
  grid: 1fr 1fr 2fr / 1fr;
  background: rgb(142, 209, 78);
  background: linear-gradient(
    0deg,
    rgba(142, 209, 78, 1) 0%,
    rgba(12, 167, 137, 1) 75%
  );
  height: 80vh;
  width: 100vw;
`;

export const WelcomeTitle = styled.h1`
  color: white;
  font-weight: 900;
  font-size: 5rem;
  text-shadow: 2px 2px 4px #000000;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 3rem;
  }

  @media (max-width: 1000px) {
    @media (max-height: 600px) {
      font-size: 3rem;
    }
  }
`;

export const WelcomeSubtitle = styled.p`
  color: white;
  font-weight: bold;
  width: 70%;
  text-shadow: 2px 2px 4px #000000;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
