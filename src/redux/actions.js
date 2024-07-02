import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const FILTERS_TYPE = "FILTERS_TYPE";

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
        `http://localhost:3001/dishes?filterMealTypeBy=${type}&order=${order}`
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

export const postDish = (dish) => {
  //   return async (dispatch) =>{
  //     try {
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
};
