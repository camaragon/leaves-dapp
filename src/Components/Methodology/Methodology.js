import { Typography, Stack } from "@mui/material";
import sketchLeaf from "../../Images/sketch-leaf.png";
import tropicalLeaf from "../../Images/tropical-leaf.png";

export const Methodology = () => {
  return (
    <section
      id="methodology"
      style={{
        display: "grid",
        grid: "1fr 3fr / 1fr",
        alignItems: "center",
        justifyItems: "center",
        height: "100vh",
      }}
    >
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h3">Methodology</Typography>
        <Typography fontWeight="bold">From Sketch to Art with AI</Typography>
      </Stack>
      <Stack direction="row" alignContent="center" spacing={40}>
        <img
          src={sketchLeaf}
          alt="sketch of a leaf"
          height="350rem"
          width="350rem"
        />
        <img
          src={tropicalLeaf}
          alt="tropical leaf"
          height="350rem"
          width="350rem"
        />
      </Stack>
    </section>
  );
};
