import leafLogo from "../../Images/green-leaf-logo.png";
import { Stack, Button } from "@mui/material";
import * as Styled from "./Header.styled";
import { useEffect, useState } from "react";
import { ScoreOutlined } from "@mui/icons-material";
import twitterIcon from "../../Images/twitter.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import openseaIcon from "../../Images/opensea.svg";
import { Link as RouterLink } from "react-router-dom";

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

  return (
    <Styled.HeaderContainer>
      <img
        src={leafLogo}
        alt="leaf logo"
        height="100rem"
        width="100rem"
        style={{ margin: "0 0 0 4rem" }}
      />
      <Stack
        component="nav"
        direction="row"
        height="20%"
        margin="2rem 0 0 0"
        spacing={5}
      >
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 500 && scrollPosition < 1200
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#welcome"
        >
          Welcome
        </Styled.NavLink>
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 1200 && scrollPosition < 2100
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#tree-fund"
        >
          Tree Fund
        </Styled.NavLink>
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 2100 && scrollPosition < 2800
              ? "rgb(142, 209, 78)"
              : "rgba(255, 252, 237, 0.2)"
          }
          href="#leaf-challenge"
        >
          Leaf Challenge
        </Styled.NavLink>
        <Styled.NavLink
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
        </Styled.NavLink>
        <Styled.NavLink
          backgroundColor={
            scrollPosition > 4700
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
