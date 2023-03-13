import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
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
  TableDivStyle,
  LogOutButton,
  AddProductButton,
} from "style/components/ProductStyle";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
import TableComp from "components/Table";
import ModelComp from "components/Modal";

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
  const nav = useNavigate();
  const logOut = (): void => {
    // console.log("click");
    localStorage.removeItem("user");
    nav("/");
  };

  const TableDataP = useSelector((state: any) => state.Products[1]);
  // console.log(TableDataP);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navToUsers=()=>nav("/users")
  const navToProducts=()=>nav("/products")
  return (
    <>
      <MainDivStyle>
        <LeftConatiner>
          <LogoStyle>
            <img src={Logo} style={{ width: "100%"}} alt="" />
            <ButtonStyle onClick={navToProducts}>
              <img src={i1} alt="" style={{height:"1.3vw" }} /> Product
            </ButtonStyle>
            <ButtonStyle onClick={navToUsers}>
              <img src={i2} alt="" style={{height:"1.3vw" }}/> Contact
            </ButtonStyle>
          </LogoStyle>
        </LeftConatiner>

        <RightConatiner>
          <TopNavStyle>
            <LogOutButton  onClick={logOut}>
              <img src={pow} style={{height:"2.5vw"}} alt="" />
            </LogOutButton>
          </TopNavStyle>
          <ContentDivStyle>
            <TableHeadingStyle>
              Product
              <AddProductButton type="submit" onClick={handleShow}>
                Add Product
              </AddProductButton>
            </TableHeadingStyle>
            <TableDivStyle>
              <TableComp data={TableDataP}  />
            </TableDivStyle>
          </ContentDivStyle>
        </RightConatiner>
      </MainDivStyle>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Product;
