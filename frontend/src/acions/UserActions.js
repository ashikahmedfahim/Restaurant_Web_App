import axios from "axios";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_RESET_PASS_FAIL,
  USER_RESET_PASS_SUCCESS,
  USER_RESET_PASS_REQUEST,
} from "../constant/UserConstant";
// import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'
import { baseUrl } from "../services/constants";
export const userDetailsActions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });
    const Token = JSON.parse(localStorage.getItem("UserInfo"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Token.token,
      },
    };

    const { data } = await axios.get(`${baseUrl}users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getAllUserActions = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });
    const Token = JSON.parse(localStorage.getItem("Admin"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Token.token,
      },
    };

    const { data } = await axios.get(`${baseUrl}users/`, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userResetPassActions = (id,form) => async (dispatch) => {
  try {
    dispatch({
      type: USER_RESET_PASS_REQUEST,
    });
    const Token = JSON.parse(localStorage.getItem("UserInfo"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Token.token,
      },
    };

    const { data } = await axios.patch(`${baseUrl}users/${id}/reset-password`, form,config);

    dispatch({
      type: USER_RESET_PASS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_RESET_PASS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const userLogin = (form) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${baseUrl}auth/user`, form, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const Userlogout = () => (dispatch) => {
  localStorage.removeItem("UserInfo");
  // localStorage.removeItem("cartItems");
  dispatch({ type: USER_LOGOUT });
  // dispatch({ type: USER_DETAILS_RESET });
  /*   dispatch({ type: ORDER_LIST_MY_RESET })
   */
  // dispatch({ type: USER_LIST_RESET });
  document.location.href = "/";
};

export const userRegister = (form) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${baseUrl}users`, form, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
