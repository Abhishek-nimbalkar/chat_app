import Api from "api";
import PostComponent from "components/Post";
// import PostBanner from "components/PostBanner";
import PostHeader from "components/PostHeader";
import useGetData from "customHooks";
import { ApiData } from "interfaces";
// import { useEffect, useState } from "react";
// import { json } from "stream/consumers";

import {
  PostBody,
  PostsContainer,
} from "style/components/PostHeaderStyle";
// import { JsxElement } from "typescript";

const click = () => {
  console.log("hello");
};

const Posts = () => {
  // Api.get("/posts").then((data)=>{
  //   console.log(data);
  // })
const {data,isLoading}=useGetData("https://jsonplaceholder.typicode.com/posts");
console.log(data);


  return (
    <>
      <PostBody>
        <PostHeader />
        <PostsContainer>
          {data?.map((ele:ApiData,key:any)=>(
            <PostComponent
            key={key}
            title={ele.title}
            body={ele.body}
            img={"https://google.com"}
             />
          ))}
          {/* <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent /> */}
        </PostsContainer>

        {/* <PostBanner />
        <PostsContainer>
          
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </PostsContainer> */}
      </PostBody>
    </>
  );
};

export default Posts;
