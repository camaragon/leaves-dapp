import * as Styled from "./Mint.styled";
import { Button, Stack, Typography, Link, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const Mint = ({
  blockchain,
  claimNFTs,
  claimingNft,
  CONFIG,
  data,
  feedback,
  mintAmount,
  setMintAmount,
}) => {
  const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  return (
    <Styled.MintSection>
      <Styled.MintContainer spacing={4}>
        <Typography fontWeight="bold" variant="h2">
          {data.totalSupply} / {CONFIG.MAX_SUPPLY}
        </Typography>
        {/* <Link target={"_blank"} href={CONFIG.MARKETPLACE_LINK} underline="none">
          {CONFIG.MARKETPLACE}
        </Link> */}
        <Link target={"_blank"} href={CONFIG.SCAN_LINK} underline="none">
          {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
        </Link>
        <Typography variant="h4" fontWeight="bold">
          1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}
        </Typography>
        <Typography fontSize="1.2rem">Excluding gas fees.</Typography>
        <Typography>
          {blockchain.errorMsg !== "" ? blockchain.errorMsg : feedback}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={3}>
          {/* <Button sx={{ backgroundColor: "#8ED14E" }}>-</Button> */}
          <IconButton
            disabled={mintAmount === 1}
            onClick={decrementMintAmount}
            sx={{ backgroundColor: "#8ED14E" }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography>{mintAmount}</Typography>
          <IconButton
            disabled={mintAmount === 5}
            onClick={incrementMintAmount}
            sx={{ backgroundColor: "#8ED14E" }}
          >
            <AddIcon />
          </IconButton>
        </Stack>
        <Button
          onClick={claimNFTs}
          sx={{ backgroundColor: "#8ED14E", color: "black" }}
        >
          BUY
        </Button>
      </Styled.MintContainer>
    </Styled.MintSection>
  );
};
