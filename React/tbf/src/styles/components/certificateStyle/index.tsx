import styled from "styled-components";

const CertificateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vw;
`;
const CertificateHeadingStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 79px;
  /* or 132% */
 

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;
const CertificateDescription = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */
  width: 50vw;

  text-align: center;

  color: #6f8587;
`;

export { CertificateDescription, CertificateHeadingStyle, CertificateStyle };
