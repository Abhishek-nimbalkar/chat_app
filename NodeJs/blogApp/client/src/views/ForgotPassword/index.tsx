import React, { useContext } from "react";
import {
  ErrorPara,
  Form,
  Input,
} from "style/components/FormStyle/SignInFormStyle";
import { yupResolver } from "@hookform/resolvers/yup";
import { YupEmailSchema } from "schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalSubmitButton } from "style/components/ModalStyle";
import { IForgot } from "interfaces";
import { Label } from "style/components/FormStyle/CreateBlogStyle";
import postData from "../../utils/postData";
import { useNavigate } from "react-router-dom";
import { modalState } from "App";
const forgotImg =
  "https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=740&t=st=1681809015~exp=1681809615~hmac=a105efec70e07e224bcede43a2986a7d74207ed6d7799c92959bbc26b3416a02";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForgot>({
    resolver: yupResolver(YupEmailSchema),
  });
  const nav = useNavigate();
  const modalFun = useContext(modalState);
  const onSubmitHandler = async (data: any) => {
    const res = await postData("/forgot", { email: data?.email });
    if (res.data.error === true) {
      modalFun.closeModal();
      nav("/");
    }
    else{
      modalFun.closeModal();
      nav("/")
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <img style={{ height: "50vh" }} src={forgotImg} alt="" />
      <Label>Please Enter Your Email To Recive Password reset Link</Label>
      <br />
      <br />
      <br />
      <Input {...register("email")} placeholder="Email" type="email" required />
      <ErrorPara>{errors.email?.message}</ErrorPara>
      <br />

      <ModalSubmitButton type="submit">Submit </ModalSubmitButton>
    </Form>
  );
};

export default ForgotPassword;
