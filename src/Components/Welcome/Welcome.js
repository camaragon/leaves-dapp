import { Button, Stack, Box } from "@mui/material";
import "../../index.css";
import * as Styled from "./Welcome.styled";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function importAll(r) {
  return r.keys().map(r);
}

export const Welcome = ({ blockchain, getData }) => {
  const navigate = useNavigate();
  const images = importAll(require.context("../../Images/nft-images", false));

  const shuffledImages = images
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const isConnected = blockchain.account !== "" && blockchain.smartContract !== null;

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
          10,000 unique artist inspired leaves altered by DALL-E
        </Styled.WelcomeSubtitle>
      </Stack>
      <Box
        display="grid"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <span style={{ minWidth: "12rem", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isConnected ? (
            <Button
              variant="contained"
              onClick={() => navigate("/mint")}
              sx={{
                backgroundColor: "#8ED14E",
                width: "12rem",
                height: "100%",
                fontWeight: "bold",
                fontFamily: "EB Garamond",
                borderRadius: "5rem",
              }}
            >
              Mint
            </Button>
          ) : (
            <ConnectButton.Custom>
              {({ openConnectModal }) => (
                <Button
                  variant="contained"
                  onClick={openConnectModal}
                  sx={{
                    backgroundColor: "#8ED14E",
                    width: "12rem",
                    height: "100%",
                    fontWeight: "bold",
                    fontFamily: "EB Garamond",
                    borderRadius: "5rem",
                  }}
                >
                  Connect Wallet
                </Button>
              )}
            </ConnectButton.Custom>
          )}
        </span>
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
