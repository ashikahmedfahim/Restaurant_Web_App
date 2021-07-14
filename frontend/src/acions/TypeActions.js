import axios from 'axios'
import {
  TYPE_ADD_REQUEST,
  TYPE_ADD_SUCCESS,
  TYPE_ADD_FAIL,
  TYPE_GET_REQUEST,
  TYPE_GET_SUCCESS,
  TYPE_GET_FAIL,
  TYPE_DELETE_REQUEST,
  TYPE_DELETE_SUCCESS,
  TYPE_DELETE_FAIL,
  TYPE_UPDATE_REQUEST,
  TYPE_UPDATE_SUCCESS,
  TYPE_UPDATE_FAIL,
} from '../constant/TypeConstant'



export const addType = (name) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TYPE_ADD_REQUEST,
    })

    const {
      adminLogin: { adminInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo}`,
      },
    }

    const { data } = await axios.post(`http://localhost:5000/api/types`, name, config)

    dispatch({
      type: TYPE_ADD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      // dispatch(logout())
    }
    dispatch({
      type: TYPE_ADD_FAIL,
      payload: message,
    })
  }
}
export const getType = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TYPE_GET_REQUEST,
    })

    const {
      adminLogin: { adminInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo}`,
      },
    }

    const { data } = await axios.get(`http://localhost:5000/api/types`, config)

    dispatch({
      type: TYPE_GET_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      // dispatch(logout())
    }
    dispatch({
      type: TYPE_GET_FAIL,
      payload: message,
    })
  }
}
