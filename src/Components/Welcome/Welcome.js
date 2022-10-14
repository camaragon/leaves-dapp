import { Grid, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import swirlLine from "../../Images/swirl-line.png";
import "../../index.css";

export const Welcome = () => {
  return (
    <Grid
      id="welcome"
      component="section"
      container
      height="75vh"
      backgroundColor="primary.main"
    >
      <Grid
        item
        xs={12}
        display="grid"
        alignContent="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h1">Welcome to Eden</Typography>
        <Typography fontSize="2rem">The Prelude</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        display="grid"
        alignContent="center"
        justifyItems="center"
        textAlign="center"
      >
        <ImageIcon fontSize="large" />
        <Typography variant="h4">Started with a single sketch</Typography>
        <Typography fontWeight="bold">
          Our NFTs started from a single sketch
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        display="grid"
        alignContent="center"
        justifyItems="center"
        textAlign="center"
      >
        <ImageIcon fontSize="large" />
        <Typography variant="h4">AI Interpretation</Typography>
        <Typography fontWeight="bold">
          AI generated NFTs based on our sketch
        </Typography>
      </Grid>
      {/* <img
        src={swirlLine}
        width="100%"
        height="50%"
        style={{ position: "relative", top: "12rem" }}
      /> */}
    </Grid>
  );
};
