import { Grid, List, ListItem, Typography } from "@mui/material";
import moneybag from "../../Images/moneybag.png";
import beachLeaf from "../../Images/beach-leaf.png";
import fallLeaf from "../../Images/fall-leaf.webp";

export const LeafChallenge = () => {
  return (
    <Grid
      id="leaf-challenge"
      component="section"
      container
      height="100vh"
      backgroundColor="primary.darkGreen"
    >
      <Grid
        item
        xs={6}
        display="grid"
        alignContent="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h3">The Leaf Challenge</Typography>
        <List sx={{ listStyleType: "disc" }}>
          <ListItem
            sx={{
              display: "list-item",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            We've hidden some identical leaves within the collection, collect
            them to win 0.25 ETH per matching leaf
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6}>
        <img
          height="200rem"
          width="200rem"
          style={{
            position: "relative",
            top: "40%",
            left: "23%",
            borderRadius: "20%",
          }}
          src={beachLeaf}
        />
        <img
          height="200rem"
          width="200rem"
          style={{
            position: "relative",
            top: "20%",
            left: "17%",
            zIndex: 2,
            borderRadius: "20%",
          }}
          src={fallLeaf}
        />
        <img
          height="200rem"
          width="200rem"
          style={{
            position: "relative",
            top: "50%",
            zIndex: 1,
            borderRadius: "20%",
          }}
          src={moneybag}
        />
      </Grid>
    </Grid>
  );
};
