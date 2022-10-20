import styled from "styled-components";

export const TreeFundContainer = styled.section`
  display: grid;
  grid: 1fr 6fr / 1fr;
  height: 200vh;
  width: 100vw;
  background: rgb(10, 168, 136);
  background: linear-gradient(
    90deg,
    rgba(10, 168, 136, 1) 25%,
    rgba(22, 131, 125, 100) 50%,
    rgba(10, 168, 136, 1) 75%
  );
  z-index: 4;
`;
export const TimelineContainer = styled.div`
  display: grid;
  grid: 1fr / 4fr 1fr 4fr;
  height: 100%;
  padding: 0 2rem;
  overflowy: scroll;
`;

export const PipelineContainer = styled.div`
  width: 1.5rem;
  background-color: rgba(255, 252, 237, 0.2);
  border-radius: 2rem;
  z-index: 2;

  @media (max-width: 800px) {
    width: 0;
  }
`;

export const Pipeline = styled.div`
  width: 1.5rem;
  background: rgb(254, 235, 102);
  background: linear-gradient(
    0deg,
    rgba(254, 235, 102, 1) 0%,
    rgba(255, 255, 255, 1) 47%
  );
  border-radius: 2rem;
  max-height: 100%;

  transition: linear;

  @media (max-width: 800px) {
    width: 0;
  }
`;

export const TwitterLink = styled.a`
  font-size: 1.5rem;
  font-family: Nixie One;
  font-weight: bold;
  color: #feeb66;
  text-shadow: 2px 2px 4px #000000;
`;

export const TreeImages = styled.img`
  height: 550px;
  width: 550px;
  border-radius: 50%;

  @media (max-width: 990px) {
    height: 250px;
    width: 250px;
  }

  @media (max-width: 500px) {
    height: 160px;
    width: 160px;
  }
`;

export const WhiteText = styled.p`
  font-size: 180%;
  font-weight: 900;
  color: white;
  text-shadow: 2px 2px 4px #000000;

  @media (max-width: 900px) {
    font-size: 150%;
  }
`;

export const GoldText = styled.p`
  font-size: 180%;
  font-weight: 900;
  color: #feeb66;
  text-shadow: 2px 2px 4px #000000;
  margin: 0;

  @media (max-width: 990px) {
    font-size: 150%;
  }
`;
