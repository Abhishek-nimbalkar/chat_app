import styled from "styled-components";
import Img from "assets/images/LoginImg.png"
const LoginPageStyle=styled.div`
display: flex;
justify-content: center;
align-items: center;
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
const LoginDivStyle=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 50vh;
width: 40vw;
background: #FFFFFF;
border-radius: 10px;
`;


export {LoginPageStyle,ErrorMessageStyle,LoginDivStyle};