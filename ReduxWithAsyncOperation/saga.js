import axios from "axios";
import {
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
} from "../constants.js";
import { takeEvery, put } from "redux-saga/effects";
function* fetchUser(action) {
  try {
    const user = yield axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    yield put({ type: USER_FETCH_SUCCEEDED, user: user.data });
  } catch (err) {
    yield put({ type: USER_FETCH_FAILED, message: err });
  }
}
function* mySaga() {
  console.log("my saga");
  yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}

export default mySaga;
