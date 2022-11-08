import leafLogo from "../../Images/leaf-logo-2.png";
import { Stack, Button, Tooltip } from "@mui/material";
import * as Styled from "./Header.styled";
import twitterIcon from "../../Images/twitter.svg";
import discordIcon from "../../Images/discord.svg";
// import openseaIcon from "../../Images/opensea.svg";
import "./Header.css";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
// import MenuIcon from "@mui/icons-material/Menu";

export const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const highlightViewportSectionLink = () => {
    const sectionsList = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(`nav > a`);
    sectionsList.forEach((section, index) => {
      /* does not include the first section */
      if (index > 0 && navLinks.length > 1) {
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

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  setTimeout(() => {
    setIsTooltipOpen(false);
  }, 8000);

  return (
    <>
      {windowWidth >= 1200 || window.innerWidth >= 1200 ? (
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
            justifyContent="space-around"
            height="20%"
            margin="2rem 0 0 1rem"
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
            <Tooltip
              title="Check out the new Discord!"
              arrow
              open={isTooltipOpen}
              // followCursor
              sx={{
                backgroundColor: "primary.green",
              }}
            >
              <Styled.IconLink
                target="_blank"
                href="https://discord.gg/M94j9Ergy3"
                backgroundColor="rgba(255, 252, 237, 0.2)"
              >
                <img height="23rem" src={discordIcon} alt="discord icon" />
              </Styled.IconLink>
            </Tooltip>
          </Stack>
          <Tooltip
            title="Coming Soon"
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
        <Styled.HeaderContainer isMobileMenuOpen={isMobileMenuOpen}>
          <Styled.MobileHeader>
            <img src={leafLogo} alt="leaf logo" height="80rem" width="80rem" />
            <Hamburger
              color="white"
              size={40}
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
            />
          </Styled.MobileHeader>
          {isMobileMenuOpen && (
            <Styled.MobileMenu>
              <Styled.MobileNavLink
                className="nav-link"
                onClick={handleMobileLinkClick}
                href="#welcome"
              >
                Welcome
              </Styled.MobileNavLink>
              <Styled.MobileNavLink
                className="nav-link"
                onClick={handleMobileLinkClick}
                href="#leaf-challenge"
              >
                Leaf Challenge
              </Styled.MobileNavLink>
              <Styled.MobileNavLink
                className="nav-link"
                onClick={handleMobileLinkClick}
                href="#tree-fund"
              >
                Tree Fund
              </Styled.MobileNavLink>
              <Styled.MobileNavLink
                className="nav-link"
                onClick={handleMobileLinkClick}
                href="#faq"
              >
                FAQ
              </Styled.MobileNavLink>
              <Styled.MobileIconLink
                target="_blank"
                href="https://twitter.com/_10000_LEAVES_"
                backgroundColor="rgba(255, 252, 237, 0.2)"
              >
                <img height="30rem" src={twitterIcon} alt="twitter icon" />
              </Styled.MobileIconLink>
              <Styled.MobileIconLink
                target="_blank"
                href="https://discord.gg/M94j9Ergy3"
                backgroundColor="rgba(255, 252, 237, 0.2)"
              >
                <img height="30rem" src={discordIcon} alt="discord icon" />
              </Styled.MobileIconLink>
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
                    width: "272px",
                    height: "3rem",
                    justifySelf: "center",
                    margin: "1rem 0 0 0",
                  }}
                >
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      backgroundColor: "#8ED14E",
                      width: "272px",
                      height: "3rem",
                      fontWeight: "bold",
                      fontFamily: "EB Garamond",
                    }}
                  >
                    Connect Wallet
                  </Button>
                </span>
              </Tooltip>
            </Styled.MobileMenu>
          )}
        </Styled.HeaderContainer>
      )}
    </>
  );
};
