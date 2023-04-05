import React from "react";
import {
  Img,
  PostComponentLeft,
  PostComponentRight,
  PostComponetStyle,
  PostDescription,
  PostTitle,
} from "style/components/PostComponent";

const img ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

const PostComponent = () => {
  return (
    <>
      <PostComponetStyle>
        <PostComponentLeft>
          <PostTitle href="https://google.com">TikTok videos underscore the gap in expertise </PostTitle>
          <PostDescription>
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book....
          </PostDescription>
        </PostComponentLeft>
        <PostComponentRight><Img src={img} alt="Img" /></PostComponentRight>
      </PostComponetStyle>
    </>
  );
};

export default PostComponent;
