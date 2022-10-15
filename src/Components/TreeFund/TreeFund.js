import { Grid, Stack, Typography } from "@mui/material";
import treeFund from "../../Images/tree.png";
import React, { useState, useEffect } from "react";
import * as Styled from "./TreeFund.styled";
import ProgressBar from "react-scroll-progress-bar";

export const TreeFund = () => {
  const [scroll, setScroll] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onScroll = () => {
    const section = document.querySelector(".timeline");
    const top = section.getBoundingClientRect().top;
    const bottom = section.getBoundingClientRect().bottom;
    console.log(top);
    console.log(bottom);

    if (scrollPosition > top && scrollPosition < bottom) {
      const Scrolled = scrollPosition - top;
      const ScrollPercent =
        (Scrolled / section.getBoundingClientRect().height) * 100;
      setScroll(ScrollPercent);
    }

    // const Scrolled = section.offsetTop - document.body.scrollTop;
    // console.log(Scrolled);
    // console.log(section.clientHeight);
    // const MaxHeight = section.scrollHeight - section.clientHeight;
    // const ScrollPercent = (Scrolled / section.clientHeight) * 100;
  };

  // console.log(scroll);
  window.addEventListener("scroll", onScroll);

  return (
    <Styled.TreeFundContainer id="tree-fund">
      <Stack display="grid" alignItems="end" justifyItems="center">
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
          <Grid item xs={12} textAlign="center">
            <Typography fontSize="1.5rem" fontWeight="900" color="common.white">
              A community fund that will grow as we grow. Every project we work
              on will expand our vision and add a cut to this origin fund
              starting with 25 Eth from Leaves
            </Typography>
          </Grid>
          <Grid item xs={12} display="grid" justifyContent="center">
            <img
              src={treeFund}
              height="320rem"
              width="320rem"
              style={{ borderRadius: "50%" }}
            ></img>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography fontSize="1.5rem" fontWeight="900" color="common.white">
              Gatekeepers will get 5 votes per NFT, remaining holders get 1 vote
              per NFT
            </Typography>
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
              height="320rem"
              width="320rem"
              style={{ borderRadius: "50%" }}
            ></img>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography fontSize="1.5rem" fontWeight="900" color="common.white">
              Community driven based on NFT holder votes that can be used to
              fund holder projects, host events, and more
            </Typography>
          </Grid>
          <Grid item xs={12} display="grid" justifyItems="center">
            <img
              src={treeFund}
              height="320rem"
              width="320rem"
              style={{ borderRadius: "50%" }}
            ></img>
          </Grid>
        </Grid>
      </Styled.TimelineContainer>
    </Styled.TreeFundContainer>

    // <Grid
    //   id="tree-fund"
    //   component="section"
    //   container
    //   height="200vh"
    //   backgroundColor="primary.main"
    // >
    //   <Grid
    //     item
    //     xs={4}
    //     display="grid"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <img
    //       src={treeFund}
    //       alt="a cartoonish gold glowing tree with leaves"
    //       height="400rem"
    //       style={{ borderRadius: "6rem" }}
    //     />
    //   </Grid>
    //   <Grid
    //     item
    //     xs={4}
    //     display="grid"
    //     height="60%"
    //     spacing={3}
    //     alignSelf="center"
    //     textAlign="center"
    //   >
    //     <Typography variant="h2" fontWeight="900">
    //       Tree Fund
    //     </Typography>
    //     <Typography fontSize="1.25rem" fontWeight="bold">
    //       A community fund that will grow as we grow. Every project we work on
    //       will expand our vision and add a cut to this origin fund starting with
    //       25 Eth from Leaves
    //     </Typography>
    //     <Typography fontSize="1.25rem" fontWeight="bold">
    //       Community driven based on NFT holder votes that can be used to fund
    //       holder projects, host events, and more
    //     </Typography>
    //     <Typography fontSize="1.25rem" fontWeight="bold">
    //       Gatekeepers will get 5 votes per NFT, remaining holders get 1 vote per
    //       NFT
    //     </Typography>
    //   </Grid>
    //   <Grid
    //     item
    //     xs={4}
    //     display="grid"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <img
    //       src={treeFund}
    //       alt="a cartoonish gold glowing tree with leaves"
    //       height="400rem"
    //       style={{ borderRadius: "6rem" }}
    //     />
    //   </Grid>
    // </Grid>
  );
};
