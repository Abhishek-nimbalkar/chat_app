import React, { useContext } from "react";
import {
  ErrorPara,
  Form,
  Input,
} from "style/components/FormStyle/SignInFormStyle";
import { yupResolver } from "@hookform/resolvers/yup";
import { YupPasswordSchema} from "schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalSubmitButton } from "style/components/ModalStyle";
import {IForgotPass } from "interfaces";
import { Label } from "style/components/FormStyle/CreateBlogStyle";
import postData from "../../utils/postData";
import { useLocation, useNavigate } from "react-router-dom";
import { modalState } from "App";
const forgotImg =
  "https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?w=740&t=st=1681810692~exp=1681811292~hmac=0a4796fd2812ea5826ead6be8c570c44ba6c7146f1962b44580852c7960fb8e1";
const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForgotPass>({
    resolver: yupResolver(YupPasswordSchema),
  });
  const nav = useNavigate();
  const location=useLocation();
  const modalFun = useContext(modalState);

  const onSubmit = async(data: any) => {
    // console.log(data);
    // console.log(location.search.split("=")[1]);
    const token=location.search.split("=")[1];
    
    
    await postData("/forgot/reset?token="+token, { password: data?.password });
    // if(res?.data?.error===true || res?.data?.error===false){
      modalFun.closeModal();
      nav("/");
    // }
    
    // if (res.data.error === true) {
    //   nav("/");
    // }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <img style={{height:"50vh"}} src={forgotImg} alt="" />
      <Label>Enter Your new Password</Label>
      <br />
      <br />
      <br />
      
      <Input
        {...register("password")}
        placeholder="Password"
        type="password"
        required
      />
      <ErrorPara>{errors.password?.message}</ErrorPara>
      <br />

      <ModalSubmitButton type="submit">Submit </ModalSubmitButton>
    </Form>
  );
};

export default ResetPassword;
