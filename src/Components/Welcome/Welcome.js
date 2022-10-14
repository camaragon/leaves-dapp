import { Grid, Typography, Stack, Box } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import goldLeaf from "../../Images/gold-leaf.webp";
import leafSketch from "../../Images/sketch-leaf.png";
import "../../index.css";
import * as Styled from "./Welcome.styled";

export const Welcome = () => {
  return (
    <Grid
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
        alignSelf="start"
      >
        <Typography variant="h1">Welcome to Eden</Typography>
        <Typography fontSize="2rem">The Prelude</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="grid"
        gridTemplateColumns="4fr 1fr 4fr"
        justifyItems="center"
        textAlign="center"
      >
        <Stack alignItems="center" justifySelf="end" spacing={1} width="25rem">
          <img
            src={leafSketch}
            height="225rem"
            width="225rem"
            style={{ borderRadius: "7rem", margin: "0 0 3rem 0" }}
            alt="a gold leaf"
          />
          <Typography variant="h4">Started with a sketch</Typography>
          <Typography fontWeight="bold">
            Our NFTs started from a single sketch
          </Typography>
        </Stack>
        <Box
          display="flex"
          flexDirection="column"
          height="20rem"
          width="30rem"
          justifyContent="center"
          sx={{ color: "transparent", "&:hover": { color: "primary.gold" } }}
          color="primary.gold"
        >
          <Typography
            fontSize="1.5rem"
            fontFamily="Dancing Script"
            fontWeight="bold"
          >
            ONE LEAF EQUALS ONE ENTRY FIND THE LEAVES THE PRELUDE IS JUST THE
            BEGINNING
          </Typography>
          <Styled.TwitterLink
            className=""
            target="_blank"
            href="https://twitter.com/search?q=%23FINDTHELEAVES&src=typeahead_click"
          >
            #FINDTHELEAVES
          </Styled.TwitterLink>
        </Box>
        <Stack
          alignItems="center"
          justifySelf="start"
          spacing={1}
          width="25rem"
        >
          <img
            src={goldLeaf}
            height="225rem"
            width="225rem"
            style={{ borderRadius: "7rem", margin: "0 0 3rem 0" }}
            alt="a beach leaf"
          />
          <Typography variant="h4">AI Interpretation</Typography>
          <Typography fontWeight="bold">
            AI generated NFTs based on our sketch
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
