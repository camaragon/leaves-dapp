import styled from "styled-components";

export const WelcomeContainer = styled.section`
  display: grid;
  grid: 1fr 1fr 2fr / 1fr;
  backgroundcolor: #0ca789;
  height: 75vh;
`;

export const TwitterLink = styled.a`
  font-size: 1.5rem;
  font-family: Dancing Script;
  font-weight: bold;
  color: transparent;

  &:hover {
    color: #feeb66;
  }
`;
