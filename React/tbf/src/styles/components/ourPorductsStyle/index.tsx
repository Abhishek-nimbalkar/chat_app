import styled from "styled-components";

const OurProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  height: 80vh;
  width: 100vw;
`;
const OurProductsTopStyle = styled.div`
  margin-top: 2vw;
  /* height: 20vh; */
  width: 100%;
`;
const OurProductsBottomStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  width: 100vw;
`;
const ProductWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 10vw;
  align-items: center;
`;

const ProductStyleWrapper = styled.div`
  width: 50%;
  gap: 2vw;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 69px;
  /* identical to box height, or 144% */

  display: flex;
  align-items: center;
  align-content: center;
  padding-left: 8vw;

  /* Neutral/ 90 */

  color: #1e2a3b;
`;
const ProductDiscriptionStyleWrapper = styled.div`
  width: 50%;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */

  color: #6f8587;
`;
const OurProductDownHeading = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */

  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 5vw;

  color: #000000;
`;
export {
  OurProductsStyled,
  OurProductsTopStyle,
  OurProductsBottomStyle,
  ProductStyleWrapper,
  ProductDiscriptionStyleWrapper,
  ProductWrapper,
  OurProductDownHeading
};
