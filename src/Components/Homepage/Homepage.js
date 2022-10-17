import { Typography } from "@mui/material";
import * as Styled from "./Homepage.styled";
import tree from "../../Images/background.png";
import "./Homepage.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useState, useEffect } from "react";

export const Homepage = () => {
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

    Promise.resolve(() => loadImage(tree))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);
  return (
    <Styled.HomepageContainer>
      {imgsLoaded && (
        <LazyLoadImage
          src={tree}
          alt="a glowing tree"
          className="homepage-background"
          height="100%"
        />
      )}
      <Typography
        id="welcome"
        variant="h1"
        fontSize="7rem"
        sx={{
          position: "absolute",
          zIndex: "1",
          color: "white",
          fontWeight: "900",
          textShadow: "2px 2px 4px #000000",
          textAlign: "center",
        }}
      >
        EDEN: Prelude
      </Typography>
    </Styled.HomepageContainer>
  );
};
