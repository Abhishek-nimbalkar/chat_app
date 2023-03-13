import styled from "styled-components";
import Img from "assets/images/LoginImg.png";
const LoginPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: auto 100vh; */
  background-size: cover;
`;
const ErrorMessageStyle = styled.div`
  color: #ba3939;
  background: #ffe0e0;
`;
const LoginDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  height: 50vh;
  width: 40vw;
  background: #ffffff;
  border-radius: 10px;
  padding: 3vw;
`;

const FormLogoDiv = styled.div`
  display: flex;
  width: 100%;
  height: 5.5vw;
  margin-top: 1vw;
  margin-left: 2vw;
`;
const FormHeadingDiv = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 3vw;
  line-height: 36px;
  margin-left: 2vw;

  color: #272727;
`;
const FormLowerHeadingDiv = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6vw;
  line-height: 24px;

  margin-left: 2vw;
  /* identical to box height */

  color: rgba(39, 39, 39, 0.85);
`;
const FormInput = styled.input`
  background: #ffffff;
  border-radius: 10px;
  height: 3.5vw;
  width: 90%;
  margin-left: 2vw;
  margin-top: 2vw;
  opacity: 0.2;
  border: 1px solid #000000;

  ::placeholder {
    color: rgba(39, 39, 39, 0.4);
    font-size: 1.5vw;
    font-family: "Poppins";
    font-style: normal;
    padding-left: 1vw;
  }
`;
const ForgotText = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6vw;
  /* identical to box height */
  padding: 1vw;
  margin-right: 4vw;

  color: #1d2e88;
`;

const FormButton = styled.button`
  background: #1d2e88;
  width: 70%;
  margin-left: 6vw;
  margin-top: 1vw;
  height: 4vw;
  border-radius: 10px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
  line-height: 27px;
  /* identical to box height */

  color: #ffffff;
`;

export {
  LoginPageStyle,
  ErrorMessageStyle,
  LoginDivStyle,
  FormLogoDiv,
  FormHeadingDiv,
  FormLowerHeadingDiv,
  FormInput,
  ForgotText,
  FormButton,
};
