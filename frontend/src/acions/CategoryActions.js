import axios from "axios";
import {
  CATEGORY_ADD_REQUEST,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_ADD_FAIL,
  CATEGORY_GET_REQUEST,
  CATEGORY_GET_SUCCESS,
  CATEGORY_GET_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
} from "../constant/CategoryConstant";

export const addCategory = (name) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CATEGORY_ADD_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/categories`,
      name,
      config
    );

    dispatch({
      type: CATEGORY_ADD_SUCCESS,
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
      type: CATEGORY_ADD_FAIL,
      payload: message,
    });
  }
};
export const getCategory = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CATEGORY_GET_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/categories`,
      config
    );

    dispatch({
      type: CATEGORY_GET_SUCCESS,
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
      type: CATEGORY_GET_FAIL,
      payload: message,
    });
  }
};
