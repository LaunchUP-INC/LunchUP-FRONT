import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_MEAL_TYPE = "GET_MEAL_TYPE";
export const FILTERS_TYPE = "FILTERS_TYPE";
export const REGISTER = "REGISTER";
export const POST_DISH_SUCCESS = "POST_DISH_SUCCESS";
export const POST_DISH_ERROR = "POST_DISH_ERROR";
export const SET_SHOPPINGCART = "SET_SHOPPINGCART";
export const ADD_TO_SHOPPINGCART = "ADD_TO_SHOPPINGCART";
export const REMOVE_FROM_SHOPPINGCART = "REMOVE_FROM_SHOPPINGCART";
export const CLEAR_SHOPPINGCART = "CLEAR_SHOPPINGCART";
export const SEARCH = "SEARCH";

// const productIds = [716429, 716430, 716431, 716432, 716433, 1000, 1, 7, 10, 14, 500, 5000]; // Ejemplo de IDs de productos

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      // const requests = productIds.map(id =>
      //   axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6afebc2cf75b47ffa18e47b13b1a2885&includeNutrition=true`)
      // );
      // const responses = await Promise.all(requests);
      // const products = responses.map(response => response.data);

      // console.log('Fetched products:', products); // Verificar la respuesta

      const products = await axios.get("https://lunchup-back.onrender.com/dishes");

      dispatch({
        type: FETCH_PRODUCTS,
        payload: products.data.allDishes,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const getMealType = () => {
  return async (dispatch) => {

    try {
      
      const response = await axios.get('http://localhost:3001/meal')

      dispatch({
        type: GET_MEAL_TYPE,
        payload: response.data.mealTypes
      })

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

export const getProductDetail = (id) => {
  return async (dispatch) => {
    try {
      const productDetail = await axios.get(
        `https://lunchup-back.onrender.com/dishes/${id}`
      );

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
      let url = "https://lunchup-back.onrender.com/dishes?";
      const params = [];

      if (name) params.push(`search=${encodeURIComponent(name)}`);
      if (type) params.push(`filterMealTypeBy=${encodeURIComponent(type)}`);
      if (order) params.push(`orderBy=${encodeURIComponent(order)}`);

      // Uniendo todos los parámetros con '&' y agregándolos a la URL base
      url += params.join('&');

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

      const response = await axios.post("http://localhost:3001/dishes", formData, {
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


export const clearShoppingCart = () => async (dispatch, getState)=>{
  let shoppingCart = [...getState().shoppingCart];

  shoppingCart = [];
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  dispatch({
    type:CLEAR_SHOPPINGCART,
    payload: shoppingCart,
  });
};

export const searchProduct = (search) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://lunchup-back.onrender.com/dishes?search=${search}`
      );
      dispatch({
        type: SEARCH,
        payload: response.data.allDishes,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
