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

function App() {
  return (
    <main>
      <Header />
      <Homepage />
      <Welcome />
      <TreeFund />
      <LeafChallenge />
      <Redacted />
      <Methodology />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
