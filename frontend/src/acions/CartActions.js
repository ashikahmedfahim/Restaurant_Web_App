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
import { baseUrl } from "../services/constants";

export const addToCart =
  (food_id, qty, user_id, cart_id) => async (dispatch, getState) => {
    let newItems = {
      foodId: food_id,
      quantity: parseInt(qty),
    };
    let OldCartItem = [];

    const getOldCartItem = JSON.parse(localStorage.getItem("CartItems"));
    const filterCartItem = getOldCartItem.result?.items.filter((item) => {
      if (item.foodId._id != food_id) {
        const b = { foodId: item.foodId._id, quantity: item.quantity };
        OldCartItem.push(b);
      }
    });

    const items = [...OldCartItem, newItems];

    console.log("old---------", OldCartItem);
    console.log("NewItem---------", items);

    try {
      dispatch({
        type: CART_ADD_ITEM_REQUEST,
      });

      const Token = JSON.parse(localStorage.getItem("UserInfo"));
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": Token.token,
        },
      };

      const { data } = await axios.put(
        `${baseUrl}users/${user_id}/carts/${cart_id}`,
        { items },
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
export const removeFromCart =
  (food_id, user_id, cart_id) => async (dispatch, getState) => {
    
    let OldCartItem = [];

    const getOldCartItem = JSON.parse(localStorage.getItem("CartItems"));
    const filterCartItem = getOldCartItem.result?.items.filter((item) => {
      if (item.foodId._id != food_id) {
        const b = { foodId: item.foodId._id, quantity: item.quantity };
        OldCartItem.push(b);
      }
    });

    const items = [...OldCartItem];

    console.log("old---------", OldCartItem);
    console.log("NewItem---------", items);

    try {
      dispatch({
        type: CART_ADD_ITEM_REQUEST,
      });

      const Token = JSON.parse(localStorage.getItem("UserInfo"));
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": Token.token,
        },
      };

      const { data } = await axios.put(
        `${baseUrl}users/${user_id}/carts/${cart_id}`,
        { items },
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

export const getCart = (user_id, cart_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_GET_ITEM_REQUEST,
    });
    const Token = JSON.parse(localStorage.getItem("UserInfo"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Token.token,
      },
    };

    const { data } = await axios.get(
      `${baseUrl}users/${user_id}/carts/${cart_id}`,
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
