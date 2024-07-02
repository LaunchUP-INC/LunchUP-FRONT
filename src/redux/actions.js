import axios from "axios";
import { dishes } from "../utils/db";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const FILTERS_TYPE = "FILTERS_TYPE";
export const FILTERS_ORDER = "FILTERS_ORDER";

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
      console.log(products.data);

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
      // const productDetail = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6afebc2cf75b47ffa18e47b13b1a2885&includeNutrition=true`)
      console.log(id);
      // console.log(productDetail.data);

      const productDetail = await axios.get(`https://lunchup-back.onrender.com/dishes/${id}`);
      console.log(productDetail.data.dishDetail);
      dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail.data.dishDetail,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };
};

export const filterProducts = (type) => {

  return {
      type: FILTERS_TYPE,
      payload: type,
  };
};

export const orderDishes = (order) =>{

  return{
    type:FILTERS_ORDER,
    payload: order,
  };

}


export const postDish = (dish) =>{

//   return async (dispatch) =>{
//     try {
      
//     } catch (error) {
//       console.error(error);
//     }
//   }
} 
