import styled from "styled-components";

const CreateBlogConatinerWrapperStyle = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background-color: #e5f5f0;
  min-height: 100vh;
  width: 100%;
  padding: 0 0 10vh;
`;
const CreateBlogContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 80vw;
  margin: 10vh 0 0;
`;
const Label = styled.div`
  font-size: 2vw;
  /* margin: 0.2vw 0; */
  font-family: "Lobster", cursive;
`;
const TitleInput = styled.input`
  display: flex;
  font-size: 30px;
  padding-left: 20px;
  border-radius: 0.8vw;
  border: 0;
  height: 3vw;
  width: 70vw;
`;
const ContentInput = styled.textarea`
  display: flex;
  border: 0;
  font-size: 20px;
  padding:10px;
  border-radius: 1vw;

  height: 20vw;
  width: 70vw;
`;
const FileInput = styled.input`
  display: flex;
  margin: 2vw 0;
  background-color: #b6f8d8;
`;
const Img = styled.img`
  display: flex;
  height: 30vw;
  width: 40vw;
`;
const PublishButton = styled.button`
  background-color: #5963ec;
  color: #f6f6f6;
  font-size: 1.8vw;
  font-family: "Delicious Handrawn", cursive;
  min-width: 15vw;
  height: 3.5vw;
  border: 0;
  border-radius: 1vw;
  margin: 0 0 0 55vw;
  padding: 0 2vw;
  cursor: pointer;
`;
export {
  CreateBlogContainerStyle,
  CreateBlogConatinerWrapperStyle,
  TitleInput,
  Label,
  ContentInput,
  FileInput,
  Img,
  PublishButton,
};
