import styled from "styled-components";

const CollabStyle = styled.div`
  display: flex;
  background: #ecf4ed;
  height: 20vw;
  width: 100vw;
  align-items: center;
  justify-content: center;
  gap: 5vw;
`;
const CollabLeftStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    
`;

const CollabHeadingStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 79px;
  /* or 188% */

  display: flex;
  align-items: center;
  /* justify-content: center; */

  color: #000000;
`;
const CollabParagrphStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */

  color: #6f8587;
  display: flex;
  width: 30vw;
  align-items: center;
  /* justify-content: center; */
`;
const CollabRightStyle = styled.div`

`;

export {
  CollabHeadingStyle,
  CollabLeftStyle,
  CollabParagrphStyle,
  CollabRightStyle,
  CollabStyle,
};
