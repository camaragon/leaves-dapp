import { Typography, Button, Stack, Box } from "@mui/material";
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
        <Typography
          variant="h1"
          color="common.white"
          fontWeight="900"
          sx={{ textShadow: "2px 2px 4px #000000" }}
        >
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
