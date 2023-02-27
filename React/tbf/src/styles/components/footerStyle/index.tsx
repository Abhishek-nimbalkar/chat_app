import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: #ecf4ed;
`;
const FooterTop = styled.div`
  display: flex;
  padding-top: 1vw;
  height: 12vw;
  gap: 20vw;
`;
const FooterHeadingStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 138% */

  display: flex;
  align-items: center;

  color: #6f8587;
`;
const FooterTopD1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8vw;
`;
const FooterTopD2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterTopD3 = styled.div`
  display: flex;
  height: 5vw;
  width: 30vw;
`;
const FooterBottom = styled.div`
  display: flex;
`;
const FooterBottomD1=styled.div`
display: flex;
width: 50%;
justify-content: flex-start;
`;
const FooterBottomD2=styled.div`
display: flex;
width: 50%;

justify-content: flex-end;
`;
const FooterBottomP = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  /* or 183% */

  display: flex;
  align-items: center;
  margin:2vw;

  color: #000000;
`;
const FooterLink = styled.a`
  text-decoration: none;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 79px;
  /* or 494% */

  display: flex;
  align-items: center;

  color: #2c4548;
`;

export {
  FooterStyle,
  FooterTop,
  FooterBottom,
  FooterHeadingStyle,
  FooterTopD1,
  FooterTopD2,
  FooterTopD3,
  FooterLink,
  FooterBottomP,
  FooterBottomD1,
  FooterBottomD2
};
