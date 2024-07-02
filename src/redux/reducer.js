/* eslint-disable no-case-declarations */
import { FETCH_PRODUCTS, GET_PRODUCT_DETAIL, FILTERS_TYPE, REGISTER } from "./actions";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  productDetail: [],
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    case FILTERS_TYPE:
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case REGISTER: 
      return {
        ...state,
        user: action.payload
      }  

    default:
      return state;
  }
};

export default rootReducer;
