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
  align-items: center;
  align-self: center;
  align-items: center;
`;
const SignUPButton = styled.button`
  background-color: black;
  color: #f6f6f6;
  font-size: 1.2vw;
  font-family: 'Delicious Handrawn', cursive;
  min-width: 12vw;
  height: 3.5vw;
  border-radius: 2vw;
  margin: 0;
  padding: 0 2vw;
  cursor:pointer;
`;
const SignINButton = styled.a`
  background-color: none;
  font-family: 'Delicious Handrawn', cursive;
  color: #292929;
  min-width: 5vw;
  font-size: 1.5vw;
  cursor:pointer;
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
  SignUPButton,
  SignINButton
};
