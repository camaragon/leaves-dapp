import leafLogo from "../../Images/leaf-logo-2.png";
import { Stack, Button, Tooltip, Typography } from "@mui/material";
import * as Styled from "./Header.styled";
import twitterIcon from "../../Images/twitter.svg";
// import openseaIcon from "../../Images/opensea.svg";
import "./Header.css";
import { useEffect, useState } from "react";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const highlightViewportSectionLink = () => {
    const sectionsList = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(`nav > a`);
    sectionsList.forEach((section, index) => {
      /* does not include the first section */
      if (index > 0 && navLinks.length) {
        /* coordinates of the section */
        const coord = section.getBoundingClientRect();

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      {windowWidth >= 900 || windowWidth === 0 ? (
        <Styled.HeaderContainer>
          <img
            src={leafLogo}
            alt="leaf logo"
            height="80rem"
            width="80rem"
            style={{ margin: "0.5rem 0 0 3rem" }}
          />
          <Stack
            component="nav"
            direction="row"
            // alignItems="space-around"
            justifyContent="space-around"
            height="20%"
            margin="2rem 0 0 3rem"
            // spacing={10}
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
              <img height="23rem" src={twitterIcon} alt="twitter icon" />
            </Styled.IconLink>
            {/* <Styled.IconLink
          target="_blank"
          href="https://opensea.io/"
          backgroundColor="rgba(255, 252, 237, 0.2)"
        >
          <img height="23rem" src={openseaIcon} />
        </Styled.IconLink> */}
          </Stack>
          <Tooltip
            title="Coming Soon"
            // arrow
            followCursor
            sx={{
              backgroundColor: "primary.green",
            }}
          >
            <span
              style={{
                width: "10rem",
                height: "3rem",
                justifySelf: "center",
                margin: "2rem 0 0 0",
              }}
            >
              <Button
                variant="contained"
                disabled
                sx={{
                  backgroundColor: "#8ED14E",
                  width: "10rem",
                  height: "3rem",
                  fontWeight: "bold",
                  fontFamily: "EB Garamond",
                }}
              >
                Connect Wallet
              </Button>
            </span>
          </Tooltip>
        </Styled.HeaderContainer>
      ) : (
        <Styled.HeaderContainer>
          <Styled.MobileHeader>
            <Typography fontSize="2rem" fontWeight="900" color="common.white">
              Mobile Coming Very Soon...
            </Typography>
          </Styled.MobileHeader>
          {/* <Styled.MobileHeader>
            <img
              src={leafLogo}
              alt="leaf logo"
              height="80rem"
              width="80rem"
              style={{ margin: "0.5rem 0 0 3rem" }}
            />
            <Styled.IconLink
              target="_blank"
              href="https://twitter.com/_10000_LEAVES_"
              backgroundColor="rgba(255, 252, 237, 0.2)"
            >
              <img height="23rem" src={twitterIcon} />
            </Styled.IconLink>
          </Styled.MobileHeader> */}
        </Styled.HeaderContainer>
      )}
    </>
  );
};
