import { modalState } from "App";
import { log } from "console";
import React, { FormEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ContentInput,
  FileInput,
  Img,
  Label,
  PublishButton,
  TitleInput,
} from "style/components/FormStyle/CreateBlogStyle";
import postData from "utils/postData";
import postImg from "utils/postImgs";

function CreateBlogForm() {
  // initialize useForm hook and destructure properties
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // initialize state for number of input fields
  const [inputCount, setInputCount] = useState(1);
  const [imgFiles, setImgFiles] = useState<any>([]);

  // get value of 'images' input field using watch function
  const watchImages = watch("images", []);


  const nav=useNavigate();
  // function to handle form submission
  const onSubmit = async (data: any) => {
    // console.log(data);
    const { title, content, images } = data;
    // const img = imgFiles[0];
    
    // console.log(img);

    
    // console.log('Images_Current_State', imgFiles)
    let formData = new FormData();
    formData.append("email", "Abhishek2@gmail.com");
    for(let i in imgFiles){
      formData.append("image",i)
    }
    // formData.append("image", img);
    // console.log('Form Data',formData)
    const imgRes = await postImg("/addImg", formData);
    toast.success(imgRes.data.msg);
    toast.success("Post created Successfully")
    nav("/")

    // console.log(imgRes);
    
  };

  // function to handle image upload and display
  function handleImageChange(event: any) {
    // get uploaded file
    const file = event.target.files[0];
    // console.log("file", file);
    setImgFiles([...imgFiles,file]);

    // create FileReader object and read uploaded file
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // when file is read, update 'images' value with uploaded image
    reader.onload = () => {
      setValue("images", [...watchImages, reader.result]);
    };
  }

  // function to add more input fields dynamically
  function handleAddInput() {
    setInputCount(inputCount + 1);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Title input field */}
      <Label>Title</Label>
      <TitleInput type="text" {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}

      {/* Content input field */}
      <Label>Content</Label>
      <br />
      <ContentInput {...register("content", { required: true })} />
      {errors.content && <span>This field is required</span>}

      {/* Image upload input field */}
      <Label>Image</Label>
      <FileInput type="file" onChange={handleImageChange} />

      {/* Map over watchImages to display uploaded images */}
      {watchImages.map((image: any, index: number) => (
        <Img key={index} src={image} alt="uploaded" />
      ))}

      {/* Submit button */}
      <PublishButton type="submit">Publish</PublishButton>
    </form>
  );
}

export default CreateBlogForm;
