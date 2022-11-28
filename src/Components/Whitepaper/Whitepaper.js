import * as Styled from "./Whitepaper.styled";
import { Document, Page } from "react-pdf";

export const Whitepaper = () => {
  return (
    <Styled.WhitepaperSection>
      <Document
        onLoadError={console.error}
        file={JSON.parse("/Leaf_Paper.pdf")}
      >
        <Page pageNumber={1} width={600} />
      </Document>
    </Styled.WhitepaperSection>
  );
};
