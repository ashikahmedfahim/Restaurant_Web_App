import {
  ADMIN_DETAILS_FAIL,
  ADMIN_DETAILS_REQUEST,
  ADMIN_DETAILS_RESET,
  ADMIN_DETAILS_SUCCESS,
  ADMIN_LIST_REQUEST,
  ADMIN_LIST_SUCCESS,
  ADMIN_LIST_FAIL,
  ADMIN_LIST_RESET,
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
  ADMIN_DELETE_REQUEST,
  ADMIN_DELETE_SUCCESS,
  ADMIN_DELETE_FAIL,
  ADMIN_UPDATE_RESET,
  ADMIN_UPDATE_REQUEST,
  ADMIN_UPDATE_SUCCESS,
  ADMIN_UPDATE_FAIL,
  ADMIN_UPDATE_PROFILE_RESET,
} from "../constant/AdminConstant";

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { adminloading: true };
    case ADMIN_LOGIN_SUCCESS:
      localStorage.setItem("Admin", JSON.stringify({ ...action?.payload }));
      return { adminloading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { adminloading: false, adminerror: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_REGISTER_REQUEST:
      return { loading: true };
    case ADMIN_REGISTER_SUCCESS:
      return { loading: false, ADMINInfo: action.payload };
    case ADMIN_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};
