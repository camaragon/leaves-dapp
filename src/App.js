import {
  Header,
  LeafChallenge,
  Homepage,
  Redacted,
  TreeFund,
  Welcome,
  Methodology,
  FAQ,
  Footer,
} from "./Components";
import "./index.css";

function App() {
  return (
    <main style={{ backgroundColor: "#0CA789" }}>
      <Header />
      <Homepage />
      <Welcome />
      <LeafChallenge />
      <TreeFund />
      {/* <Redacted /> */}
      {/* <Methodology /> */}
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
