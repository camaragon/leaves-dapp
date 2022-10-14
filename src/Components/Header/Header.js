import leafLogo from "../../Images/green-leaf-logo.png";
import { Stack, Button } from "@mui/material";
import * as Styled from "./Header.styled";
import { useEffect, useState } from "react";
import twitterIcon from "../../Images/twitter.svg";
import openseaIcon from "../../Images/opensea.svg";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  return (
    <Styled.HeaderContainer>
      <img
        src={leafLogo}
        alt="leaf logo"
        height="100rem"
        width="100rem"
        style={{ margin: "0 0 0 4rem", transform: "rotate(270deg)" }}
      />
      <Stack
        component="nav"
        direction="row"
        height="15%"
        margin="2rem 0 0 0"
        spacing={5}
      >
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 300 && scrollPosition < 1000
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#welcome"
        >
          Welcome
        </Styled.NavLink>
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 1000 && scrollPosition < 1600
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#leaf-challenge"
        >
          Leaf Challenge
        </Styled.NavLink>
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 1600 && scrollPosition < 2300
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#tree-fund"
        >
          Tree Fund
        </Styled.NavLink>
        {/* <Styled.NavLink
          backgroundColor={
            scrollPosition > 2800 && scrollPosition < 3800
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#redacted"
        >
          [redacted]
        </Styled.NavLink>
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 3800 && scrollPosition < 4700
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#methodology"
        >
          Methodology
        </Styled.NavLink> */}
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 2300
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#faq"
        >
          FAQ
        </Styled.NavLink>
        <Styled.IconLink
          target="_blank"
          href="https://twitter.com/_10000_LEAVES_"
          backgroundColor="rgba(255, 252, 237, 0.2)"
          // sx={{
          //   "&:hover": {
          //     color: "white",
          //   },
          // }}
        >
          <img height="23rem" src={twitterIcon} />
        </Styled.IconLink>
        <Styled.IconLink
          target="_blank"
          href="https://opensea.io/"
          backgroundColor="rgba(255, 252, 237, 0.2)"
        >
          <img height="23rem" src={openseaIcon} />
        </Styled.IconLink>
      </Stack>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#8ED14E",
          width: "10rem",
          height: "3rem",
          justifySelf: "center",
          margin: "2rem 0 0 0",
          fontWeight: "bold",
          fontFamily: "EB Garamond",
        }}
      >
        Connect Wallet
      </Button>
    </Styled.HeaderContainer>
  );
};
