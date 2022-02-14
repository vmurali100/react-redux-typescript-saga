import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";


const Routes: React.SFC = () => (
  <div>
    <Route
    exact
      path="/"
      render={() => (
        <Navbar>
          <HomePage />
        </Navbar>
      )}
    />
    <Route
      path="/cart"
      render={() => (
        <Navbar>
          <Cart />
        </Navbar>
      )}
    />
  </div>
);

export default Routes;
