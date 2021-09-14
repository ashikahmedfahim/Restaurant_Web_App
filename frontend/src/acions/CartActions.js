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
    let items = {
      foodId: food_id,
      quantity: parseInt(qty),
    };
    const OldItem = JSON.parse(localStorage.getItem("CartItems"));
    // const all = OldItem.result?.items;
    // console.log(OldItem);
    const old = OldItem.result?.items.filter((item) => {
      if (item.foodId._id != food_id) {
        console.log(item.foodId._id);
        return { foodId: item.foodId._id, quantity: item.quantity };
      }
      return { foodId: item.foodId._id, quantity: item.quantity };
    });
    // OldItem.result?.items.map((item) =>
    //   console.log("OldItem---------", item.foodId._id, item.quantity)
    // );

    const newItems = [...old, items];

    console.log("old---------", old);
    console.log("NewItem---------", newItems);
    // all.push(items)
    // console.log("NewItem---------", all);

    // console.log(items);

    // localStorage.setItem('CartItems', JSON.stringify(getState().cart.cartItems))

    // try {
    //   dispatch({
    //     type: CART_ADD_ITEM_REQUEST,
    //   });

    //   const Token = JSON.parse(localStorage.getItem("UserInfo"));
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-auth-token": Token.token,
    //     },
    //   };

    //   const { data } = await axios.put(
    //     `${baseUrl}users/${user_id}/carts/${cart_id}`,
    //     all,
    //     config
    //   );

    //   dispatch({
    //     type: CART_ADD_ITEM_SUCCESS,
    //     payload: data,
    //   });
    // } catch (error) {
    //   const message =
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message;
    //   if (message === "Not authorized, token failed") {
    //     // dispatch(logout())
    //   }
    //   dispatch({
    //     type: CART_ADD_ITEM_FAIL,
    //     payload: message,
    //   });
    // }
  };

export const getCart = (user_id, cart_id) => async (dispatch, getState) => {
  console.log("user_id", user_id);
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
