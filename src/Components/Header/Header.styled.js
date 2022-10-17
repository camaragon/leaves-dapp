import styled from "styled-components";
import { Link, Stack } from "@mui/material";

export const HeaderContainer = styled.header`
  position: fixed;
  display: grid;
  grid: 1fr / 1fr 2fr 1fr;
  height: 12vh;
  width: 100vw;
  z-index: 90;
  backdrop-filter: blur(10px);
  background-color: transparent;

  @media (max-width: 900px) {
    display: grid;
    grid: 1fr / 1fr;
  }
`;

export const NavLink = styled.a`
  && {
    color: #ffffff;
    background-color: rgba(255, 252, 237, 0.2);
    padding: 0.5rem 1rem 2.25rem 1rem;
    white-space: nowrap;
    font-size: 1.25em;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;
    text-shadow: 2px 2px 4px #000000;

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

    @media (max-width: 900px) {
      margin: 0.25rem 0 0 2rem;
      height: 0;
    }
  }
`;

export const MobileHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12vh;
  margin; 0;
`;
