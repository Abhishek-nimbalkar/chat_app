import styled from "styled-components";
import Img from "assets/images/LoginImg.png"
const LoginPageStyle=styled.div`
    height: 100vh;
    width: 100vw;
    background-image:url(${Img});
    background-position: center;
    background-repeat: no-repeat;
    /* background-size: auto 100vh; */
    background-size:cover;
`;
const ErrorMessageStyle=styled.div`
    color: #ba3939;
    background: #ffe0e0;

`;

export {LoginPageStyle,ErrorMessageStyle};