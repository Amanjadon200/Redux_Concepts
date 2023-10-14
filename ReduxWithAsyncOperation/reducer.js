import {
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
} from "../constants.js";
const intialState = {
  isLoading: false,
  data: [],
  isError: "",
};
export const reducer = (state = intialState, action) => {
  if (action) {
    if (action.type === USER_FETCH_REQUESTED) {
      return { ...state, isLoading: true, data: [], isError: "" };
    } else if (action.type === USER_FETCH_SUCCEEDED) {
      return { ...state, isLoading: false, data: action.user, isError: "" };
    } else if (action.type === USER_FETCH_FAILED) {
      return { ...state, isLoading: false, data: [], isError: action.message };
    }
  }
  return state;
};
