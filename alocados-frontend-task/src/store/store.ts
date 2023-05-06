import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import { rootSaga } from "../reducer/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
