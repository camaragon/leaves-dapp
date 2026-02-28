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
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { Routes, Route } from "react-router-dom";
import { useAccount } from "wagmi";
// wagmi v1: useAccount returns { address, isConnected }
import Web3 from "web3";
import Web3EthContract from "web3-eth-contract";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState("Click buy to mint your LEAVES.");
  const [mintAmount, setMintAmount] = useState(1);
  const [abi, setAbi] = useState(null);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: { NAME: "", SYMBOL: "", ID: 0 },
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

  const { address, isConnected } = useAccount();

  // Build a blockchain-like object for child components (backwards compat)
  const smartContract = useMemo(() => {
    if (!isConnected || !abi || !CONFIG.CONTRACT_ADDRESS || !window.ethereum) return null;
    Web3EthContract.setProvider(window.ethereum);
    return new Web3EthContract(abi, CONFIG.CONTRACT_ADDRESS);
  }, [isConnected, abi, CONFIG.CONTRACT_ADDRESS]);

  const web3 = useMemo(() => {
    if (!isConnected || !window.ethereum) return null;
    return new Web3(window.ethereum);
  }, [isConnected]);

  const blockchain = useMemo(() => ({
    account: isConnected ? address : "",
    smartContract,
    web3,
    errorMsg: "",
    loading: false,
  }), [isConnected, address, smartContract, web3]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.getElementById("html").style.overflowY = "hidden";
    } else {
      document.getElementById("html").style.overflowY = "auto";
    }
  }, [isMobileMenuOpen]);

  const claimNFTs = () => {
    if (!smartContract) return;
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback("Minting your LEAVES...");
    setClaimingNft(true);
    smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: address,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback("You caught some LEAVES! Go visit Opensea.io to view it.");
        setClaimingNft(false);
        dispatch(fetchData());
      });
  };

  const getData = () => {
    if (isConnected && smartContract) {
      dispatch(fetchData());
    }
  };

  const getConfig = async () => {
    const [configRes, abiRes] = await Promise.all([
      fetch("/config/config.json", { headers: { "Content-Type": "application/json", Accept: "application/json" } }),
      fetch("/config/abi.json", { headers: { "Content-Type": "application/json", Accept: "application/json" } }),
    ]);
    const config = await configRes.json();
    const abiData = await abiRes.json();
    SET_CONFIG(config);
    setAbi(abiData);
  };

  useEffect(() => {
    getConfig();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync wagmi state into Redux so data actions can access the contract
  useEffect(() => {
    dispatch({
      type: "CONNECTION_SUCCESS",
      payload: {
        account: isConnected ? address : "",
        smartContract: smartContract,
        web3: web3,
      },
    });
  }, [isConnected, address, smartContract, web3, dispatch]);

  // Fetch contract data when account connects or contract is ready
  useEffect(() => {
    if (isConnected && smartContract) {
      dispatch(fetchData());
    }
  }, [isConnected, smartContract, dispatch]);

  return (
    <main style={{ backgroundColor: "#0CA789", width: "100vw" }}>
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
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
