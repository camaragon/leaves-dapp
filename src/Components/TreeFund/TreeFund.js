import { Grid, Stack, Typography } from "@mui/material";
import treeFund from "../../Images/tree.png";
import React, { useState } from "react";
import * as Styled from "./TreeFund.styled";

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
      <Stack display="grid" alignItems="start" justifyItems="center">
        <Typography
          variant="h2"
          fontWeight="900"
          position="relative"
          color="primary.gold"
          sx={{ top: 155 }}
        >
          *The Founders Fund
        </Typography>
        <Typography variant="h2" fontWeight="900" color="common.white">
          Tree Fund
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
            direction="column"
            justifyContent="center"
            textAlign="center"
            height="15rem"
          >
            <Typography fontSize="1.5rem" fontWeight="900" color="common.white">
              A community fund that will grow as we grow. Every project we work
              on will expand our vision and add a cut to this origin fund
              starting with 25 Eth from Leaves
            </Typography>
            {scroll >= 12 && (
              <Typography
                fontSize="1.5rem"
                fontWeight="900"
                color="primary.gold"
              >
                AN EXCLUSIVE FUND FOR THE MOST LOYAL
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} display="grid" justifyContent="center">
            <img
              src={treeFund}
              height="380rem"
              width="380rem"
              style={{ borderRadius: "50%" }}
              alt="golden tree"
            ></img>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            direction="column"
            justifyContent="center"
            textAlign="center"
            height="15rem"
          >
            {scroll >= 85 && (
              <Typography
                fontSize="1.5rem"
                fontWeight="900"
                color="primary.gold"
              >
                BOTH TREE AND FOUNDERS FUNDS
              </Typography>
            )}
            <Typography fontSize="1.5rem" fontWeight="900" color="common.white">
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
            <img
              src={treeFund}
              height="380rem"
              width="380rem"
              style={{ borderRadius: "50%" }}
              alt="golden tree"
            ></img>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            direction="column"
            justifyContent="center"
            textAlign="center"
            height="15rem"
          >
            {scroll >= 48 && (
              <Typography
                fontSize="1.5rem"
                fontWeight="900"
                color="primary.gold"
              >
                250 WILL BE CHOSEN
              </Typography>
            )}
            <Typography fontSize="1.5rem" fontWeight="900" color="common.white">
              Community driven based on NFT holder votes that can be used to
              fund holder projects, host events, and more
            </Typography>
            {scroll >= 48 && (
              <Typography
                fontSize="1.5rem"
                fontWeight="900"
                color="primary.gold"
              >
                GRANTED INFLUENCE
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} display="grid" justifyItems="center">
            <img
              src={treeFund}
              height="380rem"
              width="380rem"
              style={{ borderRadius: "50%" }}
              alt="golden tree"
            ></img>
          </Grid>
        </Grid>
      </Styled.TimelineContainer>
    </Styled.TreeFundContainer>
  );
};
