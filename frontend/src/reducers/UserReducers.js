import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
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
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_RESET,
  USER_RESET_PASS_REQUEST,
  USER_RESET_PASS_SUCCESS,
  USER_RESET_PASS_FAIL,
  USER_UPDATE_PROFILE_RESET,
} from "../constant/UserConstant";

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { userDetailsloading: true };
    case USER_DETAILS_SUCCESS:
      
      // localStorage.setItem("UserInfo", JSON.stringify({ ...action?.payload }));
      return { userDetailsloading: false, UserDetailsInfo: action.payload };
    case USER_DETAILS_FAIL:
      return { userDetailsloading: false, userDetailserror: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const getAllUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { AllUserloading: true };
    case USER_LIST_SUCCESS:
      return { AllUserloading: false, AllUserInfo: action.payload };
    case USER_LIST_FAIL:
      return { AllUserloading: false, AllUsererror: action.payload };
    default:
      return state;
  }
};
export const userResetPassReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESET_PASS_REQUEST:
      return { userResetPassloading: true };
    case USER_RESET_PASS_SUCCESS:
      
      return { userResetPassloading: false, UserResetPassInfo: action.payload };
    case USER_RESET_PASS_FAIL:
      return { userResetPassloading: false, userResetPasserror: action.payload };
    default:
      return state;
  }
};
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { userloading: true };
    case USER_LOGIN_SUCCESS:
      
      localStorage.setItem("UserInfo", JSON.stringify({ ...action?.payload }));
      return { userloading: false, UserInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { userloading: false, usererror: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      localStorage.setItem("UserInfo", JSON.stringify({ ...action?.payload }));
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
