import styled from "styled-components";

const PostBodyWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 90vh;
  min-width: 100%;
`;
const PostBodyLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 70vw;
`;
const PostBodyLeftConatiner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 55vw;
  padding: 0 0 50px;
`;
const UserAvatar = styled.div`
  width: 60px;
`;
const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  /* border: 2px solid black; */
  align-self: flex-start;
  margin: 2.5vh 20px 0;
`;
const UserName = styled.div`
  display: flex;
  font-size: 15px;
  padding: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  font-size: 35px;
  /* border: 2px solid red; */
  margin: 1vw 0;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid green; */
  width: 80%;
  object-fit: cover;
  max-height: 60vh;
  margin: 2vw 0 2vw;
`;
const DescriptionConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Anuphan", sans-serif;
  /* border: 2px solid blue; */
  text-align: justify;
  width: 90%;
  font-size: 16px;
  margin: 0 0 3vw;
`;

const PostBodyRightWrapper = styled.div`
  display: flex;
  min-width: 40vw;
`;
const PostImg = styled.img`
  height: 100%;
  margin-bottom: 2vw;
  border-radius: 1vw;
`;

export {
  PostBodyWrapper,
  PostBodyRightWrapper,
  PostBodyLeftWrapper,
  PostBodyLeftConatiner,
  TitleContainer,
  ImgContainer,
  DescriptionConatiner,
  UserNameContainer,
  UserAvatar,
  UserName,
  PostImg,
};
