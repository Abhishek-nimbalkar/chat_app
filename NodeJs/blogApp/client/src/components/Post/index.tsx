import React from "react";
import {
  PostComponentLeft,
  PostComponentRight,
  PostComponetStyle,
  PostDescription,
  PostTitle,
} from "style/components/PostComponent/inde";

const PostComponent = () => {
  return (
    <>
      <PostComponetStyle>
        <PostComponentLeft>
          <PostTitle>TikTok videos underscore the gap in expertise </PostTitle>
          <PostDescription>
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book....
          </PostDescription>
        </PostComponentLeft>
        <PostComponentRight>Hello</PostComponentRight>
      </PostComponetStyle>
    </>
  );
};

export default PostComponent;
