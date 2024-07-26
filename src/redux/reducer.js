/* eslint-disable no-case-declarations */
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  HANDLE_ERROR,
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
  FETCH_ALL_USERS,
  LOGIN,
  GET_SCHOOLS,
  REGISTER_SUCCESS,
  FETCH_USER_DATA,
  CLEAR_ERROR,
  GET_CHILD,
  POST_CHILD,
  GET_ORDERS,
  UPDATE_RATING,
  PUT_CHILD,
  DELETE_CHILD,
  GET_RATING,
  UPDATE_PROFILE,
  SELECT_CHILD,
  CLEAR_SELECTED_CHILD,
} from "./actions";

const initialState = {
  isAdmin: false,
  allUsers: [],
  allProducts: [],
  filteredProducts: [],
  productDetail: [],
  mealTypes: [],
  reviews: [],
  schools: [],
  children: [],
  newreviews: [],
  orders: [],
  rating: [],
  updateUser: [],
  ratingView: null,
  isSelected: false,
  token: null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  userId: null,
  newDishId: null,
  postDishError: null,
  succesDishDelete: null,
  errorDishDelete: null,
  error: null,
  shoppingCart: localStorage.getItem("shoppingCart") !== 'undefined' ? JSON.parse(localStorage.getItem("shoppingCart")) : []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case FETCH_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
        success: action.payload,
        error: null,
      };

    case FETCH_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    case HANDLE_ERROR:
      return {
        ...state,
        error: action.payload,
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

    case LOGIN:
      return {
        ...state,
        token: action.payload,
        userId: action.payload.userId,
      };

    case FETCH_USER_DATA:
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
        newreviews: action.payload,
      };

    case GET_SCHOOLS:
      return {
        ...state,
        schools: action.payload,
      };

    case GET_CHILD:
      return {
        ...state,
        children: action.payload,
      };

    case POST_CHILD:
      return {
        ...state,
        children: [...state.children, action.payload],
      };
    case PUT_CHILD:
      return {
        ...state,
        children: state.children.map((child) =>
          child.id === action.payload.id ? action.payload : child
        ),
      };
    case DELETE_CHILD:
      return {
        ...state,
        children: [
          ...state.children.filter((child) => child.id !== action.payload),
        ],
      };

    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case UPDATE_RATING:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.orderId
            ? {
                ...order,
                items: order.items.map((item) =>
                  item.id === action.payload.itemId
                    ? { ...item, rating: action.payload.rating }
                    : item
                ),
              }
            : order
        ),
      };
    case GET_RATING:
      return {
        ...state,
        ratingView: action.payload,
      };

    case SELECT_CHILD: {
      return {
        ...state,
        isSelected: action.payload,
      };
    }

    case CLEAR_SELECTED_CHILD: {
      return{
        ...state,
        isSelected: false,
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
