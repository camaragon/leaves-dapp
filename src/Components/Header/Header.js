import leafLogo from "../../Images/leaf-logo.png";
import { Stack } from "@mui/material";
import * as Styled from "./Header.styled";

export const Header = () => {
  return (
    <Styled.HeaderContainer>
      <img
        src={leafLogo}
        alt="leaf logo"
        height="70rem"
        width="80rem"
        style={{ margin: "2rem 0 0 2rem" }}
      />
      <Stack
        component="nav"
        direction="row"
        // justifyContent="space-between"
        height="20%"
        width="40%"
        // justifySelf="center"
        margin="2rem 2rem 0 0"
        spacing={8}
      >
        <Styled.NavLink>Welcome</Styled.NavLink>
        <Styled.NavLink>Tree Fund</Styled.NavLink>
        <Styled.NavLink>Leaf Challenge</Styled.NavLink>
        <Styled.NavLink>[redacted]</Styled.NavLink>
        <Styled.NavLink>Methodology</Styled.NavLink>
        <Styled.NavLink>FAQ</Styled.NavLink>
      </Stack>
    </Styled.HeaderContainer>
  );
};
