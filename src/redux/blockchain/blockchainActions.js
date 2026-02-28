import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import { fetchData } from "../data/dataActions";

const connectRequest = () => ({
  type: "CONNECTION_REQUEST",
});

const connectSuccess = (payload) => ({
  type: "CONNECTION_SUCCESS",
  payload: payload,
});

const connectFailed = (payload) => ({
  type: "CONNECTION_FAILED",
  payload: payload,
});

const updateAccountRequest = (payload) => ({
  type: "UPDATE_ACCOUNT",
  payload: payload,
});

const NO_WALLET = "NO_WALLET";

export const connect = () => {
  return async (dispatch) => {
    try {
      dispatch(connectRequest());

      // Give injected providers a moment to load
      let ethereum = window.ethereum;
      if (!ethereum) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        ethereum = window.ethereum;
      }

      if (!ethereum) {
        dispatch(connectFailed(NO_WALLET));
        return;
      }

      Web3EthContract.setProvider(ethereum);
      const web3 = new Web3(ethereum);

      const abiResponse = await fetch("/config/abi.json", {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      const abi = await abiResponse.json();

      const configResponse = await fetch("/config/config.json", {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      const CONFIG = await configResponse.json();

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const networkId = await ethereum.request({ method: "net_version" });

      if (networkId === String(CONFIG.NETWORK.ID)) {
        const SmartContractObj = new Web3EthContract(abi, CONFIG.CONTRACT_ADDRESS);
        dispatch(
          connectSuccess({
            account: accounts[0],
            smartContract: SmartContractObj,
            web3: web3,
          })
        );
        ethereum.on("accountsChanged", (accts) => {
          dispatch(updateAccount(accts[0]));
        });
        ethereum.on("chainChanged", () => {
          window.location.reload();
        });
      } else {
        dispatch(connectFailed(`Please switch to ${CONFIG.NETWORK.NAME} in your wallet.`));
      }
    } catch (err) {
      if (err.code === 4001) {
        dispatch(connectFailed("Connection rejected. Try again when you're ready."));
      } else {
        dispatch(connectFailed("Something went wrong. Please try again."));
      }
    }
  };
};

export { NO_WALLET };

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
