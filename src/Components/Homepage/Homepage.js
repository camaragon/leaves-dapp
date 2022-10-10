import { Button, Grid, Stack, Typography } from "@mui/material";
import * as Styled from "./Homepage.styled";
import leafLogo from "../../Images/leaf-logo.png";

export const Homepage = () => {
  return (
    <Styled.HomepageContainer>
      <Styled.HeaderContainer>
        <img
          src={leafLogo}
          alt="leaf logo"
          height="70rem"
          width="80rem"
          style={{ margin: "2rem 0 0 2rem" }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          width="40%"
          justifySelf="end"
          margin="2rem 2rem 0 0"
        >
          <Typography variant="h6" fontWeight="bold">
            Trees
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Leaves
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            FAQ
          </Typography>
        </Stack>
      </Styled.HeaderContainer>
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
