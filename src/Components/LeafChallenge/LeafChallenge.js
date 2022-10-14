import { Typography, Stack } from "@mui/material";
import beachLeaf from "../../Images/beach-leaf.png";
import fallLeaf from "../../Images/fall-leaf.webp";
import pinkLeaf from "../../Images/pink-leaf.webp";
import undergroundBackground from "../../Images/underground.png";
import "./LeafChallenge.css";

export const LeafChallenge = () => {
  return (
    <section id="leaf-challenge" style={{ height: "100vh" }}>
      <img
        src={undergroundBackground}
        alt="a glowing tree"
        className="underground-background"
        height="contain"
        style={{ height: "100%", position: "relative", zIndex: "1" }}
      />
      <Stack
        alignItems="center"
        zIndex="2"
        position="relative"
        sx={{ bottom: "40rem" }}
        textAlign="center"
      >
        <Typography
          variant="h2"
          fontWeight="900"
          backgroundColor="common.white"
          sx={{ backdropFilter: "blur(10px)", backgroundColor: "transparent" }}
        >
          The Leaf Challenge
        </Typography>
        <Typography
          fontSize="1.5rem"
          fontWeight="900"
          width="50%"
          sx={{ backdropFilter: "blur(10px)", backgroundColor: "transparent" }}
        >
          We've hidden some identical leaves within the collection, collect them
          to win 0.25 ETH per matching leaf.
        </Typography>
        <Stack direction="row" margin="8rem 0 0 0" spacing={12}>
          <img
            className="leaf-images"
            height="225rem"
            width="225rem"
            style={{
              borderRadius: "20%",
            }}
            src={beachLeaf}
            alt="leaf on the beach"
          />
          <img
            className="leaf-images"
            height="225rem"
            width="225rem"
            style={{
              borderRadius: "20%",
            }}
            src={fallLeaf}
            alt="leaf in fall"
          />
          <img
            className="leaf-images"
            height="225rem"
            width="225rem"
            style={{
              borderRadius: "20%",
            }}
            src={pinkLeaf}
            alt="a leaf in a pink room"
          />
        </Stack>
      </Stack>
    </section>
  );
};
