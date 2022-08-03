import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getTopHeadlineReducer from "./reducers/getTopHeadlineReducer";

const store = createStore(getTopHeadlineReducer, applyMiddleware(thunk))

export default store;

