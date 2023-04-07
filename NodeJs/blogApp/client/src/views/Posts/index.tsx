import Api from "api";
import Loader from "components/Loader";
import PostComponent from "components/Post";
// import PostBanner from "components/PostBanner";
import PostHeader from "components/PostHeader";
import useGetData from "customHooks";
import { IApiData } from "interfaces";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import { useEffect, useState } from "react";
// import { json } from "stream/consumers";

import { PostBody, PostsContainer } from "style/components/PostHeaderStyle";
// import { JsxElement } from "typescript";

const click = () => {
  console.log("hello");
};

const Posts = () => {
  // Api.get("/posts").then((data)=>{
  //   console.log(data);
  // })
  const { data, isLoading } = useGetData("posts");
  const postData:Array<IApiData>=data?.data;
  // console.log(data?.data);
  console.log(isLoading);
  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };
  const initialState={
    
  }
  const[state,setState]=useState({items: Array.from({ length: 25 })})
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    setTimeout(() => {
      setState({
        items:state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };


  return (
    <>
      <PostBody>
        <PostHeader />
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {state.items.map((i:any, index:any) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>

        {/* <Loader /> */}
        {/* {isLoading ? (
          <Loader />
        ) : (
          <PostsContainer>
            {postData?.map((ele: IApiData, key: any) => (
              <PostComponent
                key={key}
                title={ele.title}
                body={ele.body}
                img={"https://google.com"}
              />
            ))}
          </PostsContainer>
        )} */}

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
