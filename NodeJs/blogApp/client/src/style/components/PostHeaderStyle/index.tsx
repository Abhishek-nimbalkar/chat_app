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
  height: 80px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid;
`;
const HeaderWrapperLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 150px;
  margin-left: 5vw;
`;
const HeaderWrapperRight = styled.div`
  display: flex;
  width: 350px;
  padding-right: 2vw;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  align-items: center;
`;
const SignUPButton = styled.button`
  background-color: black;
  color: #f6f6f6;
  font-size: 20px;
  font-family: "Delicious Handrawn", cursive;
  min-width: 150px;
  height: 40px;
  border-radius: 25px;
  margin: 0;
  padding: 0 2vw;
  cursor: pointer;
`;
const SignINButton = styled.a`
  background-color: none;
  font-family: "Delicious Handrawn", cursive;
  color: #292929;
  /* min-width: 5px; */
  font-size: 25px;
  cursor: pointer;
`;
const WriteButton = styled.div`
  font-family: "Delicious Handrawn", cursive;
  color: #d5fa07;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 40vw;
  margin-left: 15vw;
`;

export {
  HeaderWrapper,
  PostBody,
  PostsContainer,
  HeaderWrapperLeft,
  HeaderWrapperRight,
  SignUPButton,
  SignINButton,
  WriteButton
};
