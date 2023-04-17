import styled from "styled-components";

const PostComponetStyle = styled.div`
  display: flex;
  max-height: 15vw;
  margin-top: 3vw;
  width: 100%;
  /* max-width: 40vw; */
  /* border: 1px solid; */
  /* padding: 0 0.5vw; */
  border-radius: 1vw;
`;
const PostComponentLeft = styled.a`
  flex-direction: column;
  width: 100%;
  min-width: 25vw;
  text-decoration: none;
  /* border: 2px solid red; */
  color: #000000;
  /* padding-left: 1vw; */
`;

const PostTitle = styled.h1`
  /* display: flex; */

  /* word-wrap: break-word; */
  /* font-size: 1.5vw; */

  font-family: "Lobster", cursive;
  /* width: 100%; */
  height: 100%;
  max-height: 2.4vw;
  /* width: 100%; */
  /* max-width: 24vw; */
  /* margin: 0; */
  padding: 0 0 0 0.5vw;
  /* margin-right: 0.5vw; */
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.2vw 0 0 0;
  /* &:visited,
  link {
    text-decoration: none;
  } */
`;
const PostDescription = styled.h3`
  word-wrap: break-word;
  /* font-size: 1.5vw; */
  /* padding: 1vw 0; */
  /* width: 100%; */
  /* min-width: 2vw; */
  padding: 0 0.5vw;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 5vw;
  font-family: "Tillana", cursive;
`;

const PostComponentRight = styled.div`
  /* background-color:red; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* min-width: 15vw; */
`;
const Img = styled.img`
 /* max-height: 250px; */
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
