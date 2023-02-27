import styled from "styled-components";

const InputStyle = styled.input`
  width: 100%;
  max-width: 40vw;
  min-height: 44px;
  font-family: "Outfit";
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: rgb(111, 133, 135);
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid rgba(0, 0, 0, 0.19);
`;
const InputUnderline = styled.p`
  margin: 2px 0px 0px;
  color: rgb(214, 94, 94);
  font-size: 12px;
  text-align: left;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
`;
const SubmitStyle = styled.button`
  max-width: 40vw;
  height: 60px;
  background: #a0ce6d;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  width: 100%;
  min-height: 44px;
  /* or 707% */

  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  justify-content: center;
  margin-left: 5vw;

  color: #ffffff;
`;
export { InputStyle, InputUnderline, InputWrapper, SubmitStyle };
