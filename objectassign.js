export default function coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS_SUCCESS: {
      const {payload: coins} = action;

      return Object.assign({}, state, {
        coins
      })
    }
    default:
      return state;
  }
};
