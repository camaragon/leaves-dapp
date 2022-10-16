import styled from "styled-components";

export const TreeFundContainer = styled.section`
  display: grid;
  grid: 1fr 6fr / 1fr;
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

  background: rgb(254, 235, 102);
  background: linear-gradient(
    0deg,
    rgba(254, 235, 102, 1) 0%,
    rgba(255, 255, 255, 1) 47%
  );
  border-radius: 2rem;
  max-height: 100%;
  // -webkit-transition: height linear;
  // -moz-transition: height linear;
  // -o-transition: height linear;
  // transition: height 0ms linear;
  transition: linear;
`;

export const TwitterLink = styled.a`
  font-size: 1.5rem;
  font-family: Nixie One;
  font-weight: bold;
  color: #feeb66;
`;
