import styled from "styled-components";
import { Link } from "@mui/material";

export const HeaderContainer = styled.header`
  position: fixed;
  display: grid;
  grid: 1fr / 1fr 2fr 1fr;
  height: 12vh;
  width: 100vw;
  z-index: 90;
  backdrop-filter: blur(10px);
  background-color: transparent;
`;

export const NavLink = styled(Link)`
  && {
    color: #ffffff;
    // background-color: rgba(255, 252, 237, 0.2);
    padding: 0.5rem 1rem 2.25rem 1rem;
    white-space: nowrap;
    font-size: 1.25em;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;

    &:hover {
      background-color: rgb(142, 209, 78);
      color: #ffffff;
    }
  }
`;

export const IconLink = styled.a`
  && {
    background-color: rgba(255, 252, 237, 0.2);
    padding: 0.5rem 1rem 2.25rem 1rem;
    white-space: nowrap;
    font-size: 1.25em;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;

    &:hover {
      background-color: rgb(142, 209, 78);
    }
  }
`;
