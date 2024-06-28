import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const FILTERS = 'FILTERS';

const productIds = [716429, 716430, 716431, 716432, 716433]; // Ejemplo de IDs de productos

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const requests = productIds.map(id =>
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=5c8d4df2c99a46b5bcdf4a9d604bc6d9&includeNutrition=true`)
      );
      const responses = await Promise.all(requests);
      const products = responses.map(response => response.data);

      console.log('Fetched products:', products); // Verificar la respuesta

      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};


export const getProductDetail = (id) =>{
  return async (dispatch) =>{
    try {

      const productDetail = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6afebc2cf75b47ffa18e47b13b1a2885&includeNutrition=true`)
      
      console.log(productDetail.data);
      dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail.data,
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

/* export default fetchProducts=(filter)=>{
  return async (dispatch)=>{
    dispatch({
      type: filter,
      payload: filter
    })
  }
} */