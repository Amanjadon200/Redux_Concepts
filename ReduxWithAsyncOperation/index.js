import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga.js";
import { reducer } from "./reducer.js";
import { userFetchRequest } from "./actions.js";

const sagaMiddleware = createSagaMiddleware(mySaga);
const store = legacy_createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
store.dispatch(userFetchRequest());
