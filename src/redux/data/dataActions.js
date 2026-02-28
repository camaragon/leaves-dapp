import store from "../store";

const fetchDataRequest = () => ({
  type: "CHECK_DATA_REQUEST",
});

const fetchDataSuccess = (payload) => ({
  type: "CHECK_DATA_SUCCESS",
  payload: payload,
});

const fetchDataFailed = (payload) => ({
  type: "CHECK_DATA_FAILED",
  payload: payload,
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      // Try getting smartContract from the old Redux blockchain state first,
      // but this is now populated by App.js via wagmi
      const blockchain = store.getState().blockchain;
      if (!blockchain || !blockchain.smartContract) {
        dispatch(fetchDataFailed("Contract not loaded yet."));
        return;
      }
      let totalSupply = await blockchain.smartContract.methods.totalSupply().call();
      dispatch(fetchDataSuccess({ totalSupply }));
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
