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

const PostComponent = ({title,body,img}:{title:string,body:string,img:string}) => {
  return (
    <>
      <PostComponetStyle>
        <PostComponentLeft href={img}>
          <PostTitle>
            {title}
          </PostTitle>
          <PostDescription>
            {body}
          </PostDescription>
        </PostComponentLeft>
        <PostComponentRight>
          <Img src={imgUrl} alt="Img" />
        </PostComponentRight>
      </PostComponetStyle>
    </>
  );
};

export default PostComponent;
