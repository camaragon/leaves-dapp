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
        style={{ height: "100%", position: "absolute" }}
      />
      <Stack
        height="100vh"
        width="100vw"
        display="grid"
        gridTemplateRows="3fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          alignItems="center"
          zIndex="3"
          position="relative"
          sx={{ top: 120 }}
          textAlign="center"
        >
          <Typography
            variant="h2"
            fontWeight="900"
            color="common.white"
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "transparent",
            }}
          >
            The Leaf Challenge
          </Typography>
          <Typography
            fontSize="1.5rem"
            fontWeight="900"
            width="50%"
            color="common.white"
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "transparent",
            }}
          >
            We've hidden some identical leaves within the collection, collect
            them to win 0.25 ETH per matching leaf.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          margin="8rem 0 0 0"
          spacing={18}
          zIndex="2"
          width="100vw"
        >
          <img
            height="250rem"
            width="250rem"
            style={{
              borderRadius: "20%",
              position: "relative",
              zIndex: 3,
              top: "5rem",
            }}
            src={beachLeaf}
            alt="leaf on the beach"
          />

          <img
            height="250rem"
            width="250rem"
            style={{
              borderRadius: "20%",
              position: "relative",
              zIndex: 3,
              top: "5rem",
            }}
            src={fallLeaf}
            alt="leaf on the beach"
          />

          <img
            height="250rem"
            width="250rem"
            style={{
              borderRadius: "20%",
              position: "relative",
              zIndex: 3,
              top: "5rem",
            }}
            src={pinkLeaf}
            alt="leaf on the beach"
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          margin="8rem 0 0 0"
          spacing={12}
          width="100vw"
        >
          <img
            className="leaf-images"
            height="250rem"
            width="250rem"
            style={{
              borderRadius: "20%",
              position: "relative",
              right: 70,
              bottom: 270,
              zIndex: 2,
            }}
            src={beachLeaf}
            alt="leaf on the beach"
          />
          <img
            className="leaf-images"
            height="250rem"
            width="250rem"
            style={{
              borderRadius: "20%",
              position: "relative",
              right: 20,
              bottom: 270,
              zIndex: 2,
            }}
            src={fallLeaf}
            alt="leaf on the beach"
          />
          <img
            className="leaf-images"
            height="250rem"
            width="250rem"
            style={{
              borderRadius: "20%",
              position: "relative",
              right: -20,
              bottom: 270,
              zIndex: 2,
            }}
            src={pinkLeaf}
            alt="leaf on the beach"
          />
        </Stack>
      </Stack>
    </section>
  );
};
