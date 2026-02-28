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

export const fetchData = (smartContract) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      if (!smartContract) {
        dispatch(fetchDataFailed("Contract not loaded yet."));
        return;
      }
      let totalSupply = await smartContract.methods.totalSupply().call();
      dispatch(fetchDataSuccess({ totalSupply }));
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
