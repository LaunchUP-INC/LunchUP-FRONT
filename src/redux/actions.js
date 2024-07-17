import axios from "axios";
import { toast } from "react-toastify";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_MEAL_TYPE = "GET_MEAL_TYPE";
export const FILTERS_TYPE = "FILTERS_TYPE";
export const REGISTER = "REGISTER";
export const POST_DISH_SUCCESS = "POST_DISH_SUCCESS";
export const POST_DISH_ERROR = "POST_DISH_ERROR";
export const DELETE_DISH_SUCCESS = "DELETE_DISH_SUCCESS";
export const DELETE_DISH_ERROR = "DELETE_DISH_ERROR";
export const RESET_DELETE_DISH_STATUS = "RESET_DELETE_DISH_STATUS";
export const SET_SHOPPINGCART = "SET_SHOPPINGCART";
export const ADD_TO_SHOPPINGCART = "ADD_TO_SHOPPINGCART";
export const REMOVE_FROM_SHOPPINGCART = "REMOVE_FROM_SHOPPINGCART";
export const CLEAR_SHOPPINGCART = "CLEAR_SHOPPINGCART";
export const SEARCH = "SEARCH";
export const FETCH_REVIEWS = "FETCH_REVIEWS";
export const POST_REVIEWS = "POST_REVIEWS";


//constantes para trabajar de manera local y para deployar, comentar y descomentar segun el caso.


// export const URLD = "https://lunchup-back.onrender.com";
export const URLD = "http://localhost:3001";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {

      // const requests = productIds.map(id =>
      //   axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6afebc2cf75b47ffa18e47b13b1a2885&includeNutrition=true`)
      // );
      // const responses = await Promise.all(requests);
      // const products = responses.map(response => response.data);

      // console.log('Fetched products:', products); // Verificar la respuesta


      const products = await axios.get(`${URLD}/dishes`);
      const {allDishes} = products.data;


      for (let i = 0; i < allDishes.length; i++) {
        const {data} = await axios.get(`${URLD}/dishes/${allDishes[i].id}/stock`);
        allDishes[i].stock = data.stock;
      }

      // const products = await axios.get(`${URLD}/dishes`);

      dispatch({
        type: FETCH_PRODUCTS,
        payload: allDishes,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message,
      });
    }
  };
};

export const getMealType = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URLD}/meal`);

      dispatch({
        type: GET_MEAL_TYPE,
        payload: response.data.mealTypes,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    try {
      const productDetail = await axios.get(`${URLD}/dishes/${id}`);

      dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail.data.dishDetail,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const filterProducts = (name, type, order) => {
  return async (dispatch) => {
    try {
      let url = `${URLD}/dishes?`;
      const params = [];

      if (name) params.push(`search=${encodeURIComponent(name)}`);
      if (type) params.push(`filterMealTypeBy=${encodeURIComponent(type)}`);
      if (order) params.push(`orderBy=${encodeURIComponent(order)}`);

      // Uniendo todos los parámetros con '&' y agregándolos a la URL base
      url += params.join("&");

      // const response = await axios.get(
      //   `http://localhost:3001/dishes?filterMealTypeBy=${type}&orderBy=${order}`
      // );

      const response = await axios.get(url);
      dispatch({
        type: FILTERS_TYPE,
        payload: response.data.allDishes,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const register = (email, password) => {
  return {
    type: REGISTER,
    payload: { email, password },
  };
};

export const postDish = (dish) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("name", dish.name);
      formData.append("description", dish.description);
      formData.append("price", dish.price);

      // Añadir imágenes al formData
      dish.images.forEach((image) => {
        formData.append("images", image);
      });

      // Añadir tipos de comida al formData
      dish.mealTypes.forEach((mealType) => {
        formData.append("mealTypes", mealType);
      });

      const response = await axios.post(`${URLD}/dishes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch({
        type: POST_DISH_SUCCESS,
        payload: response.data.newId,
      });
    } catch (error) {
      dispatch({
        type: POST_DISH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const updateDish = (id, dish) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("name", dish.name);
      formData.append("description", dish.description);
      formData.append("price", dish.price);

      // Añadir imágenes al formData
      dish.images.forEach((image) => {
        formData.append("images", image);
      });

      // Añadir tipos de comida al formData
      dish.Meal_Types.forEach((mealType) => {
        formData.append("Meal_Types", mealType);
      });
      // console.log("llega");
      const response = await axios.put(`${URLD}/dishes/${id}`, formData
      , {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch({
        type: POST_DISH_SUCCESS,
        payload: response.data.dish,
      });
    } catch (error) {
      dispatch({
        type: POST_DISH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const updateStock = (id, quantity) =>{
  return async (dispatch)=>{

    const {data} = await axios.put(`${URLD}/dishes/${id}/stock`, {"quantity": Number(quantity)});
    dispatch(fetchProducts());
    return data.stock;
  }
}

export const deleteDish = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${URLD}/dishes/${id}`);

      dispatch({
        type: DELETE_DISH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_DISH_ERROR,
        payload: error.message,
      });
    }
  };
};
export const resetDeleteDishStatus = () => ({
  type: "RESET_DELETE_DISH_STATUS",
});

export const setShoppingCart = () => async (dispatch, getState) => {
  let shoppingCart = getState().shoppingCart;

  if (!Array.isArray(shoppingCart)) {
    try {
      shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    } catch (error) {
      shoppingCart = [];
    }
  }

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  dispatch({
    type: SET_SHOPPINGCART,
    payload: shoppingCart,
  });
};

export const addToShoppingCart = (productAdd) => async (dispatch, getState) => {
  let shoppingCart = [...getState().shoppingCart];
  let product = { ...productAdd };

  const existProductIndex = shoppingCart.findIndex(
    (item) => item.id === product.id
  );

  if (existProductIndex !== -1) {
    shoppingCart[existProductIndex].quantity += 1;
  } else {
    product.quantity = 1;
    shoppingCart.push(product);
  }

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  dispatch({
    type: ADD_TO_SHOPPINGCART,
    payload: shoppingCart,
  });
};

export const removeFromShoppingCart =
  (productId) => async (dispatch, getState) => {
    let shoppingCart = [...getState().shoppingCart];

    if (typeof productId === "number") {
      shoppingCart = shoppingCart.filter((prod) => prod.id !== productId);
    } else if (typeof productId === "object") {
      const existProductIndex = shoppingCart.findIndex(
        (item) => item.id === productId.id
      );
      shoppingCart[existProductIndex].quantity -= 1;
    }

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

    dispatch({
      type: REMOVE_FROM_SHOPPINGCART,
      payload: shoppingCart,
    });
  };

export const clearShoppingCart = () => async (dispatch, getState) => {
  let shoppingCart = [...getState().shoppingCart];

  shoppingCart = [];
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  dispatch({
    type: CLEAR_SHOPPINGCART,
    payload: shoppingCart,
  });
};

export const searchProduct = (search) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URLD}/dishes?search=${search}`);
      dispatch({
        type: SEARCH,
        payload: response.data.allDishes,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const fetchReviews = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URLD}/reviews`);
      console.log(response.data);
      dispatch({
        type: FETCH_REVIEWS,
        payload: response.data.reviews,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const postReviews = (review) => {
  console.log(review);
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URLD}/reviews`, review);
      dispatch({
        type: POST_REVIEWS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
