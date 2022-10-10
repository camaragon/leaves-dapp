import { Typography } from "@mui/material";

export const Methodology = () => {
  return (
    <section
      style={{
        display: "grid",
        grid: "repeat(2, 1fr) 3fr / 1fr",
        alignItems: "center",
        justifyItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3">Methodology</Typography>
      <Typography>From Sketch to Art with AI</Typography>
    </section>
  );
};
