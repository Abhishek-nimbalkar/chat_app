import styled from "styled-components";

const MainDivStyle = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const LeftConatiner = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

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
  font-size: 1.2vw;
  line-height: 17px;
  /* identical to box height */
  text-align: left;
  gap: 2vw;
  word-spacing: 1.5vw;
  padding-left: 2vw;
  /* align-items: center; */
  width: 100%;
  height: 4vw;
  margin-top: 2vw;
  margin-left: 2vw;
  border: 0;
  border-radius: 40px;

  color: #000000;
  background: #fafafa;
`;

const TopNavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10vw;
  width: 80vw;
  background: #fafafa;
`;
const ContentDivStyle = styled.div`
  padding: 2vw;
  /* padding-top:5vw; */
  height: 82vh;
  width: 76vw;
`;
const TableHeadingStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5vw;
  width: 100%;

  font-family: "Inter";
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

const LogOutButton = styled.button`
  background: rgb(250, 250, 250);
  border: 0;
  height: 1vw;
  width: 1vw;
  z-index: 1;
  margin-right: 5vw;
`;
const AddProductButton = styled.button`
  background: #1d2e88;
  border-radius: 30px;
  height: 2.5vw;
  width: 10vw;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9vw;
  line-height: 17px;
  /* identical to box height */

  color: #ffffff;
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
  LogOutButton,
  AddProductButton,
};
