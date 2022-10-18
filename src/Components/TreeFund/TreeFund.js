import { Grid, Stack, Typography } from "@mui/material";
import treeFund from "../../Images/tree.png";
import React, { useState } from "react";
import * as Styled from "./TreeFund.styled";
import greenTree from "../../Images/green-green-tree.png";
import redTree from "../../Images/red-green-tree.png";

export const TreeFund = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const section = document.querySelector(".timeline");
    const scrollPosition =
      section.getBoundingClientRect().top - window.innerHeight / 2;
    if (scrollPosition <= 0) {
      const Scrolled = Math.abs(scrollPosition);
      const ScrollPercent =
        (Scrolled / section.getBoundingClientRect().height) * 100;
      setScroll(ScrollPercent);
    } else {
      setScroll(0);
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <Styled.TreeFundContainer id="tree-fund">
      <Stack
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="end"
      >
        <Typography
          variant="h2"
          fontWeight="900"
          fontSize="500%"
          color="common.white"
          sx={{ textShadow: "2px 2px 4px #000000" }}
        >
          Tree Fund
        </Typography>

        <Typography
          variant="h3"
          fontWeight="900"
          fontSize="300%"
          color="primary.gold"
          sx={{
            textShadow: "2px 2px 4px #000000",
          }}
        >
          [The Founders Fund]
        </Typography>
      </Stack>
      <Styled.TimelineContainer className="timeline">
        <Grid
          container
          display="grid"
          justifyItems="space-around"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="15rem"
          >
            <Typography
              fontSize="180%"
              fontWeight="900"
              color="common.white"
              sx={{
                textShadow: "2px 2px 4px #000000",
                // ["@media (max-height:800px)"]: { fontSize: "140%" },
              }}
            >
              A community fund that will grow as we grow. Every project we work
              on will expand our vision and add a cut to this origin fund
              starting with 25 Eth from Leaves
            </Typography>
            {scroll >= 12 && (
              <Typography
                fontSize="180%"
                fontWeight="900"
                color="primary.gold"
                sx={{
                  textShadow: "2px 2px 4px #000000",
                  // ["@media (max-height:800px)"]: { fontSize: "140%" },
                }}
              >
                AN EXCLUSIVE FUND FOR THE MOST LOYAL
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} display="grid" justifyContent="center">
            <Styled.TreeImages
              src={treeFund}
              alt="golden tree"
            ></Styled.TreeImages>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="15rem"
          >
            {scroll >= 85 && (
              <Typography
                fontSize="180%"
                fontWeight="900"
                color="primary.gold"
                sx={{
                  textShadow: "2px 2px 4px #000000",
                  // ["@media (max-height:800px)"]: { fontSize: "140%" },
                }}
              >
                BOTH TREE AND FOUNDERS FUNDS
              </Typography>
            )}
            <Typography
              fontSize="180%"
              fontWeight="900"
              color="common.white"
              sx={{
                textShadow: "2px 2px 4px #000000",
                // ["@media (max-height:800px)"]: { fontSize: "140%" },
              }}
            >
              Gatekeepers will get 5 votes per NFT, remaining holders get 1 vote
              per NFT
            </Typography>
            {scroll >= 85 && (
              <Styled.TwitterLink
                target="_blank"
                href="https://twitter.com/search?q=%23FINDTHELEAVES&src=typeahead_click"
              >
                #FINDTHELEAVES
              </Styled.TwitterLink>
            )}
          </Grid>
        </Grid>
        <Grid display="grid" justifyContent="center" padding="2rem 0">
          <Styled.PipelineContainer>
            <Styled.Pipeline style={{ height: `${scroll}%` }} />
          </Styled.PipelineContainer>
        </Grid>
        <Grid
          conatiner
          display="grid"
          justifyContent="space-around"
          alignItems="center"
          justifySelf="center"
        >
          <Grid item xs={12} display="grid" justifyItems="center">
            <Styled.TreeImages
              src={greenTree}
              alt="green tree"
            ></Styled.TreeImages>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="15rem"
          >
            {scroll >= 48 && (
              <Typography
                fontSize="180%"
                fontWeight="900"
                color="primary.gold"
                sx={{
                  textShadow: "2px 2px 4px #000000",
                  // ["@media (max-height:800px)"]: { fontSize: "140%" },
                }}
              >
                250 WILL BE CHOSEN
              </Typography>
            )}
            <Typography
              fontSize="180%"
              fontWeight="900"
              color="common.white"
              sx={{
                textShadow: "2px 2px 4px #000000",
                // ["@media (max-height:800px)"]: { fontSize: "140%" },
              }}
            >
              Community driven based on NFT holder votes that can be used to
              fund holder projects, host events, and more
            </Typography>
            {scroll >= 48 && (
              <Typography
                fontSize="180%"
                fontWeight="900"
                color="primary.gold"
                sx={{
                  textShadow: "2px 2px 4px #000000",
                  // ["@media (max-height:800px)"]: { fontSize: "140%" },
                }}
              >
                GRANTED INFLUENCE
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} display="grid" justifyItems="center">
            <Styled.TreeImages
              src={redTree}
              alt="golden tree"
            ></Styled.TreeImages>
          </Grid>
        </Grid>
      </Styled.TimelineContainer>
    </Styled.TreeFundContainer>
  );
};
