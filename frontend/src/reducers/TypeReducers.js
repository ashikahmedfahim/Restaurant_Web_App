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
} from "../constant/TypeConstant";

export const typeAddReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPE_ADD_REQUEST:
      return { typeloading: true };
    case TYPE_ADD_SUCCESS:
      return { typeloading: false, TypeInfo: action.payload };
    case TYPE_ADD_FAIL:
      return { typeloading: false, typeerror: action.payload };
    default:
      return state;
  }
};

export const typeGetReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPE_GET_REQUEST:
      return { typeloading: true };
    case TYPE_GET_SUCCESS:
      localStorage.setItem("Type", JSON.stringify({ ...action?.payload }));
      return { typeloading: false, AllTypeInfo: action.payload };
    case TYPE_GET_FAIL:
      return { typeloading: false, typeerror: action.payload };
    default:
      return state;
  }
};
