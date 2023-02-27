import styled from "styled-components";

const RoadMapStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(25, 65, 58);
`;

const RoadMapHeadingWrapper = styled.div`
  padding-top: 90px;
  display: grid;
  grid-template-columns: 17% 66% 17%;
`;
const RoadMapHeadingH = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 79px;
  /* or 132% */

  display: flex;
  align-items: center;

  color: #ffffff;
`;
const RoadMapParagraphWrapper = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  /* or 156% */

  display: flex;
  align-items: center;

  color: #a6b0b2;
`;
const RoadMapHeadingWrapperD1 = styled.div``;
const RoadMapHeadingWrapperD2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 88px;
`;
const RoadMapHeadingWrapperD3 = styled.div``;

const RoadMapDiv = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`;
const RoadMapGenticD1 = styled.div`
  position: relative;
  border-top: 3px solid rgb(52, 88, 81);
  border-right: 3px solid rgb(52, 88, 81);
  z-index: 1;
  border-radius: 0px 30px 0px 0px;
  transform: translate(-8px, -19px);
`;
const RoadMapDivImg = styled.div`
  position: absolute;
  bottom: 2vw;
  right: -100px;
  height: 100%;
  max-height: 150px;
  width: 100%;
  max-width: 187px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: #39575a;
  box-shadow: 12px 32px 80px -20px rgba(0, 0, 0, 0.12);
  border-radius: 32px;
`;
const RoadMapContent = styled.div``;

const RoadMapContentHeading = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 52px;
  margin: 0;

  color: rgba(255, 255, 255, 0.66);
`;
const RoadMapContentNumber = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 300;
  font-size: 33px;
  line-height: 86px;
  /* or 261% */

  color: #15c4c6;
`;
const RoadMapContentParagraph = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  display: flex;
  align-items: center;

  color: #a6b0b2;
`;
const RoadMapGenticD2 = styled.div`
  border-left: 3px solid rgb(52, 88, 81);
  border-bottom: 3px solid rgb(52, 88, 81);
  transform: translate(-11px, 17px);
  border-radius: 0px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 100px;
  padding: 130px 0px 86px 130px;
`;
// RoadMapEmpty Div
const RoadMapEmptyDiv = styled.div`
  position: relative;
  z-index: 1;
`;
const RoadMapEleR = styled.div`
  border-right: 3px solid rgb(52, 88, 81);
  border-top: 3px solid rgb(52, 88, 81);
  border-bottom: 3px solid rgb(52, 88, 81);
  border-radius: 0px 30px 30px 0px;
  transform: translate(42px, 14px);
  padding: 42px 130px 70px 0px;
  text-align: right;
`;
const RoadMapContentEleR = styled.div`
  display: grid;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;
const RoadMapImageR = styled.div`
  position: absolute;
  top: 8vw;
  left: -8vw;
  height: 100%;
  max-height: 150px;
  width: 100%;
  max-width: 187px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  /* background-color: rgb(109, 159, 145); */
  border-radius: 32px;
`;
const RoadMapImageL = styled.div`
  position: absolute;
  top: 8vw;
  right: 0;
  height: 100%;
  max-height: 150px;
  width: 100%;
  max-width: 187px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  /* background-color: rgb(109, 159, 145); */
  border-radius: 32px;
`;
const RoadMapEleL = styled.div`
  border-top: 3px solid rgb(52, 88, 81);
  border-left: 3px solid rgb(52, 88, 81);
  border-bottom: 3px solid rgb(52, 88, 81);
  transform: translate(-11px, 11px);
  border-radius: 30px 0px 0px 30px;
  padding: 42px 0px 60px 124px;
`;

export {
  RoadMapStyle,
  RoadMapHeadingWrapper,
  RoadMapHeadingWrapperD1,
  RoadMapHeadingWrapperD2,
  RoadMapHeadingWrapperD3,
  RoadMapParagraphWrapper,
  RoadMapHeadingH,
  RoadMapDiv,
  RoadMapGenticD1,
  RoadMapGenticD2,
  RoadMapEmptyDiv,
  RoadMapDivImg,
  RoadMapContent,
  RoadMapContentHeading,
  RoadMapContentNumber,
  RoadMapContentParagraph,
  RoadMapEleR,
  RoadMapEleL,
  RoadMapContentEleR,
  RoadMapImageR,
  RoadMapImageL,
};
