import styled from 'styled-components';

const Button=styled.div`
    font-family: 'Dosis', sans-serif;
    letter-spacing: 1.3px;

    background: lighten($gray, 5%);
    border: none;
    border-radius: 30px ;
    color: $light-gray;
    font-size: 16px;
    padding: 16px 36px;
    cursor: pointer;
    transition: all .3s;
    margin-top: 20px;
    margin-bottom: -30px;
    box-shadow: 0px 4px 15px -5px rgba(0,0,0,0.65);
    transition: all .3s;
`;


export default Button