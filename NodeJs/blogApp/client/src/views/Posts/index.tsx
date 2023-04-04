import Api from "Api";
import PostComponent from "components/Post";
import PostBanner from "components/PostBanner";
import PostHeader from "components/PostHeader";
import React from "react";
import {
  HeaderWrapper,
  PostBody,
  PostsContainer,
} from "style/components/PostHeaderStyle";

const Posts = () => {
  // Api.get("/posts").then((data)=>{
  //   console.log(data);
  // })
  return (
    <>
      <PostBody>
        <PostHeader />
        <PostBanner />
        <PostsContainer>
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </PostsContainer>
      </PostBody>
    </>
  );
};

export default Posts;
