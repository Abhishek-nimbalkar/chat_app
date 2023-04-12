import styled from "styled-components";

const PostHeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fcfcfc;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
`;
const PostHeadLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
`;
const PostHeadSvg = styled.div`
  width: 40px;
`;
const PostHeadSearchBar = styled.input`
  min-width: 100px;
  height: 30px;
  border-radius: 20px;
  /* color:#000000; */
`;
const PostHeadRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  margin-right:4vw;
`;
const PostHeadWriteButton=styled.div`
  font-family: "Delicious Handrawn", cursive;
  font-size: 23px;
  width: 80px;
  /* margin-left: 100px; */
  color: #a27d85;
  cursor: pointer;
`;

export {
  PostHeaderWrapper,
  PostHeadSvg,
  PostHeadSearchBar,
  PostHeadLeft,
  PostHeadRight,
  PostHeadWriteButton
};
