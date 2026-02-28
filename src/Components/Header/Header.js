import leafLogo from "../../Images/leaf-logo-2.png";
import { Stack, Button, Tooltip } from "@mui/material";
import * as Styled from "./Header.styled";
import twitterIcon from "../../Images/twitter.svg";
import discordIcon from "../../Images/discord.svg";
import "./Header.css";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = ({
  blockchain,
  getData,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  const navigate = useNavigate();

  const highlightViewportSectionLink = () => {
    const sectionsList = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav > a");
    sectionsList.forEach((section, index) => {
      if (index > 0 && navLinks.length > 1) {
        const coord = section.getBoundingClientRect();
        const relevantLink = navLinks[index - 1];
        if (coord.top < window.innerHeight / 2 && coord.top > 0) {
          relevantLink.classList.add("active-link");
        } else if (coord.top > window.innerHeight / 2) {
          relevantLink.classList.remove("active-link");
        } else if (coord.bottom > window.innerHeight / 2) {
          relevantLink.classList.add("active-link");
        } else if (coord.bottom < window.innerHeight / 2 && coord.bottom > 0) {
          relevantLink.classList.remove("active-link");
        }
      }
    });
  };

  highlightViewportSectionLink();
  window.addEventListener("scroll", highlightViewportSectionLink);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  });

  const handleMobileLinkClick = () => setIsMobileMenuOpen(false);

  setTimeout(() => setIsTooltipOpen(false), 8000);

  const isConnected = blockchain.account !== "" && blockchain.smartContract !== null;

  return (
    <>
      {windowWidth >= 1200 || window.innerWidth >= 1200 ? (
        <Styled.HeaderContainer>
          <img
            src={leafLogo}
            alt="leaf logo"
            height="80rem"
            width="80rem"
            style={{ margin: "0.5rem 0 0 3rem", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          {window.location.pathname !== "/mint" && (
            <Stack
              component="nav"
              direction="row"
              justifyContent="space-around"
              height="20%"
              margin="2rem 0 0 1rem"
              spacing={2}
            >
              <Styled.NavLink className="nav-link" href="#welcome">Welcome</Styled.NavLink>
              <Styled.NavLink className="nav-link" href="#leaf-challenge">Leaf Challenge</Styled.NavLink>
              <Styled.NavLink className="nav-link" href="#tree-fund">Tree Fund</Styled.NavLink>
              <Styled.NavLink className="nav-link" href="#faq">FAQ</Styled.NavLink>
              <Tooltip title="Check out the LeafPaper V1" arrow open={isTooltipOpen} sx={{ backgroundColor: "primary.green" }}>
                <Styled.NavLink className="nav-link" href="https://pdfhost.io/v/x6gCrTzsc_10000LEAVES_Whitepaper" target="_blank">LeafPaper</Styled.NavLink>
              </Tooltip>
              <Styled.IconLink target="_blank" href="https://twitter.com/_10000_LEAVES_" backgroundColor="rgba(255, 252, 237, 0.2)">
                <img height="23rem" src={twitterIcon} alt="twitter icon" />
              </Styled.IconLink>
              <Styled.IconLink target="_blank" href="https://discord.gg/M94j9Ergy3" backgroundColor="rgba(255, 252, 237, 0.2)">
                <img height="23rem" src={discordIcon} alt="discord icon" />
              </Styled.IconLink>
            </Stack>
          )}
          <div style={{ margin: "1.5rem 1rem 0 0" }}>
            {isConnected && window.location.pathname !== "/mint" ? (
              <Button variant="contained" onClick={() => navigate("/mint")}
                sx={{ backgroundColor: "#8ED14E", width: "10rem", height: "3rem", fontWeight: "bold", fontFamily: "EB Garamond" }}>
                Mint
              </Button>
            ) : isConnected ? (
              <Button variant="contained" onClick={() => navigate("/")}
                sx={{ backgroundColor: "#8ED14E", width: "10rem", height: "3rem", fontWeight: "bold", fontFamily: "EB Garamond" }}>
                Back Home
              </Button>
            ) : (
              <ConnectButton.Custom>
                {({ openConnectModal }) => (
                  <Button variant="contained" onClick={openConnectModal}
                    sx={{ backgroundColor: "#8ED14E", width: "10rem", height: "3rem", fontWeight: "bold", fontFamily: "EB Garamond", color: "white" }}>
                    Connect Wallet
                  </Button>
                )}
              </ConnectButton.Custom>
            )}
          </div>
        </Styled.HeaderContainer>
      ) : (
        <Styled.HeaderContainer isMobileMenuOpen={isMobileMenuOpen}>
          <Styled.MobileHeader>
            <img onClick={() => navigate("/")} src={leafLogo} alt="leaf logo" height="80rem" width="80rem" />
            <Hamburger color="white" size={40} toggled={isMobileMenuOpen} toggle={setIsMobileMenuOpen} />
          </Styled.MobileHeader>
          {isMobileMenuOpen && (
            <Styled.MobileMenu>
              <Styled.MobileNavLink className="nav-link" onClick={handleMobileLinkClick} href="#welcome">Welcome</Styled.MobileNavLink>
              <Styled.MobileNavLink className="nav-link" onClick={handleMobileLinkClick} href="#leaf-challenge">Leaf Challenge</Styled.MobileNavLink>
              <Styled.MobileNavLink className="nav-link" onClick={handleMobileLinkClick} href="#tree-fund">Tree Fund</Styled.MobileNavLink>
              <Styled.MobileNavLink className="nav-link" onClick={handleMobileLinkClick} href="#faq">FAQ</Styled.MobileNavLink>
              <Styled.MobileIconLink target="_blank" href="https://twitter.com/_10000_LEAVES_" backgroundColor="rgba(255, 252, 237, 0.2)">
                <img height="30rem" src={twitterIcon} alt="twitter icon" />
              </Styled.MobileIconLink>
              <Styled.MobileIconLink target="_blank" href="https://discord.gg/M94j9Ergy3" backgroundColor="rgba(255, 252, 237, 0.2)">
                <img height="30rem" src={discordIcon} alt="discord icon" />
              </Styled.MobileIconLink>
              <div style={{ margin: "1rem 0 0 0", display: "flex", justifyContent: "center" }}>
                <ConnectButton.Custom>
                  {({ openConnectModal }) => (
                    <Button variant="contained" onClick={openConnectModal}
                      sx={{ backgroundColor: "#8ED14E", width: "272px", height: "3rem", fontWeight: "bold", fontFamily: "EB Garamond", color: "white" }}>
                      Connect Wallet
                    </Button>
                  )}
                </ConnectButton.Custom>
              </div>
            </Styled.MobileMenu>
          )}
        </Styled.HeaderContainer>
      )}
    </>
  );
};
