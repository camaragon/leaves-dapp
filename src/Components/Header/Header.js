import leafLogo from "../../Images/green-leaf-logo.png";
import { Stack, Button } from "@mui/material";
import * as Styled from "./Header.styled";
import twitterIcon from "../../Images/twitter.svg";
import openseaIcon from "../../Images/opensea.svg";
import "./Header.css";

export const Header = () => {
  const highlightViewportSectionLink = () => {
    const sectionsList = document.querySelectorAll("section");
    sectionsList.forEach((section, index) => {
      /* does not include the first section */
      if (index > 0) {
        /* coordinates of the section */
        const coord = section.getBoundingClientRect();

        const navLinks = document.querySelectorAll(`nav > a`);

        const relevantLink = navLinks[index - 1];

        const addActiveSessionInfo = () => {
          relevantLink.classList.add("active-link");
        };

        const removeActiveSessionInfo = () => {
          relevantLink.classList.remove("active-link");
        };

        if (coord.top < window.innerHeight / 2 && coord.top > 0) {
          addActiveSessionInfo();
        } else if (coord.top > window.innerHeight / 2) {
          removeActiveSessionInfo();
        } else if (coord.bottom > window.innerHeight / 2) {
          addActiveSessionInfo();
        } else if (coord.bottom < window.innerHeight / 2 && coord.bottom > 0) {
          removeActiveSessionInfo();
        }
      }
    });
  };

  highlightViewportSectionLink();
  window.addEventListener("scroll", highlightViewportSectionLink);

  return (
    <Styled.HeaderContainer>
      <img
        src={leafLogo}
        alt="leaf logo"
        height="80rem"
        width="80rem"
        style={{ margin: "0.5rem 0 0 4rem", transform: "rotate(270deg)" }}
      />
      <Stack
        component="nav"
        direction="row"
        height="20%"
        margin="2rem 0 0 0"
        spacing={5}
      >
        <Styled.NavLink className="nav-link" href="#welcome">
          Welcome
        </Styled.NavLink>
        <Styled.NavLink className="nav-link" href="#leaf-challenge">
          Leaf Challenge
        </Styled.NavLink>
        <Styled.NavLink className="nav-link" href="#tree-fund">
          Tree Fund
        </Styled.NavLink>
        <Styled.NavLink className="nav-link" href="#faq">
          FAQ
        </Styled.NavLink>
        <Styled.IconLink
          target="_blank"
          href="https://twitter.com/_10000_LEAVES_"
          backgroundColor="rgba(255, 252, 237, 0.2)"
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
