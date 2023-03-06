import styled from "styled-components";

const MainDivStyle = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const LeftConatiner = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 25vw;
  background: #ffebb1;
`;
const RightConatiner = styled.div`
  height: 100vh;
  width: 80vw;
`;
const LogoStyle = styled.div`
  height: 15vw;
`;
const ButtonStyle = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  width: 100%;
  height: 2vw;
  margin-top: 2vw;

  color: #000000;
  background: #fafafa;
`;


const TopNavStyle = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 10vw;
width: 80vw;
background: #FAFAFA;
`;
const ContentDivStyle = styled.div`
padding: 2vw;
/* padding-top:5vw; */
height: 82vh;
width:76vw
`;
const TableHeadingStyle=styled.div`
display: flex;
justify-content: space-between;
height: 5vw;
width: 100%;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 2vw;
line-height: 29px;
/* identical to box height */

min-height: 5vw;


color: #000000;
`;
const TableDivStyle = styled.div`
height: 95%;
width: 100%;
overflow-y: scroll;
`;

export {
  MainDivStyle,
  TopNavStyle,
  ContentDivStyle,
  TableDivStyle,
  LeftConatiner,
  RightConatiner,
  LogoStyle,
  ButtonStyle,
  TableHeadingStyle,
  
};
