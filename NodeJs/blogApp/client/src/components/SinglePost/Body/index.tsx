import React from "react";
import {
  HeadingContainer,
  PostBodyLeftConatiner,
  PostBodyLeftWrapper,
  PostBodyRightWrapper,
  PostBodyWrapper,
} from "style/components/SinglePostStyle/PostBodyStyle";

const SinglePostBody = () => {
  return (
    <>
      <PostBodyWrapper>
        <PostBodyLeftWrapper>
          <PostBodyLeftConatiner>
            <HeadingContainer>Heading</HeadingContainer>
          </PostBodyLeftConatiner>
        </PostBodyLeftWrapper>
        <PostBodyRightWrapper>bye</PostBodyRightWrapper>
      </PostBodyWrapper>
    </>
  );
};

export default SinglePostBody;
