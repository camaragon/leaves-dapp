import {
  LeafChallenge,
  Homepage,
  Redacted,
  TreeFund,
  Welcome,
  Methodology,
} from "./Components";

function App() {
  return (
    <main>
      <Homepage />
      <Welcome />
      <TreeFund />
      <LeafChallenge />
      <Redacted />
      <Methodology />
    </main>
  );
}

export default App;
