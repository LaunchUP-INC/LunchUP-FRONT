import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const FILTERS_TYPE = "FILTERS_TYPE";
export const REGISTER = "REGISTER";
export const SET_SHOPPINGCART = "SET_SHOPPINGCART";
export const ADD_TO_SHOPPINGCART = "ADD_TO_SHOPPINGCART";
export const REMOVE_FROM_SHOPPINGCART = "REMOVE_FROM_SHOPPINGCART";
export const CLEAR_SHOPPINGCART = "CLEAR_SHOPPINGCART";

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

      const products = await axios.get("http://localhost:3001/dishes");

      dispatch({
        type: FETCH_PRODUCTS,
        payload: products.data.allDishes,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    try {
      const productDetail = await axios.get(
        `http://localhost:3001/dishes/${id}`
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

export const filterProducts = (type, order) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/dishes?filterMealTypeBy=${type}&orderBy=${order}`
      );
      dispatch({
        type: FILTERS_TYPE,
        payload: response.data.dish,
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
  //   return async (dispatch) =>{
  //     try {
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
};

export const setShoppingCart = () =>async (dispatch)=>{

  // const response = await axios.get("ruta back")   --- aqui va la coneccion con el back para traer la info del cart
  const shoppingCart = response.data;
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  dispatch({
    type:SET_SHOPPINGCART,
    payload: shoppingCart,
  });
};

export const addToShoppingCart = (productId) => async (dispatch, getState)=>{

  // const response = await axios.post("ruta back", product) --- aqui va la coneccion con el back para agregar un producto al cart
  const updatedShoppingCart = response.data;
  localStorage.setItem("shoppingCart", JSON.stringify(updatedShoppingCart));

  dispatch({
    type: ADD_TO_SHOPPINGCART,
    payload: updatedShoppingCart,
  });
};

export const removeFromShoppingCart = (productId) => async (dispatch, getState)=>{
  // const response = await axios.delete("rute back", productId) --- aqui va la coneccion con el back para quitar un producto del cart
  const updatedShoppingCart = response.data;
  localStorage.setItem("shoppingCart", JSON.stringify(updatedShoppingCart));

  dispatch({
    type: REMOVE_FROM_SHOPPINGCART,
    payload: updatedShoppingCart,
  });
};

export const clearShoppingCart = () => async (dispatch)=>{
  // const response = await axios.delete(" ruta back") --- aqui va la coneccion con el back para quitar un producto del cart
  const updatedShoppingCart = response.data;
  localStorage.setItem("shoppingCart", JSON.stringify(updatedShoppingCart));

  dispatch({
    type:CLEAR_SHOPPINGCART,
    payload: updatedShoppingCart,
  });
};


