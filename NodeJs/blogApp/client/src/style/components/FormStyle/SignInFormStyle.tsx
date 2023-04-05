import styled from "styled-components";
const Form=styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 1vw;
`;
const Heading = styled.div`
  font-family: "Lobster", cursive;
  margin-bottom:3vw;
  font-size: 3vw;
`;
const Input = styled.input`
  font-size: 1vw;
  margin: 0 2vw 0;
  border-radius: 2vw;
  height: 2.5vw;
  width: 15vw;
  ::placeholder {
  color: #72028b;
  font-size: 1vw;
  padding-left: 1vw;
}
`;

const ErrorPara=styled.p`
color: red;
font-family: "Lobster", cursive;
font-size: 1vw;
`;

export { Heading, Input,Form,ErrorPara };
