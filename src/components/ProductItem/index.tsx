import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Inventory } from "../../store/inventory/types";
import { addToCart } from "../../store/cart/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const ProductContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  flex: 0 0 25%;
  background: red;
`;

const ProductFigure = styled.figure`
  width: 230px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;


const ProductHeader = styled.h1`
  height: 76px;
  background: pink;
`;

const ProductDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
`;

const ProductBrandText = styled.text`
background: black;
`;

const AddToCart = styled.button`
  padding: 10px;
  background-color: blue;
  color: #ffffff;
  border-radius: 10px;
`;

interface propsFromComponent {
  item: Inventory;
  addToCart: (item: any) => any;
}

type Props = propsFromComponent;

const ProductItem: React.FC<Props> = ({ item, addToCart }) => {
  const AddItemToCart = (item: any) => {
    addToCart(item);
  };

  return (
    <div className="col">
      <div className="card" style={{height:300,overflow:'auto'}}>
        <img src={item.image} className="card-img-top" alt="..." style={{width:200}}/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <button className="btn btn-primary" onClick={()=>{AddItemToCart(item)}}>Add To Cart</button>
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    addToCart: (item: any) => dispatch(addToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
