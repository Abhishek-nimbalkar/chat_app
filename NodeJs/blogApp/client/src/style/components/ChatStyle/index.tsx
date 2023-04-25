import styled from "styled-components";

const ChatWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 90vh;
  width: 100%;
`;
const ChatLeft = styled.div`
  display: flex;
  height: 100%;
  width: 20%;
  object-fit: cover;
`;
const ChatRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export { ChatWrapper,ChatLeft, ChatRight };
