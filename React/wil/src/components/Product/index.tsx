import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addUser,
  ProductsData,
  ProductType,
  UserType,
} from "store/Slice";
import { useEffect } from "react";
import { useGet } from "appLayer/useGet";
import {
  LeftConatiner,
  LogoStyle,
  MainDivStyle,
  RightConatiner,
  ButtonStyle,
  TopNavStyle,
  TableHeadingStyle,
  ContentDivStyle,
  TableDivStyle
} from "style/components/ProductStyle";
import { useTable } from 'react-table'
// const callApi:any=()=>{

//   return {data};
// }

import Logo from "assets/images/logo.png";
import i1 from "assets/images/P.png";
import i2 from "assets/images/u.png";
import pow from "assets/images/LogoOut.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Table } from "semantic-ui-react";
import React from "react";

const Product = () => {
  //   const dispatch=useDispatch();
  //  const ProductPersitData:any=useSelector((state:any)=>state.Products);

  //   // useEffect(()=>{

  //   // },[])

  // const {data}=useGet("products");
  // const Products:any=data?.data;
  // console.log("Api Data====",Products);
  // // dispatch((addProduct(Products)))

  //    console.log("Persisted Product data======================",ProductPersitData);
  // useEffect(()=>{

  // },[])
  const nav=useNavigate();
  const logOut=():void=>{
    // console.log("click");
    localStorage.removeItem("user");
    nav("/");
  }

  const TableDataP=useSelector((state: any) => state.Products[1]);
  console.log(TableDataP);
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Price',
        accessor: 'col2',
      },
      {
        Header: 'Description',
        accessor: 'col3',
      },
    ],
    []
  )
  return (

    
    <MainDivStyle>
      <LeftConatiner>
        <LogoStyle>
          <img src={Logo} style={{ width: "100%" }} alt="" />
          <ButtonStyle>
            <img src={i1} alt="" /> Product
          </ButtonStyle>
          <ButtonStyle>
            <img src={i2} alt="" /> Contact
          </ButtonStyle>
        </LogoStyle>
      </LeftConatiner>

      <RightConatiner>
        <TopNavStyle>
          <button onClick={logOut}><img src={pow} style={{padding:"3vw"}} alt="" /></button>
        
        </TopNavStyle>
        <ContentDivStyle>
          <TableHeadingStyle>
            Product
            <button type="submit" >Add Product</button>
          </TableHeadingStyle>
          <TableDivStyle>

          <Table data={TableDataP} />
            
          </TableDivStyle>

        </ContentDivStyle>
      </RightConatiner>
    </MainDivStyle>
  );
};

export default Product;
