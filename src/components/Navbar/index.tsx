import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ApplicationState } from "../../store";
import { Cart } from "../../store/cart/types";

const NavContainer = styled.div`
  width: 100%;
  height: 0px;
  /* position: fixed; */
  background: #e7e8eb;
  margin: auto;
`;

const NavHeader = styled.div`
  width: 20%;
  float: left;
  padding: 10px;
  background: aqua;
`;

const NavCart = styled.div`
  width: 20%;
  float: right;
  padding: 10px;
  cursor: pointer;
  background: blue;
`;


const CartSpan = styled.span`
  background-color: #6394f8;
  border-radius: 10px;
  color: white;
  background: red; 
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

interface propsFromState {
  data: Cart;
  loading: boolean;
  errors?: string;
}

type AllProps = propsFromState;

const Navbar: React.FC<AllProps> = ({
  data,
  children }) => {
  return (
    <div>
      {/* <NavContainer>
        <NavHeader>
          <Link to="/">ECart</Link>
        </NavHeader>
        <NavCart>
          <Link to="/cart">
            Cart <CartSpan>{data.items.length}</CartSpan>
          </Link>
        </NavCart>
      </NavContainer> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
           
              <li className="nav-item">
                <a >
                  <Link to="/cart" className="nav-link ">
                    Cart <CartSpan>{data.items.length}</CartSpan>
                  </Link>
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};


const mapStateToProps = ({ cart }: ApplicationState) => ({
  data: cart.data,
  loading: cart.loading,
  errors: cart.errors
});

const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
