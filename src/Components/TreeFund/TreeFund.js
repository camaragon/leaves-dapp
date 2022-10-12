import { Grid, Typography, List, ListItem } from "@mui/material";
import treeFund from "../../Images/tree-fund.png";

export const TreeFund = () => {
  return (
    <Grid
      id="tree-fund"
      component="section"
      container
      height="100vh"
      backgroundColor="primary.darkGreen"
    >
      <Grid
        item
        xs={6}
        display="grid"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={treeFund}
          alt="a cartoonish gold glowing tree with leaves"
          height={"500rem"}
        />
      </Grid>
      <Grid
        item
        xs={6}
        display="grid"
        alignContent="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h3">Tree Fund</Typography>
        <List sx={{ listStyleType: "disc" }}>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            A community fund that will grow as we grow. Every project we work on
            will expand our vision and add a cut to this origin fund starting
            with 25 Eth from Leaves
          </ListItem>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Community driven based on NFT holder votes that can be used to fund
            holder projects, host events, and more
          </ListItem>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Gatekeepers will get 5 votes per NFT, remaining holders get 1 vote
            per NFT
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
