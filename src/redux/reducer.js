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
  DELETE_DISH_SUCCESS,
  DELETE_DISH_ERROR,
  RESET_DELETE_DISH_STATUS,
  FETCH_REVIEWS,
  POST_REVIEWS,
} from "./actions";

const initialState = {
  isAdmin: false,
  allUsers: [],
  allProducts: [],
  filteredProducts: [],
  productDetail: [],
  mealTypes: [],
  reviews: [],
  user: {},
  newDishId: null,
  postDishError: null,
  succesDishDelete: null,
  errorDishDelete: null,
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
        mealTypes: action.payload,
      };

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

    case DELETE_DISH_SUCCESS:
      return {
        ...state,
        succesDishDelete: action.payload,
        errorDishDelete: null,
      };

    case DELETE_DISH_ERROR:
      return {
        ...state,
        succesDishDelete: null,
        errorDishDelete: action.payload,
      };

    case RESET_DELETE_DISH_STATUS:
      return {
        ...state,
        succesDishDelete: null,
        errorDishDelete: null,
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
    case FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case POST_REVIEWS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
