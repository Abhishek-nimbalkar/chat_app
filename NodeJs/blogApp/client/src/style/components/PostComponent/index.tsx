import styled from "styled-components";

const PostComponetStyle = styled.div`
  display: flex;

  min-height: 25vw;
  margin: 5vw 2vw 2vw;
  max-width: 60vw;
  border: 1px solid;
  border-radius: 1vw;
`;
const PostComponentLeft = styled.div`
  flex-direction: column;
  min-width: 60%;
  padding: 1vw;
`;

const PostTitle = styled.a`
  font-size: 3vw;
  color: #000000;
  font-family: "Lobster", cursive;
  text-decoration: none;
  padding: 1vw 0;
  &:visited,link{
    text-decoration: none;
    
  }
`;
const PostDescription = styled.div`
  font-size: 1.5vw;
  padding: 1vw 0;
  font-family: "Tillana", cursive;
`;

const PostComponentRight = styled.div`
  /* background-color:red; */
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45%;
`;
const Img = styled.img`
  /* height: 100%;
  width: 100%; */
  width: 100%;
  object-fit: contain;
  border-radius: 1vw;
`;

export {
  PostComponetStyle,
  PostComponentLeft,
  PostTitle,
  PostDescription,
  PostComponentRight,
  Img,
};
