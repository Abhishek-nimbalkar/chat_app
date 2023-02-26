import styled from "styled-components";

const PageHeadingStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 600;
  font-size: 2vw;
  line-height: 70px;
  /* or 389% */

  display: flex;
  align-items: center;
  margin-left: 8vw;

  color: #a0ce6d;
`;
const PageHeadingBorderStyle = styled.div`
  border: 1px solid rgba(184, 184, 184, 0.45);
  transform: rotate(0.02deg);
  width: 85%;
  margin-left: 0.5vw;
`;

const PageAnotherHeadignStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 74px;
  /* or 123% */

  display: flex;
  align-items: center;

  color: #000000;
`;
const PageParagraphStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */

  

  color: #6f8587;
`;
export { PageHeadingStyle, PageHeadingBorderStyle, PageAnotherHeadignStyle,PageParagraphStyle };
