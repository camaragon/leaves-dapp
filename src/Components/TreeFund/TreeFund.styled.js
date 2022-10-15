import styled from "styled-components";

export const TreeFundContainer = styled.section`
  display: grid;
  grid: 1fr 7fr / 1fr;
  height: 200vh;
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
`;

export const Pipeline = styled.div`
  width: 1.5rem;
  background-color: white;
  border-radius: 2rem;
  max-height: 100%;
  speed: 200
  -webkit-transition: linear ease;
  -moz-transition: linear ease;
  -o-transition: linear ease;
  transition: linear ease;
`;

export const TwitterLink = styled.a`
  font-size: 1.5rem;
  font-family: Nixie One;
  font-weight: bold;
  color: #feeb66;
`;
