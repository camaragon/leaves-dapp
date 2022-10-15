import { Grid, Typography, Button, Stack, Box } from "@mui/material";
import "../../index.css";
import * as Styled from "./Welcome.styled";
import "./Welcome.css";

function importAll(r) {
  return r.keys().map(r);
}

export const Welcome = () => {
  const images = importAll(require.context("../../Images/nft-images", false));

  const shuffledImages = images
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  console.log(shuffledImages.length);

  return (
    <Styled.WelcomeContainer>
      <Stack textAlign="center" width="100vw">
        <Typography variant="h1" color="common.white">
          Welcome to Eden
        </Typography>
        <Typography
          fontSize="2rem"
          color="common.white"
          padding="0 25rem"
          fontWeight="bold"
        >
          10,000 unique artist inspired leaves altered by advanced AI art
          engines
        </Typography>
      </Stack>
      <Box display="grid" width="100vw" alignItems="center">
        <Button
          variant="contained"
          // disabled
          sx={{
            backgroundColor: "#8ED14E",
            width: "10rem",
            height: "3rem",
            justifySelf: "center",
            alignSelf: "center",
            fontWeight: "bold",
            fontFamily: "EB Garamond",
            borderRadius: "5rem",
          }}
        >
          Mint
        </Button>
      </Box>
      <Stack direction="row" className="image-gallery" spacing={4}>
        {shuffledImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery leaves"
            height="225rem"
            width="225rem"
            style={{ borderRadius: "2rem" }}
          />
        ))}
      </Stack>
    </Styled.WelcomeContainer>
  );
};

{
  /* <Box
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
        </Box> */
}
