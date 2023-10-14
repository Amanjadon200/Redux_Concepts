const { legacy_createStore, bindActionCreators } = require("redux");
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
const ICECREAM_SOLD = "ICECREAM_SOLD";
const CAKE_SOLD = "CAKE_SOLD";
const intialState = {
  numOfCakes: 10,
  numOfIceCreams: 5,
};
const cakeRestocked = (qty) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};
const cakeSold = (qty) => {
  return {
    type: CAKE_SOLD,
    payload: qty,
  };
};
const iceCreamRestocked = (qty) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};
const iceCreamSold = (qty) => {
  return {
    type: "ICECREAM_SOLD",
    payload: qty,
  };
};
const reducer = (state = intialState, action) => {
  if (action.type === CAKE_SOLD) {
    return { ...state, numOfCakes: state.numOfCakes - action.payload };
  } else if (action.type === CAKE_RESTOCKED) {
    return { ...state, numOfCakes: state.numOfCakes + action.payload };
  } else if (action.type === ICECREAM_SOLD) {
    return { ...state, numOfIceCreams: state.numOfIceCreams - action.payload };
  } else if (action.type === ICECREAM_RESTOCKED) {
    return { ...state, numOfIceCreams: state.numOfIceCreams + action.payload };
  }
  return state;
};
const store = legacy_createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  // this will be called when any state changes in store
  console.log("updated state:", store.getState());
});
const dispatcher = bindActionCreators(
  { cakeRestocked, iceCreamRestocked, iceCreamSold, cakeSold },
  store.dispatch
);
dispatcher.cakeSold(3);
dispatcher.cakeRestocked(3);
dispatcher.iceCreamSold(3);
dispatcher.iceCreamRestocked(3);
unsubscribe();
