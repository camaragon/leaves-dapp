import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import * as Styled from "./Homepage.styled";

export const Homepage = () => {
  return (
    <Styled.HomepageContainer>
      {/* <Styled.HeaderContainer>
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
      </Styled.HeaderContainer> */}
      <Styled.MintContainer alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#8ED14E", width: "10rem", height: "3rem" }}
        >
          Mint
        </Button>
      </Styled.MintContainer>
    </Styled.HomepageContainer>
  );
};
