import styled from "styled-components";

const PostBodyWrapper = styled.div`
  display: flex;

  min-height: 90vh;
  min-width: 100%;
`;
const PostBodyLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 60vw;
`;
const PostBodyLeftConatiner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 40vw;
`;
const HeadingContainer = styled.div`
  width: 90%;
`;
const PostBodyRightWrapper = styled.div`
  display: flex;
  min-width: 40vw;
`;

export {
  PostBodyWrapper,
  PostBodyRightWrapper,
  PostBodyLeftWrapper,
  PostBodyLeftConatiner,
  HeadingContainer
};
