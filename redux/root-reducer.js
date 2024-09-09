import { combineReducers } from "redux";
import userReducer from "./cart/slice";

export default combineReducers({
  cart: userReducer,
});
