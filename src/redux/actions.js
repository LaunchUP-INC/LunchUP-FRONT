import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const productIds = [716429, 716430, 716431, 716432, 716433]; // Ejemplo de IDs de productos

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const requests = productIds.map(id =>
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=a6f334a017464603b4e57639f6b52b1b&includeNutrition=true`)
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