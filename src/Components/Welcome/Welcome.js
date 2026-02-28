import { Button, Stack, Box } from "@mui/material";
import "../../index.css";
import * as Styled from "./Welcome.styled";
import "./Welcome.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { useNavigate } from "react-router-dom";

function importAll(r) {
  return r.keys().map(r);
}

export const Welcome = ({ blockchain, getData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          10,000 unique artist inspired leaves altered by DALL-E
        </Styled.WelcomeSubtitle>
      </Stack>
      {blockchain.errorMsg !== "" && (
        <p style={{ color: "white", textAlign: "center", fontFamily: "EB Garamond", fontSize: "1.2rem", backgroundColor: "rgba(0,0,0,0.5)", padding: "10px", borderRadius: "8px", margin: "10px 20px" }}>
          ⚠️ {blockchain.errorMsg}
        </p>
      )}
      <Box
        display="grid"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <span style={{ width: "12rem", height: "5rem" }}>
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <Button
              variant="contained"
              onClick={(e) => {
                dispatch(connect());
                getData();
              }}
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
              Connect Wallet
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => navigate("/mint")}
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
