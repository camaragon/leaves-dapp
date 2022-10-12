import styled from "styled-components";
import { Link } from "@mui/material";

export const HeaderContainer = styled.header`
  display: grid;
  grid: 1fr / 1fr 3fr;
  height: 100vh;
  z-index: 1;
  position: sticky;
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
