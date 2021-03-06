import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  foodListReducer,
  foodDetailsReducer,
  foodDeleteReducer,
  foodAddReducer,
  foodUpdateReducer,
} from "./reducers/FoodReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userResetPassReducer,
  getAllUserReducer
  // userUpdateProfileReducer,
  // userListReducer,
  // userDeleteReducer,
  // userUpdateReducer,
} from "./reducers/UserReducers";
import {
  adminLoginReducer,
  adminRegisterReducer,
} from "./reducers/AdminReducers";
import { typeAddReducer, typeGetReducer } from "./reducers/TypeReducers";
import {
  categoryAddReducer,
  categoryGetReducer,
} from "./reducers/CategoryReducers";
import { cartAddReducer, cartGetReducer } from "./reducers/CartReducers";

const reducer = combineReducers({
  foodList: foodListReducer,
  foodDetails: foodDetailsReducer,
  foodDelete: foodDeleteReducer,
  foodAdd: foodAddReducer,
  foodUpdate: foodUpdateReducer,
  userLogin: userLoginReducer,
  UserDetails: userDetailsReducer,
  AllUser: getAllUserReducer,
  userResetPass:userResetPassReducer,
  userRegister: userRegisterReducer,
  adminLogin: adminLoginReducer,
  adminRegister: adminRegisterReducer,
  typeAdd: typeAddReducer,
  allTypes: typeGetReducer,
  categoryAdd: categoryAddReducer,
  allCategory: categoryGetReducer,
  cartAdd: cartAddReducer,
  cartGet: cartGetReducer,
  // userDetails: userDetailsReducer,
  // userUpdateProfile: userUpdateProfileReducer,
  // userList: userListReducer,
  // userDelete: userDeleteReducer,
  // userUpdate: userUpdateReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
