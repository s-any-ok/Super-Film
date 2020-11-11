import { createStore, combineReducers, applyMiddleware } from "redux";
import filmsReducer from "./reducers/filmsReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  filmsPage: filmsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
