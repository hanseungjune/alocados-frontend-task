import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import { rootSaga } from "../reducer/rootSaga";

// 리덕스 사가 미들웨어 및 스토어 설정
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
