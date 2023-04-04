import styled from "styled-components";

const PostBody = styled.div`
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #ffc017;
  height: 10vh;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid;
`;
const HeaderWrapperLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 12vw;
  margin-left: 5vw;
`;
const HeaderWrapperRight = styled.div`
  display: flex;
  width: 20vw;
  padding-right: 2vw;
  justify-content: space-evenly;
  column-gap: 2vw;
  align-items: center;
`;
const SignUPButton = styled.button`
  background-color: black;
  color: #f6f6f6;
  min-width: 8vw;
  height: 3.5vw;
  border-radius: 2vw;
  margin: 0;
  padding: 0 2vw;
`;

const PostsContainer = styled.div`
  /* display: flex; */
  height: 5000px;
  width: 100%;
`;

export {
  HeaderWrapper,
  PostBody,
  PostsContainer,
  HeaderWrapperLeft,
  HeaderWrapperRight,
  SignUPButton
};
