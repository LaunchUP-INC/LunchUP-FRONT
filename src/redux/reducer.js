/* eslint-disable no-case-declarations */
import { FETCH_PRODUCTS, GET_PRODUCT_DETAIL, FILTERS_TYPE, FILTERS_ORDER } from "./actions";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  productDetail: [],
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
      const filtered = state.allProducts.filter((product) => {

        return action.payload === "allTypes" ||
          (action.payload === "vegetarian" && product.vegetarian) ||
          (action.payload === "vegan" && product.vegan) ||
          (action.payload === "glutenFree" && product.glutenFree) ||
          (action.payload === "convencional" &&
            !product.vegetarian &&
            !product.vegan &&
            !product.glutenFree);
      });

      return {
        ...state,
        filteredProducts: filtered,
      }


    case FILTERS_ORDER:
      let orderedDishes = [...state.filteredProducts];

      if (action.payload === "allPrices") {
        orderedDishes.sort((dishA, dishB) => dishA.id - dishB.id);
      } else if (action.payload === "mayor") {
        orderedDishes.sort((dishA, dishB) => dishB.price - dishA.price);
      } else {
        orderedDishes.sort((dishA, dishB) => dishA.price - dishB.price);
      }

      return {
        ...state,
        filteredProducts: orderedDishes,
      };

    default:
      return state;
  }
};

export default rootReducer;
