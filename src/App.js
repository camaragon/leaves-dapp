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
