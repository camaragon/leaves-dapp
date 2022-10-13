import { Grid, Typography, List, ListItem } from "@mui/material";

export const Redacted = () => {
  return (
    <section
      id="redacted"
      style={{
        display: "grid",
        grid: "1fr 4fr / 1fr",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#6DAB7B",
      }}
    >
      <Typography alignSelf="end" justifySelf="center" variant="h3">
        [redacted]
      </Typography>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem
              sx={{
                display: "list-item",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              Finding Leaves grants access to our Main Drop in November
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              A collection of over 200 traits created manually by hand
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              They will be your identity for all future involvement through the
              community
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </section>
  );
};
