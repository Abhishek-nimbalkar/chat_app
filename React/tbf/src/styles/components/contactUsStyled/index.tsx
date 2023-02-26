import styled from "styled-components";

const ContactUsStyled = styled.div`
  display: flex;
`;
const ContactUsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 50vw;
`;
const ContactUsTitle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 138% */

  display: flex;
  align-items: center;

  color: #6f8587;
`;
interface MyTagProps {
    link: string;
  }
const ContactUsLink = styled.a.attrs((props:MyTagProps)=>({
    href:props.link,
    target:"_blank"
}))<MyTagProps>`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 79px;
/* or 359% */
text-decoration:none;

display: flex;
align-items: center;

color: #2C4548;
`;

const ConatactUsRight = styled.div`
  max-width: 50vw;
`;

export { ContactUsStyled, ContactUsLeft, ConatactUsRight,ContactUsTitle,ContactUsLink };
