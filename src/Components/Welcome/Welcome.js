import { Button, Stack, Box, Tooltip } from "@mui/material";
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

  return (
    <Styled.WelcomeContainer>
      <Stack
        textAlign="center"
        width="100vw"
        alignItems="center"
        justifyContent="end"
      >
        <Styled.WelcomeTitle>Welcome to Eden</Styled.WelcomeTitle>
        <Styled.WelcomeSubtitle>
          10,000 unique artist inspired leaves altered by an advanced AI art
          engine
        </Styled.WelcomeSubtitle>
      </Stack>
      <Box
        display="grid"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Tooltip
          title="Coming Soon"
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
      <Stack direction="row" className="image-gallery" spacing={5}>
        {shuffledImages.map((image, index) => (
          <img
            className="gallery-leaves"
            key={index}
            src={image}
            alt="gallery leaves"
          />
        ))}
      </Stack>
    </Styled.WelcomeContainer>
  );
};
