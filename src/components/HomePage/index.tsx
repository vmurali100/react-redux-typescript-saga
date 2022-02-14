import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ProductItem from "../ProductItem";
import { ApplicationState } from "../../store";
import { Inventory } from "../../store/inventory/types";
import { fetchRequest } from "../../store/inventory/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

const ProductListItems = styled.div` 
  display: flex;
  flex-wrap: wrap;
  color: yellow;
`;


interface PropsFromState {
  loading: boolean;
  data: Inventory[];
  errors?: string;
}


interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({ data, fetchRequest }) => {
  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  const [newData, setNewData] = useState(true);

  const [searchKeyword, setSearchKeyword] = useState('')

  const resultData = () => {
    setNewData(true)
  }

  const removeData = () => {
    setNewData(false)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
  }

  return (
    <Container>
        <form onSubmit={handleSubmit}>
          <input value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} type='inputText' name='inputText' />
          <button onClick={resultData}>Result</button>
          <button onClick={removeData}>Remove</button>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            {

              data.filter(item => item.name.toLowerCase().includes(searchKeyword.toLowerCase())).map(item => {
                if (newData === true) {
                  return <ProductItem item={item} />;
                }
                return newData
              })
            }
          </div>

        </form>
    </Container>
  );
};


const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data
});


const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
