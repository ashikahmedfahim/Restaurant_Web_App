import axios from "axios";
import {
  ADMIN_DETAILS_FAIL,
  ADMIN_DETAILS_REQUEST,
  ADMIN_DETAILS_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
  ADMIN_UPDATE_PROFILE_FAIL,
  ADMIN_UPDATE_PROFILE_REQUEST,
  ADMIN_UPDATE_PROFILE_SUCCESS,
  ADMIN_DETAILS_RESET,
  ADMIN_LIST_FAIL,
  ADMIN_LIST_SUCCESS,
  ADMIN_LIST_REQUEST,
  ADMIN_LIST_RESET,
  ADMIN_DELETE_REQUEST,
  ADMIN_DELETE_SUCCESS,
  ADMIN_DELETE_FAIL,
  ADMIN_UPDATE_FAIL,
  ADMIN_UPDATE_SUCCESS,
  ADMIN_UPDATE_REQUEST,
} from "../constant/AdminConstant";
// import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'

export const login = (form) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/auth/admin",
      form,
      config
    );

    // if (localStorage.getItem('seller')) {
    //   req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('seller')).token}`;
    // }

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminLogout = () => (dispatch) => {
  localStorage.removeItem("Admin");
  // localStorage.removeItem("cartItems");
  // localStorage.removeItem("shippingAddress");
  // localStorage.removeItem("paymentMethod");
  dispatch({ type: ADMIN_LOGOUT });
  /*dispatch({ type: ADMIN_DETAILS_RESET });
     dispatch({ type: ORDER_LIST_MY_RESET })
     dispatch({ type: ADMIN_LIST_RESET });
     */
  // document.location.href = "/login";
};

export const register = (form) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/admins/",
      form,
      config
    );

    dispatch({
      type: ADMIN_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("ADMINInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
