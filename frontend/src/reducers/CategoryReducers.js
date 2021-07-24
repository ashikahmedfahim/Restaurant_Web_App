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

export const categoryAddReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_ADD_REQUEST:
      return { categoryloading: true };
    case CATEGORY_ADD_SUCCESS:
      return { categoryloading: false, CategoryInfo: action.payload };
    case CATEGORY_ADD_FAIL:
      return { categoryloading: false, categoryerror: action.payload };
    default:
      return state;
  }
};

export const categoryGetReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_GET_REQUEST:
      return { categoryloading: true };
    case CATEGORY_GET_SUCCESS:
      localStorage.setItem("Category", JSON.stringify({ ...action?.payload }));
      return { categoryloading: false, AllCategoryInfo: action.payload };
    case CATEGORY_GET_FAIL:
      return { categoryloading: false, categoryerror: action.payload };
    default:
      return state;
  }
};
