import * as Styled from "./Whitepaper.styled";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";
import { Typography, IconButton, Stack, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const Whitepaper = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const previousPage = () => {
    let newPageNumber = pageNumber - 1;
    if (newPageNumber < 1) {
      newPageNumber = 1;
    }
    setPageNumber(newPageNumber);
  };

  const nextPage = () => {
    let newPageNumber = pageNumber + 1;
    if (newPageNumber > 7) {
      newPageNumber = 7;
    }
    setPageNumber(newPageNumber);
  };

  return (
    <Styled.WhitepaperSection>
      <Styled.WhitepaperContainer>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#8ED14E",
            width: "10rem",
            height: "3rem",
            fontWeight: "bold",
            fontFamily: "EB Garamond",
            margin: "2rem 0 0 0",
            justifySelf: "center",
          }}
        >
          Back Home
        </Button>
        <Styled.WhitepaperTitle>10000 LEAVES Whitepaper</Styled.WhitepaperTitle>
        <Typography
          fontSize="2rem"
          sx={{ color: "white", textShadow: "2px 2px 4px #000000" }}
          margin="2rem 0 0 0"
        >
          Page {pageNumber} of {numPages}
        </Typography>
        <Stack
          alignItems="center"
          direction="row"
          margin="1rem 0 2rem 0"
          spacing={3}
        >
          <IconButton
            disabled={pageNumber === 1}
            onClick={previousPage}
            sx={{ backgroundColor: "#8ED14E" }}
          >
            <RemoveIcon />
          </IconButton>
          <IconButton
            disabled={pageNumber === 7}
            onClick={nextPage}
            sx={{ backgroundColor: "#8ED14E" }}
          >
            <AddIcon />
          </IconButton>
        </Stack>

        <Document
          onLoadError={console.error}
          onLoadSuccess={onDocumentLoadSuccess}
          file={"/Leaf_Paper.pdf"}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={1.75}
          />
        </Document>
      </Styled.WhitepaperContainer>
    </Styled.WhitepaperSection>
  );
};
