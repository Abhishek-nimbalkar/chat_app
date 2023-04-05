import CreateBlogForm from "components/WritePostForm";
import React from "react";
import { CreateBlogConatinerWrapperStyle, CreateBlogContainerStyle } from "style/components/FormStyle/CreateBlogStyle";

const CreateBlog = () => {
  return (
    <CreateBlogConatinerWrapperStyle>
      <CreateBlogContainerStyle>
        <CreateBlogForm />
      </CreateBlogContainerStyle>
    </CreateBlogConatinerWrapperStyle>
  );
};

export default CreateBlog;
