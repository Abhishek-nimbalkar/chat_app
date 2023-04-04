import Api from 'Api'
import PostHeader from 'components'
import React from 'react'
import { HeaderWrapper, PostBody, PostsContainer } from 'style/components/PostsStyle'

const Posts = () => {
  // Api.get("/posts").then((data)=>{
  //   console.log(data);  
  // })
  return (
    <>
    <PostBody>
      <PostHeader />
      <PostsContainer>Hello</PostsContainer>
    </PostBody>
      
    </>
  )
}

export default Posts