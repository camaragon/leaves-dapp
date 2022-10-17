import { Typography, Button, Stack, Box, Tooltip } from "@mui/material";
import "../../index.css";
import * as Styled from "./Welcome.styled";
import "./Welcome.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function importAll(r) {
  return r.keys().map(r);
}

export const Welcome = () => {
  const images = importAll(require.context("../../Images/nft-images", false));

  const shuffledImages = images
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <Styled.WelcomeContainer>
      <Stack
        textAlign="center"
        width="100vw"
        alignItems="center"
        justifyContent="end"
      >
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
          // padding="0 25rem"
          width="70%"
          fontWeight="bold"
          sx={{ textShadow: "2px 2px 4px #000000" }}
        >
          10,000 unique artist inspired leaves altered by an advanced AI art
          engine
        </Typography>
      </Stack>
      <Box
        display="grid"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Tooltip
          title="Coming Soon"
          // arrow
          followCursor
          sx={{ backgroundColor: "primary.green" }}
        >
          <span style={{ width: "12rem", height: "5rem" }}>
            <Button
              variant="contained"
              disabled
              sx={{
                backgroundColor: "#8ED14E",
                width: "100%",
                height: "100%",
                justifySelf: "center",
                alignSelf: "center",
                fontWeight: "bold",
                fontFamily: "EB Garamond",
                borderRadius: "5rem",
              }}
            >
              Mint
            </Button>
          </span>
        </Tooltip>
      </Box>
      <Stack direction="row" className="image-gallery" spacing={4}>
        {shuffledImages.map((image, index) => (
          <LazyLoadImage
            className="gallery-leaves"
            key={index}
            src={image}
            alt="gallery leaves"
            // height="90%"
            // width="100%"
            // height="250"
            // width="250"
            style={{ borderRadius: "2rem", margin: "0 0 2rem 2rem" }}
          />
        ))}
      </Stack>
    </Styled.WelcomeContainer>
  );
};
