import { CartActionTypes } from "./types";
import { Inventory } from "../inventory/types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../index";

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;

export const fetchCartRequest: AppThunk = () => {
  return (dispatch: Dispatch, state: ApplicationState): Action => {
    try {
      return dispatch({
        type: CartActionTypes.FETCH_CART_SUCCESS,
        payload: state.cart 
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.FETCH_CART_ERROR
      });
    }
  };
};

type NewType = ThunkAction<void, ApplicationState, Inventory, Action<string>>;

export const addToCart: ActionCreator<NewType> = item => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: CartActionTypes.ADD_TO_CART, 
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.ADD_TO_CART_FAILURE,
        payload: null
      });
    }
  };
};

export const removeAllToCart: ActionCreator<NewType> = cartItems => {
  return (dispatch: Dispatch): Action => {
      return dispatch({
        type: CartActionTypes.REMOVEALL_FROM_CART, 
        payload: cartItems 
      });
  };
};

export const removeItem: ActionCreator<NewType> = cartItem => {
  return (dispatch: Dispatch): Action => {
      return dispatch({
        type: CartActionTypes.REMOVE_FROM_ITEM, 
        payload: cartItem
      });
  };
}
