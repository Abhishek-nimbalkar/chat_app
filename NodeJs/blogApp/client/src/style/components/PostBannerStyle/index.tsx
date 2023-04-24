import styled from "styled-components";
import { SignUPButton } from "../PostHeaderStyle";

const BannerContainer = styled.div`
  display: flex;
  background-color: #ffc017;
  justify-content: space-between;
  height: 35vw;
  width: 100%;
`;

const BannerLeftConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  padding: 10% 5% 10% 15%;
  justify-content: space-between;
`;
const BannerLeftContainerHeading = styled.div`
  font-size: 5vw;
  font-family: "Delicious Handrawn", cursive;
`;
const BannerLeftContainerDescription = styled.div`
  font-size: 2vw;
  font-family: "Delicious Handrawn", cursive;
`;
const BannerLeftConatinerButton = styled.button`
  background-color: black;
  color: #f6f6f6;
  font-size: 1.2vw;
  font-family: 'Delicious Handrawn', cursive;
  /* min-width: 15vw; */
  min-height: 2.5vw;
  border-radius: 2vw;
  margin-top: 2vw;
  padding: 0 2vw;
  cursor: pointer;
`;
const BannerRightConatiner = styled.div`
  width: 40%;
`;
export {
  BannerContainer,
  BannerLeftConatiner,
  BannerLeftContainerHeading,
  BannerLeftContainerDescription,
  BannerLeftConatinerButton,
  BannerRightConatiner,
};
