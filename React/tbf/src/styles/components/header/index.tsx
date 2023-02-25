import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  /* background-color: #2c4548; */
  position: sticky;
`;

const ContactUsButton=styled.button`
    background: #A0CE6D;
    border-radius: 30px;
    width: 175px;
    height: 52.76px;
    border-radius: 30px;
    border: 0;
`;

const HeaderLogo=styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

export { HeaderStyle,ContactUsButton,HeaderLogo };
