import styled from "styled-components";

const ModalContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.95);
`;
const ModalContainer = styled.div`
  display: flex;
  height: auto;
  width: 50vw;
  justify-content: center;
  background: white;
  /* align-items: center; */
`;
const FormWrapper = styled.div`
  padding: 1vw;
`;
const ModalSubmitButton = styled.button`
  background-color: black;
  color: #f6f6f6;
  font-size: 1.2vw;
  font-family: "Delicious Handrawn", cursive;
  min-width: 12vw;
  height: 3.5vw;
  border-radius: 2vw;
  margin-top: 2vw;
  padding: 0 2vw;
  cursor: pointer;
`;
export { ModalContainerWrapper, ModalContainer, FormWrapper,ModalSubmitButton };
