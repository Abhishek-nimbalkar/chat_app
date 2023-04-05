import Api from "api";
import PostComponent from "components/Post";
import PostBanner from "components/PostBanner";
import PostHeader from "components/PostHeader";

import {
  HeaderWrapper,
  PostBody,
  PostsContainer,
} from "style/components/PostHeaderStyle";




const click=()=>{
  console.log("hello");
  
}

const Posts = () => {
  // Api.get("/posts").then((data)=>{
  //   console.log(data);
  // })

  
  return (
    <>
      <PostBody>
        <PostHeader />
        <PostComponent />
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
