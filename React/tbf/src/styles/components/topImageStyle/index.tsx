import styled from "styled-components";
import topImg from "assets/images/TBF_field.png";

const TopImageStyle = styled.div`
  background-image: url(${topImg});
  background-repeat: no-repeat;

  width: 100vw;
  height: 90vh;
  background-size: center cover;
  background-attachment: fixed;

  /* line-height: 100px; */
  /* or 111% */
  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;
const TopImageHeadigStyle = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
`;
const TopImageParagraphStyle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  width: 50%;
`;
const TopImageBelowHeading = styled.div`
  font-family: "Crimson Text";
  font-style: normal;
  font-weight: 700;
  font-size: 8vh;
  line-height: 112px;
  margin-top:8vh;
  margin-bottom: 8vh;
  margin-left: 0;
  display: flex;
  /* align-items: center; */
  text-align: center;
  justify-content: center;
  letter-spacing: 1vw;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.1);
`;
export { TopImageStyle, TopImageHeadigStyle, TopImageParagraphStyle,TopImageBelowHeading };
