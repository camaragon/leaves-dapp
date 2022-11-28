import styled from "styled-components";
import { Stack } from "@mui/material";

export const MintSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0ca789;
`;

export const MintContainer = styled(Stack)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30rem;
  width: 30rem;
  background-color: white;
  //   border: 3px solid black;
  border-radius: 0.5rem;
  //   box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  //   -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  //   -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 16px 21px 14px 1px rgba(0, 0, 0, 0.76);
  -webkit-box-shadow: 16px 21px 14px 1px rgba(0, 0, 0, 0.76);
  -moz-box-shadow: 16px 21px 14px 1px rgba(0, 0, 0, 0.76);
`;
