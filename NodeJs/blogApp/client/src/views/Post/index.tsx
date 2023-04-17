import Loader from "components/Loader";
import SinglePostBody from "components/SinglePost/Body";
import SinglePostHeader from "components/SinglePost/Header";
import useGetData from "hooks";
import { IApiData } from "interfaces";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import getSinglePostData from "../../utils/getPost";

const Post = () => {
  // const [postData, setPostData] = useState();
  console.log("first");
  const location = useLocation();
  const url = location.pathname;
  const urlArray = url.split("/");
  const objId = urlArray[urlArray.length - 1];
  // console.log('obj Id ===== ',objId)

  const { isLoading, data } = useGetData(`posts/getPost/${objId}`);


const postData:any=data?.data?.post;
 

  // console.log("data====", postData);

  return (
    <>
      <SinglePostHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <SinglePostBody
          _id={objId}
          userEmail={postData?.userEmail}
          title={postData?.title}
          body={postData?.body}
          images={postData?.images}
          comments={postData?.comments}
          likes={postData?.likes}
        />
      )}
    </>
  );
};

export default Post;
