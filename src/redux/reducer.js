import { FETCH_PRODUCTS, GET_PRODUCT_DETAIL } from "./actions";

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
        }  

    default:
      return state;
  }
};

export default rootReducer;
