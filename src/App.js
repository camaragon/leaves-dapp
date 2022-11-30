import {
  FAQ,
  Footer,
  Header,
  Homepage,
  LeafChallenge,
  Mint,
  TreeFund,
  Welcome,
} from "./Components";
import "./index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { Routes, Route } from "react-router-dom";
import { Whitepaper } from "./Components/Whitepaper";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your LEAVES.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.getElementById("html").style.overflowY = "hidden";
    } else {
      document.getElementById("html").style.overflowY = "auto";
    }
  }, [isMobileMenuOpen]);

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your LEAVES...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(`You caught some LEAVES! Go visit Opensea.io to view it.`);
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    console.log("GET CONFIG");
    getConfig();
  }, []);

  useEffect(() => {
    console.log("HELLO");
    getData();
  }, [blockchain.account]);

  console.log(blockchain);

  return (
    <main
      style={{
        backgroundColor: "#0CA789",
        width: "100vw",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                blockchain={blockchain}
                getData={getData}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
              <Homepage />
              <Welcome blockchain={blockchain} getData={getData} />
              <LeafChallenge />
              <TreeFund />
              <FAQ />
            </>
          }
        />
        <Route
          path="/mint"
          element={
            <>
              <Header
                blockchain={blockchain}
                getData={getData}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
              <Mint
                blockchain={blockchain}
                claimNFTs={claimNFTs}
                claimingNft={claimingNft}
                CONFIG={CONFIG}
                data={data}
                feedback={feedback}
                mintAmount={mintAmount}
                setMintAmount={setMintAmount}
              />
            </>
          }
        />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
