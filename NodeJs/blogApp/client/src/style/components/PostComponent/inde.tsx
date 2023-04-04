import styled from "styled-components";

const PostComponetStyle = styled.div`
  display: flex;

  min-height: 25vw;
  margin: 5vw;
  max-width: 50vw;
  border: 2px solid;
`;
const PostComponentLeft = styled.div`
  flex-direction: column;
  min-width: 60%;
  padding: 1vw;

`;

const PostTitle = styled.a`
  font-size: 3vw;
  font-family: "Lobster", cursive;
  padding:1vw 0;
`;
const PostDescription = styled.div`
  font-size: 1.5vw;
  padding:1vw 0;
  font-family: "Tillana", cursive;
`;

const PostComponentRight = styled.div`
  background-color:red;
  min-width: 35%;

`;

export { PostComponetStyle,PostComponentLeft, PostTitle, PostDescription,PostComponentRight };
