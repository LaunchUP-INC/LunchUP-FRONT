import axios from "axios";
import { toast } from "react-toastify";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_PRODUCT_DETAIL_ERROR = "GET_PRODUCT_DETAIL_ERROR";
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
export const HANDLE_ERROR = "HANDLE_ERROR";
export const LOGIN = "LOGIN";
export const GET_SCHOOLS = "GET_SCHOOLS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const GET_CHILD = "GET_CHILD";
export const POST_CHILD = "POST_CHILD";

//constantes para trabajar de manera local y para deployar, comentar y descomentar segun el caso.
//export const URLD = "https://lunchup-back.onrender.com";
export const URLD = "http://localhost:3001";

export const handleError = (error) => {
  const errorMessage = error.response?.data?.message;
  return {
    type: HANDLE_ERROR,
    payload: errorMessage,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URLD}/register`, {
        firstname: userData.name,
        lastname: userData.lastName,
        telephone: userData.phone,
        email: userData.email,
        password: userData.password,
        isAdmin: false,
        children: userData.children
      });

      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      localStorage.setItem("userId", response.data.newId);
      return true;
    } catch (error) {
      console.log(error);
      dispatch(handleError(error));
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`${URLD}/dishes`);
      const { allDishes } = products.data;

      for (let i = 0; i < allDishes.length; i++) {
        const { data } = await axios.get(
          `${URLD}/dishes/${allDishes[i].id}/stock`
        );
        allDishes[i].stock = data.stock;
      }

      // const products = await axios.get(`${URLD}/dishes`);

      dispatch({
        type: FETCH_PRODUCTS,
        payload: allDishes,
      });
    } catch (error) {
      // dispatch({
      //   type: FETCH_PRODUCTS_ERROR,
      //   payload: error.message,
      // });
      dispatch(handleError(error));
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URLD}/user`);
      const { users } = response.data;

      dispatch({
        type: FETCH_ALL_USERS,
        payload: users,
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
};

export const fetchUserData = (userData) => {
  return async (dispatch, getState) => {
    // const iDUser = localStorage.getItem("userId");
    // const userId = getState().userId;
    const token = getState().token;
    try {
      const response = await axios.get(`${URLD}/user/${userData.email}`, {
        headers: { Authorization: `Bearer ${token.token}` },
      });
      localStorage.setItem("user", JSON.stringify(response.data.users));
      dispatch({
        type: FETCH_USER_DATA,
        payload: response.data.users,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
};

export const loginUser = (loginData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URLD}/login`, loginData);
      if (response.data.access) {
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: LOGIN,
          payload: {
            access: response.data.access,
            token: response.data.token,
          },
        });
        return response.data; // Retorna true si el inicio de sesión es exitoso
      } else {
        alert("Contraseña o email incorrectos");
        return false; // Retorna false si el inicio de sesión falla
      }
    } catch (error) {
      dispatch(handleError(error));
      return false; // Retorna false si ocurre un error
    }
  };
};

export const checkUser = (checkUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/register/check",
        { email: checkUser.email }
      );
      if (response.data.isRegistered.access) {
        localStorage.setItem("token", response.data.isRegistered.token);
        dispatch({
          type: LOGIN,
          payload: {
            access: response.data.isRegistered.access,
            token: response.data.isRegistered.token,
          },
        });
        return response.data.isRegistered; // Retorna true si el inicio de sesión es exitoso
      }
    } catch (error) {
      dispatch(handleError(error));
      return false;
    }
  };
};

export const setUserAdminBan = (id, user) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${URLD}/user/${id}`, user);
      dispatch(fetchUsers());

      return "success";
    } catch (error) {
      console.error(error);
      return "error";
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
      dispatch(handleError(error));
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

      url += params.join("&");

      const response = await axios.get(url);
      dispatch({
        type: FILTERS_TYPE,
        payload: response.data.allDishes,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(handleError(error));
    }
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
      const response = await axios.put(`${URLD}/dishes/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch({
        type: POST_DISH_SUCCESS,
        payload: response.data.dish,
      });
      dispatch(fetchProducts());
    } catch (error) {
      dispatch({
        type: POST_DISH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const updateStock = (id, quantity) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URLD}/dishes/${id}/stock`, {
        quantity: Number(quantity),
      });
      dispatch(fetchProducts());
      return data.stock;
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteDish = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${URLD}/dishes/${id}/logical`);
      dispatch({
        type: DELETE_DISH_SUCCESS,
        payload: response.data,
      });
      dispatch(fetchProducts());
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
      // console.log(response.data);
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
  return async (dispatch) => {
    try {
      const userString = localStorage.getItem("user");
      const user = userString ? JSON.parse(userString) : null;
      const userId = user.id;
      console.log(userId);
      const response = await axios.post(
        `${URLD}/user/${userId}/reviews/`,
        review
      );
      dispatch({
        type: POST_REVIEWS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const getSchools = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URLD}/school`);
      dispatch({
        type: GET_SCHOOLS,
        payload: response.data.schools,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
export const getChild = () => {
  return async (dispatch, getState) => {
    const { id } = getState().user;
    try {
      const response = await axios.get(`${URLD}/user/${id}/child`);
      return dispatch({
        type: GET_CHILD,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const postChild = (child) => {
  return async (dispatch, getState) => {
    const { id } = getState().user;
    try {
      const response = await axios.post(`${URLD}/user/${id}/child`, {
        firstname: child.name,
        lastname: child.lastName,
        gradeLevel: child.grade,
        schoolId: child.schoolId,
      });

      return dispatch({
        type: POST_CHILD,
        payload: response.data.child,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
