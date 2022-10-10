import { Grid, List, ListItem, Typography } from "@mui/material";

export const LeafChallenge = () => {
  return (
    <Grid component="section" container height="75vh">
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
      <Grid item xs={6}></Grid>
    </Grid>
  );
};
