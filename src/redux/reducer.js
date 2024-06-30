/* eslint-disable no-case-declarations */
import { FETCH_PRODUCTS, FILTERS, GET_PRODUCT_DETAIL } from "./actions";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  productDetail: {},
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
    case FILTERS:
      const filtered = state.allProducts.filter((product) => {
        const meetsType =
          action.payload.type === "allTypes" ||
          (action.payload.type === "vegetarian" && product.vegetarian) ||
          (action.payload.type === "vegan" && product.vegan) ||
          (action.payload.type === "glutenFree" && product.glutenFree) ||
          (action.payload.type === "convencional" &&
            !product.vegetarian &&
            !product.vegan &&
            !product.glutenFree);

        const meetsPrice =
          action.payload.price === "all"
            ? true
            : action.payload.price === "minor"
            ? product.price <= 15
            : product.price > 15;

        return meetsType && meetsPrice;
      });

      return {
        ...state,
        filteredProducts: filtered,
      };

    default:
      return state;
  }
};

export default rootReducer;
