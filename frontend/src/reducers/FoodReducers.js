import {
    FOOD_LIST_REQUEST,
  FOOD_LIST_SUCCESS,
  FOOD_LIST_FAIL,
  FOOD_DETAILS_REQUEST,
  FOOD_DETAILS_SUCCESS,
  FOOD_DETAILS_FAIL,
  FOOD_DELETE_REQUEST,
  FOOD_DELETE_SUCCESS,
  FOOD_DELETE_FAIL,
  FOOD_ADD_RESET,
  FOOD_ADD_FAIL,
  FOOD_ADD_SUCCESS,
  FOOD_ADD_REQUEST,
  FOOD_UPDATE_REQUEST,
  FOOD_UPDATE_SUCCESS,
  FOOD_UPDATE_FAIL,
  FOOD_UPDATE_RESET,
  } from '../constant/FoodConstant';
  
  
export const foodListReducer = (state = {}, action) => {
    switch (action.type) {
      case FOOD_LIST_REQUEST:
        return { foodListloading: true, FOODS: [] }
      case FOOD_LIST_SUCCESS:
        return {
          foodListloading: false,
          FOODS: action.payload,
          // pages: action.payload.pages,
          // page: action.payload.page,
        }
      case FOOD_LIST_FAIL:
        return { foodListloading: false, foodListerror: action.payload }
      default:
        return state
    }
  }
  
  export const foodDetailsReducer = (
    state = {FOOD: {}},
    action
  ) => {
    switch (action.type) {
      case FOOD_DETAILS_REQUEST:
        return { ...state, loading: true }
      case FOOD_DETAILS_SUCCESS:
        return { loading: false, FOOD: action.payload }
      case FOOD_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const foodDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case FOOD_DELETE_REQUEST:
        return { loading: true }
      case FOOD_DELETE_SUCCESS:
        return { loading: false, success: true }
      case FOOD_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const foodAddReducer = (state = {}, action) => {
    switch (action.type) {
      case FOOD_ADD_REQUEST:
        return { loading: true }
      case FOOD_ADD_SUCCESS:
        return { loading: false, success: true, FOOD: action.payload }
      case FOOD_ADD_FAIL:
        return { loading: false, error: action.payload }
      case FOOD_ADD_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const foodUpdateReducer = (state = { FOOD: {} }, action) => {
    switch (action.type) {
      case FOOD_UPDATE_REQUEST:
        return { loading: true }
      case FOOD_UPDATE_SUCCESS:
        return { loading: false, success: true, FOOD: action.payload }
      case FOOD_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case FOOD_UPDATE_RESET:
        return { FOOD: {} }
      default:
        return state
    }
  }
  