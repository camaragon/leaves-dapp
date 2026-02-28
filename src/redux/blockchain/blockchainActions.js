// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    try {
      dispatch(connectRequest());
      console.log("[LEAVES] Connect wallet clicked");
      console.log("[LEAVES] window.ethereum:", window.ethereum);
      console.log("[LEAVES] isMetaMask:", window.ethereum?.isMetaMask);
      
      const abiResponse = await fetch("/config/abi.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("[LEAVES] abi fetch status:", abiResponse.status);
      const abi = await abiResponse.json();
      
      const configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("[LEAVES] config fetch status:", configResponse.status);
      const CONFIG = await configResponse.json();
      console.log("[LEAVES] CONFIG:", CONFIG);
      
      const { ethereum } = window;
      const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
      console.log("[LEAVES] metamaskIsInstalled:", metamaskIsInstalled);
      
      if (metamaskIsInstalled) {
        Web3EthContract.setProvider(ethereum);
        let web3 = new Web3(ethereum);
        try {
          console.log("[LEAVES] Requesting accounts...");
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log("[LEAVES] Accounts:", accounts);
          const networkId = await ethereum.request({
            method: "net_version",
          });
          console.log("[LEAVES] Network ID:", networkId, "Expected:", CONFIG.NETWORK.ID);
          if (networkId === String(CONFIG.NETWORK.ID)) {
            const SmartContractObj = new Web3EthContract(
              abi,
              CONFIG.CONTRACT_ADDRESS
            );
            dispatch(
              connectSuccess({
                account: accounts[0],
                smartContract: SmartContractObj,
                web3: web3,
              })
            );
            ethereum.on("accountsChanged", (accounts) => {
              dispatch(updateAccount(accounts[0]));
            });
            ethereum.on("chainChanged", () => {
              window.location.reload();
            });
          } else {
            console.log("[LEAVES] Wrong network");
            dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
          }
        } catch (err) {
          console.error("[LEAVES] MetaMask error:", err);
          dispatch(connectFailed("Something went wrong: " + err.message));
        }
      } else {
        console.log("[LEAVES] MetaMask not found");
        dispatch(connectFailed("Install Metamask."));
      }
    } catch (err) {
      console.error("[LEAVES] Connect error:", err);
      dispatch(connectFailed("Connection error: " + err.message));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
