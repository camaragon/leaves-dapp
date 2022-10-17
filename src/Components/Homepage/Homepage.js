import { Typography } from "@mui/material";
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
        id="welcome"
        variant="h1"
        fontSize="7rem"
        sx={{
          position: "absolute",
          zIndex: "1",
          color: "white",
          fontWeight: "900",
          textShadow: "2px 2px 4px #000000",
          textAlign: "center",
        }}
      >
        EDEN: Prelude
      </Typography>
    </Styled.HomepageContainer>
  );
};
