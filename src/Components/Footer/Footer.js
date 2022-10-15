import { Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="15vh"
      backgroundColor="primary.main"
      borderTop="3px solid #8ed14e"
    >
      <Typography
        variant="h5"
        fontWeight="900"
        fontFamily="Nixie One"
        color="common.white"
      >
        10000 LEAVES
      </Typography>
    </Stack>
  );
};
