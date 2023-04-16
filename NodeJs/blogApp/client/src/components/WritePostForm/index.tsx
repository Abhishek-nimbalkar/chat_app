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
  const [watchImages, setValueImage] = useState<any>([]);
  const [imgFileUrl, setImgFileUrl] = useState<any>([]);

  // get value of 'images' input field using watch function
  const Images = watch("images", []);
  // console.log("Imgaes in Watch ", Images);
  // console.log("imgFileUrls are ", imgFileUrl);

  const nav = useNavigate();


  // function to handle form submission ******%%%%%%%%%%%%%%%%%%%%%%%%%%%



  const onSubmit = async (data: any) => {
    // console.log(data);
    const { title, content, images } = data;
    const body=content;
    console.log(data);
    

    const PostResponse=await postData("/posts/create",{title,body,images});

    // console.log(PostResponse);
    nav("/");

  };

  // function to handle image upload and display
  const handleImageChange:any = async (event: any) => {
    // get uploaded file
    const file = event.target.files[0];
    // console.log("file", file);

    let formData = new FormData();
    // formData.append("email", "Abhishek2@gmail.com");
    formData.append("image", file);
    const imgRes = await postImg("/addImg", formData);
    console.log('imgRes', imgRes)

    if(imgRes.status===403 || imgRes.status===401){
      toast.error(imgRes.data.message);
      localStorage.removeItem("token");
      window.location.reload();
    }
    // console.log("Img |Response ",imgRes);
    setImgFileUrl([...imgFileUrl, imgRes?.data.url]);

    // create FileReader object and read uploaded file
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // when file is read, update 'images' value with uploaded image
    reader.onload = async () => {
      setValueImage([...watchImages, reader.result]);

      setValue("images", [...imgFileUrl, imgRes?.data.url]);
    };
  };

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
