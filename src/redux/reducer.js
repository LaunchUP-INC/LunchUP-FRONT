/* eslint-disable no-case-declarations */
import { FETCH_PRODUCTS, GET_PRODUCT_DETAIL, FILTERS_TYPE, REGISTER, SET_SHOPPINGCART, ADD_TO_SHOPPINGCART, REMOVE_FROM_SHOPPINGCART, CLEAR_SHOPPINGCART } from "./actions";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  productDetail: [],
  user: {},
  shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
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

    case SET_SHOPPINGCART:
      return{
        ...state,
        shoppingCart: action.payload,
      }

    case ADD_TO_SHOPPINGCART:
      return{
        ...state,
        shoppingCart: action.payload,
      }

    case REMOVE_FROM_SHOPPINGCART:
      return{
        ...state,
        shoppingCart: action.payload,
      }

    case CLEAR_SHOPPINGCART:
      return{
        ...state,
        shoppingCart: action.payload,
      }


    default:
      return state;
  }
};

export default rootReducer;
