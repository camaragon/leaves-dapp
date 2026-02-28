import { Button, Stack, Box } from "@mui/material";
import "../../index.css";
import * as Styled from "./Welcome.styled";
import "./Welcome.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { connect, NO_WALLET } from "../../redux/blockchain/blockchainActions";
import { useNavigate } from "react-router-dom";
import { WalletModal } from "../WalletModal/WalletModal";

function importAll(r) {
  return r.keys().map(r);
}

export const Welcome = ({ blockchain, getData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showWalletModal, setShowWalletModal] = useState(false);
  const images = importAll(require.context("../../Images/nft-images", false));

  const shuffledImages = images
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const handleConnect = () => {
    dispatch(connect()).then(() => {
      // Check if the error was NO_WALLET after dispatch
    });
    getData();
  };

  // Show modal if error is the no-wallet sentinel
  const isNoWallet = blockchain.errorMsg === NO_WALLET;
  const hasError = blockchain.errorMsg !== "" && blockchain.errorMsg !== NO_WALLET;

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
      {hasError && (
        <p style={{ color: "white", textAlign: "center", fontFamily: "EB Garamond", fontSize: "1.1rem", backgroundColor: "rgba(0,0,0,0.5)", padding: "10px 20px", borderRadius: "8px", margin: "10px auto", maxWidth: "500px" }}>
          {blockchain.errorMsg}
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
              onClick={() => {
                if (!window.ethereum) {
                  setShowWalletModal(true);
                } else {
                  handleConnect();
                }
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
      <WalletModal
        isOpen={showWalletModal || isNoWallet}
        onClose={() => {
          setShowWalletModal(false);
          dispatch({ type: "CLEAR_ERROR" });
        }}
      />
    </Styled.WelcomeContainer>
  );
};
