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

      const User = JSON.parse(localStorage.getItem("UserInfo"));
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${User.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/users/`,
        cart,
        config
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
    const User = JSON.parse(localStorage.getItem("UserInfo"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${User.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/users/${user_id}/cart`,
      config
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
