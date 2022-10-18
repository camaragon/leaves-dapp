import { Typography, Stack } from "@mui/material";
import beachLeaf from "../../Images/beach-leaf.png";
import fallLeaf from "../../Images/fall-leaf.webp";
import pinkLeaf from "../../Images/pink-leaf.webp";
import undergroundBackground from "../../Images/underground.png";
import "./LeafChallenge.css";
import React, { useState, useEffect } from "react";

export const LeafChallenge = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 5000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.resolve(() => loadImage(undergroundBackground))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <section id="leaf-challenge" style={{ height: "100vh", width: "100vw" }}>
      {imgsLoaded && (
        <img
          src={undergroundBackground}
          alt="a glowing tree"
          className="underground-background"
          style={{ position: "absolute" }}
        />
      )}
      <Stack
        height="100vh"
        width="100vw"
        display="grid"
        gridTemplateRows="1fr 2fr"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          alignItems="center"
          zIndex="2"
          textAlign="center"
          alignSelf="end"
        >
          <Typography
            variant="h2"
            fontWeight="900"
            color="common.white"
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "transparent",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            The Leaf Challenge
          </Typography>
          <Typography
            fontSize="1.5rem"
            fontWeight="900"
            width="75%"
            color="common.white"
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "transparent",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            We've hidden some identical leaves within the collection, collect
            them to win 0.25 ETH per matching leaf.
          </Typography>
        </Stack>
        <Stack
          zIndex={2}
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          justifyItems="start"
          alignSelf="start"
        >
          <Stack className="leaf-images" dispay="grid" alignItems="center">
            <img
              id="moving-up"
              style={{
                borderRadius: "20%",
                margin: "5rem 0 0 0",
                border: "5px solid white",
              }}
              src={beachLeaf}
              alt="leaf on the beach"
            />
            <img
              id="moving-down"
              style={{
                borderRadius: "20%",
                margin: "-13rem 0 0 0",
                border: "5px solid white",
              }}
              src={beachLeaf}
              alt="leaf on the beach"
            />
          </Stack>
          <Stack className="leaf-images" dispay="grid" alignItems="center">
            <img
              id="moving-up"
              style={{
                borderRadius: "20%",
                margin: "5rem 0 0 0",
                border: "5px solid white",
              }}
              src={fallLeaf}
              alt="leaf on the beach"
            />
            <img
              id="moving-down"
              style={{
                borderRadius: "20%",
                margin: "-13rem 0 0 0",
                border: "5px solid white",
              }}
              src={fallLeaf}
              alt="leaf on the beach"
            />
          </Stack>
          <Stack className="leaf-images" dispay="grid" alignItems="center">
            <img
              id="moving-up"
              style={{
                borderRadius: "20%",
                margin: "5rem 0 0 0",
                border: "5px solid white",
              }}
              src={pinkLeaf}
              alt="leaf on the beach"
            />
            <img
              id="moving-down"
              style={{
                borderRadius: "20%",
                margin: "-13rem 0 0 0",
                border: "5px solid white",
              }}
              src={pinkLeaf}
              alt="leaf on the beach"
            />
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
};
