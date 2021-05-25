import toggleResults from "./toggleResults";
import productInput from "./productInput";
import products from "./products";
import pagination from "./pagination";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  toggleResults: toggleResults,
  productInput: productInput,
  products: products,
  pagination: pagination,
});

export default allReducers;
