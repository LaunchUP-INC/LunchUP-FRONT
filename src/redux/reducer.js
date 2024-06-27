import { FETCH_PRODUCTS } from "./actions";

const initialState = {
  allProducts: [],
  filteredProducts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
