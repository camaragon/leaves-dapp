import {
  Header,
  LeafChallenge,
  Homepage,
  TreeFund,
  Welcome,
  FAQ,
  Footer,
} from "./Components";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.getElementById("html").style.overflowY = "hidden";
    } else {
      document.getElementById("html").style.overflowY = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <main
      style={{
        backgroundColor: "#0CA789",
        width: "100vw",
      }}
    >
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Homepage />
      <Welcome />
      <LeafChallenge />
      <TreeFund />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
