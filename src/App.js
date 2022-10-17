import { useEffect } from "react";
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
// import { redirect } from "react-router-dom";

function App() {
  return (
    <main style={{ backgroundColor: "#0CA789", width: "100vw" }}>
      <Header />
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
