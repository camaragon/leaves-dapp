import styled from "styled-components";
import { Link } from "@mui/material";

export const HomepageContainer = styled.section`
  display: grid;
  grid: 1fr 6fr / 1fr;
  height: 100vh;
  background-color: #0ca789;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid: 1fr / 1fr 3fr;
  backdrop-filter: blur(10px);
  background-color: transparent;
`;

export const MintContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  && {
    color: #ffffff;
    background-color: rgba(255, 252, 237, 0.2);
    padding: 0.5rem 1rem 2.25rem 1rem;
    white-space: nowrap;
    font-size: 1.25em;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
  }
`;
