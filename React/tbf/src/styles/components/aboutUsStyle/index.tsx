import styled from "styled-components";

const AboutUsStyle=styled.div`
display: flex;
flex-direction: column;
    width: 100%;
    height: 100vh;
`;
const AboutUsTopHeadingStyle=styled.div`
    display: flex;
    margin-top: 2vw;
    justify-content: center;
    align-items: center;
`;
const AboutUsTop1Style=styled.div`
    width: 30%;
    justify-content: center;
    align-items: center;
    margin-left: 8vw;
`;
const AboutUsTop2Style=styled.div`
    width: 70%;
`;

const CardWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30vw;
    margin: 10vw 5vw 5vw;
`;

export {AboutUsStyle,AboutUsTopHeadingStyle,AboutUsTop1Style,AboutUsTop2Style,CardWrapper};