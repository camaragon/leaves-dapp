import { Button, Typography } from "@mui/material";
import * as Styled from "./Homepage.styled";
import tree from "../../Images/background.png";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <Styled.HomepageContainer>
      <img
        src={tree}
        alt="a glowing tree"
        className="homepage-background"
        height="contain"
        style={{ height: "100%" }}
      />
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          zIndex: "1",
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px #000000",
        }}
      >
        EDEN: Prelude
      </Typography>
      {/* <Styled.MintContainer alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#8ED14E",
            width: "10rem",
            height: "3rem",
          }}
        >
          Mint
        </Button>
      </Styled.MintContainer> */}
    </Styled.HomepageContainer>
  );
};
