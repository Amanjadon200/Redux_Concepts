import { USER_FETCH_REQUESTED } from "../constants.js";

export const userFetchRequest = () => {
  return {
    type: USER_FETCH_REQUESTED,
  };
};
