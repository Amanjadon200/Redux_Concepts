const { legacy_createStore, bindActionCreators } = require("redux");
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const intialState = {
  numOfCakes: 10
};
const cakeRestocked = (qty) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};
const action = () => {
  return {
    type: "REDUCE_CAKE_BY_1",
    payload: 1,
  };
};
const reducer = (state = intialState, action) => {
  if (action.type === "REDUCE_CAKE_BY_1") {
    return { ...state, numOfCakes: state.numOfCakes - action.payload };
  } else if (action.type === CAKE_RESTOCKED) {
    return { ...state, numOfCakes: state.numOfCakes + action.payload };
  }
  return state;
};
const store = legacy_createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  // this will be called when any state changes in store
  console.log("updated state:", store.getState());
});
const dispatcher=bindActionCreators({action,cakeRestocked},store.dispatch)
dispatcher.action()
dispatcher.action()
dispatcher.action()
dispatcher.cakeRestocked(3);
unsubscribe();
