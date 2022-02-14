import { Inventory } from "../inventory/types";

export interface Cart {
  items: Inventory[];
}


export enum CartActionTypes {
  ADD_TO_CART = "@@cart/ADD_TO_CART", 
  ADD_TO_CART_FAILURE = "@@cart/ADD_TO_CART_FAILURE", 
  REMOVEALL_FROM_CART = "@@cart/REMOVEALL_FROM_CART", 
  REMOVE_FROM_ITEM = "@@cart/REMOVE_FROM_ITEM",
  FETCH_CART_REQUEST = "@@cart/FETCH_CART_REQUEST", 
  FETCH_CART_SUCCESS = "@@cart/FETCH_CART_SUCCESS",
  FETCH_CART_ERROR = "@@cart/FETCH_CART_ERROR" 
}

export interface cartState {
  readonly loading: boolean;
  readonly data: Cart;
  readonly errors?: string;
}
