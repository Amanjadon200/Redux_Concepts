import { legacy_createStore } from "redux";
import { ADDRESS_MODIFIED } from "./constants.js";
import { produce } from "immer";
const userInfo = {
  name: "aman",
  age: 23,
  address: {
    street: "11/12 ram nagar colony",
    city: "mathura",
    state: "uttar pradesh",
  },
};
const action = (payload) => {
  return {
    type: ADDRESS_MODIFIED,
    payload,
  };
};
const updateUserInfoReducer = (state = userInfo, action) => {
  switch (action.type) {
    case ADDRESS_MODIFIED:
    //   return {
    //     ...userInfo,
    //     address: { ...state.address, street: action.payload },
    //   };
    return produce(state,(draft)=>{
        draft.address.street=action.payload
    })
    default:
      return state;
  }
};

const store = legacy_createStore(updateUserInfoReducer);
store.subscribe(() => {
  console.log("update state", store.getState());
});
console.log("initial state", store.getState());
store.dispatch(action("10/12 abcde"));
