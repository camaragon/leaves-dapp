import { Stack, Typography } from "@mui/material";
import auburnLeaf from "../../Images/footer-leafs/auburn-leaf.png";
import autumnLeaf from "../../Images/footer-leafs/autumn-leaf.png";
import brownLeaf from "../../Images/footer-leafs/brown-leaf.png";
import goldLeaf from "../../Images/footer-leafs/gold-leaf.png";
import redLeaf from "../../Images/footer-leafs/red-leaf.png";

export const Footer = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="15vh"
      backgroundColor="primary.main"
      borderTop="3px solid #8ed14e"
      zIndex={3}
    >
      {/* <img src={auburnLeaf} alt="" height={100} width={100}></img>
      <img src={autumnLeaf} alt="" height={100} width={100}></img>
      <img src={brownLeaf} alt="" height={100} width={100}></img>
      <img src={goldLeaf} alt="" height={100} width={100}></img>
      <img src={redLeaf} alt="" height={100} width={100}></img> */}
      <Typography
        variant="h5"
        fontWeight="900"
        fontFamily="Nixie One"
        color="common.white"
        sx={{ textShadow: "2px 2px 4px #000000" }}
      >
        ©10000LEAVES
      </Typography>
    </Stack>
  );
};
