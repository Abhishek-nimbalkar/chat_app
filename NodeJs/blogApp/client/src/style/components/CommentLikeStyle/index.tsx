import styled from "styled-components";

const ChatContainer = styled.div`
  position: fixed;
  display: flex;
  top: 90vh;
  left: 45vw;
  height: 40px;
  width: 200px;
  border: 2px solid red;
  border-radius: 25px;
  background-color: #ffffff;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
`;
const LikeButton = styled.button`
display: flex;
  /* height: 40px;
  width: 40px; */
  padding: 5px;
  cursor: pointer;
  color: none;
  /* all: unset; */
  align-items: center;
  background: none;
  border: none;
`;
const CountVar = styled.div`
  font-size: 25px;
  margin: 0 5px;
`;

export { ChatContainer, LikeButton, CountVar };
