import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  /* background-color: #2c4548; */
  position: fixed;
  z-index: 3;
`;

const ContactUsButton = styled.button`
  background: #a0ce6d;
  border-radius: 30px;
  width: 175px;
  height: 52.76px;
  border-radius: 30px;
  border: 0;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

export { HeaderStyle, ContactUsButton, HeaderLogo };
