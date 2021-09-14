import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_GET_ITEM_REQUEST,
  CART_GET_ITEM_SUCCESS,
  CART_GET_ITEM_FAIL,
  CART_EDIT_ITEM_REQUEST,
  CART_EDIT_ITEM_SUCCESS,
  CART_EDIT_ITEM_FAIL,
  CART_REMOVE_ITEM_REQUEST,
  CART_REMOVE_ITEM_SUCCESS,
  CART_REMOVE_ITEM_FAIL,
  CART_SAVE_SHIPPING_ADDRESS_REQUEST,
  CART_SAVE_SHIPPING_ADDRESS_SUCCESS,
  CART_SAVE_SHIPPING_ADDRESS_FAIL,
  CART_SAVE_PAYMENT_METHOD_REQUEST,
  CART_SAVE_PAYMENT_METHOD_SUCCESS,
  CART_SAVE_PAYMENT_METHOD_FAIL,
  CART_CLEAR_ITEMS,
} from "../constant/CartConstant";

export const cartAddReducer = (state = { CartItems: {} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM_REQUEST:
      return { cartloading: true };
    case CART_ADD_ITEM_SUCCESS:
      return { cartloading: false, success: true, CartItems: action.payload };
    case CART_ADD_ITEM_FAIL:
      return { cartloading: false, carterror: action.payload };
    default:
      return state;
  }
};

export const cartGetReducer = (state = { CartItems: {} }, action) => {
  switch (action.type) {
    case CART_GET_ITEM_REQUEST:
      return { cartloading: true };
    case CART_GET_ITEM_SUCCESS:
      localStorage.setItem("CartItems", JSON.stringify({ ...action?.payload }));
      return { cartloading: false, success: true, CartItems: action.payload };
    case CART_GET_ITEM_FAIL:
      return { cartloading: false, carterror: action.payload };
    default:
      return state;
  }
};

export const CartUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_EDIT_ITEM_REQUEST:
      return { loading: true };
    case CART_EDIT_ITEM_SUCCESS:
      return { loading: false, success: true, FOOD: action.payload };
    case CART_EDIT_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const CartClearReducer = (state = { CartItems: {} }, action) => {
  switch (action.type) {
    case CART_CLEAR_ITEMS:
      return { CartItems: {} };
    default:
      return state;
  }
};

/* 

  export const cartReducer = (
    state = { cartItems: [], shippingAddress: {} },
    action
  ) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload
  
        const existItem = state.cartItems.find((x) => x.product === item.product)
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          }
        }
      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        }
      case CART_SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload,
        }
      case CART_SAVE_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        }
      case CART_CLEAR_ITEMS:
        return {
          ...state,
          cartItems: [],
        }
      default:
        return state
    }
  } */
