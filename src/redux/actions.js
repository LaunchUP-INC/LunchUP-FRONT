import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `https://api.spoonacular.com/recipes/716429/information?apiKey=5c8d4df2c99a46b5bcdf4a9d604bc6d9&includeNutrition=true.`
      );
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
