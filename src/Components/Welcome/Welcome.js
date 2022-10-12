import { Grid, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export const Welcome = () => {
  return (
    <Grid id="welcome" component="section" container height="75vh">
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
        <Typography variant="h4">AI Interperation</Typography>
        <Typography fontWeight="bold">
          AI generated NFTs based on our sketch
        </Typography>
      </Grid>
    </Grid>
  );
};
