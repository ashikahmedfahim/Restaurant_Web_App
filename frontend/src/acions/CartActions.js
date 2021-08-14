import axios from "axios";
import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_GET_ITEM_REQUEST,
  CART_GET_ITEM_SUCCESS,
  CART_GET_ITEM_FAIL,
  CART_EDIT_ITEM_REQUEST,
  CART_EDIT_ITEM_SUCCESS,
  CART_EDIT_ITEM_FAIL,
  CART_REMOVE_ITEM_REQUEST,
  CART_REMOVE_ITEM_SUCCESS,
  CART_REMOVE_ITEM_FAIL,
  CART_SAVE_SHIPPING_ADDRESS_REQUEST,
  CART_SAVE_SHIPPING_ADDRESS_SUCCESS,
  CART_SAVE_SHIPPING_ADDRESS_FAIL,
  CART_SAVE_PAYMENT_METHOD_REQUEST,
  CART_SAVE_PAYMENT_METHOD_SUCCESS,
  CART_SAVE_PAYMENT_METHOD_FAIL,
  CART_CLEAR_ITEMS,
} from "../constant/CartConstant";

export const addToCart =
  (food_id, qty, user_id) => async (dispatch, getState) => {
    let cart = {
      item: food_id,
      qty: qty,
      user: user_id,
    };
    try {
      dispatch({
        type: CART_ADD_ITEM_REQUEST,
      });

      // const {
      //   adminLogin: { adminInfo },
      // } = getState();
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${adminInfo}`,
      //   },
      // };

      const { data } = await axios.post(
        `http://localhost:5000/api/carts`,
        cart
        // config
      );

      dispatch({
        type: CART_ADD_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        // dispatch(logout())
      }
      dispatch({
        type: CART_ADD_ITEM_FAIL,
        payload: message,
      });
    }
  };

export const getCart = (user_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_GET_ITEM_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/carts/${user_id}`

      // config
    );

    dispatch({
      type: CART_GET_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      // dispatch(logout())
    }
    dispatch({
      type: CART_GET_ITEM_FAIL,
      payload: message,
    });
  }
};

// export const addToCart = (id, qty) => async (dispatch, getState) => {

//   const { data } = await axios.get(`/api/products/${id}`)

//   dispatch({
//     type: CART_ADD_ITEM,
//     payload: {
//       product: data._id,
//       name: data.name,
//       image: data.image,
//       price: data.price,
//       countInStock: data.countInStock,
//       qty,
//     },
//   })

//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
// }

// export const removeFromCart = (id) => (dispatch, getState) => {
//   dispatch({
//     type: CART_REMOVE_ITEM,
//     payload: id,
//   })

//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
// }

// export const saveShippingAddress = (data) => (dispatch) => {
//   dispatch({
//     type: CART_SAVE_SHIPPING_ADDRESS,
//     payload: data,
//   });

//   localStorage.setItem("shippingAddress", JSON.stringify(data));
// };

// export const savePaymentMethod = (data) => (dispatch) => {
//   dispatch({
//     type: CART_SAVE_PAYMENT_METHOD,
//     payload: data,
//   });

//   localStorage.setItem("paymentMethod", JSON.stringify(data));
// };
