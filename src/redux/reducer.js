/* eslint-disable no-case-declarations */
import {
  FETCH_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_MEAL_TYPE,
  FILTERS_TYPE,
  REGISTER,
  POST_DISH_SUCCESS,
  POST_DISH_ERROR,
  SET_SHOPPINGCART,
  ADD_TO_SHOPPINGCART,
  REMOVE_FROM_SHOPPINGCART,
  CLEAR_SHOPPINGCART,
  SEARCH,
  
} from "./actions";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  productDetail: [],
  mealTypes: [],
  user: {},
  newDishId: null,
  postDishError: null,
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
    
    case GET_MEAL_TYPE:
      return {
        ...state,
        mealTypes: action.payload
      }
    

    case FILTERS_TYPE:
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };

      case POST_DISH_SUCCESS:
        return {
          ...state,
          newDishId: action.payload,
          postDishError: null,
        };
      case POST_DISH_ERROR:
        return {
          ...state,
          newDishId: null,
          postDishError: action.payload,
        };

    case SET_SHOPPINGCART:
      return {
        ...state,
        shoppingCart: action.payload,
      };

    case ADD_TO_SHOPPINGCART:
      return {
        ...state,
        shoppingCart: action.payload,
      };

    case REMOVE_FROM_SHOPPINGCART:
      return {
        ...state,
        shoppingCart: action.payload,
      };

    case CLEAR_SHOPPINGCART:
      return {
        ...state,
        shoppingCart: action.payload,
      };

    case SEARCH:
      return {
        ...state,
        filteredProducts: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
