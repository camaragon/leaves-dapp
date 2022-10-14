import { Grid, Typography } from "@mui/material";
import treeFund from "../../Images/tree-fund.png";

export const TreeFund = () => {
  return (
    <Grid
      id="tree-fund"
      component="section"
      container
      height="100vh"
      backgroundColor="primary.main"
    >
      <Grid
        item
        xs={4}
        display="grid"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={treeFund}
          alt="a cartoonish gold glowing tree with leaves"
          height="400rem"
          style={{ borderRadius: "6rem" }}
        />
      </Grid>
      <Grid
        item
        xs={4}
        display="grid"
        height="60%"
        spacing={3}
        alignSelf="center"
        textAlign="center"
      >
        <Typography variant="h2" fontWeight="900">
          Tree Fund
        </Typography>
        <Typography fontSize="1.25rem" fontWeight="bold">
          A community fund that will grow as we grow. Every project we work on
          will expand our vision and add a cut to this origin fund starting with
          25 Eth from Leaves
        </Typography>
        <Typography fontSize="1.25rem" fontWeight="bold">
          Community driven based on NFT holder votes that can be used to fund
          holder projects, host events, and more
        </Typography>
        <Typography fontSize="1.25rem" fontWeight="bold">
          Gatekeepers will get 5 votes per NFT, remaining holders get 1 vote per
          NFT
        </Typography>
      </Grid>
      <Grid
        item
        xs={4}
        display="grid"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={treeFund}
          alt="a cartoonish gold glowing tree with leaves"
          height="400rem"
          style={{ borderRadius: "6rem" }}
        />
      </Grid>
    </Grid>
  );
};
