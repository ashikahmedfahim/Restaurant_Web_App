import axios from "axios";
import {
  FOOD_LIST_REQUEST,
  FOOD_LIST_SUCCESS,
  FOOD_LIST_FAIL,
  FOOD_DETAILS_REQUEST,
  FOOD_DETAILS_SUCCESS,
  FOOD_DETAILS_FAIL,
  FOOD_DELETE_SUCCESS,
  FOOD_DELETE_REQUEST,
  FOOD_DELETE_FAIL,
  FOOD_ADD_REQUEST,
  FOOD_ADD_SUCCESS,
  FOOD_ADD_FAIL,
  FOOD_UPDATE_REQUEST,
  FOOD_UPDATE_SUCCESS,
  FOOD_UPDATE_FAIL,
} from "../constant/FoodConstant";
/* import { logout } from './userActions'
 */
export const listFOODs =
  // (keyword = "", pageNumber = "") =>
  () => async (dispatch, getState) => {
    console.log("sdg");
    try {
      dispatch({ type: FOOD_LIST_REQUEST });

      const { data } = await axios.get(
        `http://localhost:5000/api/foods`
        // `/api/FOODs?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: FOOD_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FOOD_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listFOODDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: FOOD_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/FOODs/${id}`);

    dispatch({
      type: FOOD_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FOOD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteFOOD = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FOOD_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/FOODs/${id}`, config);

    dispatch({
      type: FOOD_DELETE_SUCCESS,
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
      type: FOOD_DELETE_FAIL,
      payload: message,
    });
  }
};

export const addFood = (food) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FOOD_ADD_REQUEST,
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
      `http://localhost:5000/api/foods`,
      food,
      config
    );

    dispatch({
      type: FOOD_ADD_SUCCESS,
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
      type: FOOD_ADD_FAIL,
      payload: message,
    });
  }
};

export const updateFOOD = (FOOD) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FOOD_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/FOODs/${FOOD._id}`, FOOD, config);

    dispatch({
      type: FOOD_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: FOOD_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      // dispatch(logout())
    }
    dispatch({
      type: FOOD_UPDATE_FAIL,
      payload: message,
    });
  }
};
