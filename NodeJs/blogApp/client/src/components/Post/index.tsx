import { AnyCnameRecord } from "dns";
import React from "react";
import {
  Img,
  PostComponentLeft,
  PostComponentRight,
  PostComponetStyle,
  PostDescription,
  PostTitle,
} from "style/components/PostComponent";

const imgUrl:string ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

const PostComponent = ({title,body,img,id}:{title:string,body:string,img:string,id:AnyCnameRecord}) => {
  return (
    <>
      <PostComponetStyle>
        <PostComponentLeft href={`post/${id}`} target={"_blank"} >
          <PostTitle>
            {title}
          </PostTitle>
          <PostDescription>
            {body}
          </PostDescription>
        </PostComponentLeft>
        <PostComponentRight>
          <Img src={img} alt="Img" />
        </PostComponentRight>
      </PostComponetStyle>
    </>
  );
};

export default PostComponent;
