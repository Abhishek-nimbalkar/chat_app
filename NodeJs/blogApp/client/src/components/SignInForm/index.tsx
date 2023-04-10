import { yupResolver } from "@hookform/resolvers/yup";
import { ISignInForm } from "interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { YupSchema } from "schema";
import {
  ErrorPara,
  Form,
  Heading,
  Input,
} from "style/components/FormStyle/SignInFormStyle";
import { ModalSubmitButton } from "style/components/ModalStyle";
import { BannerLeftConatinerButton } from "style/components/PostBannerStyle";
import postData from "utils/postData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { modalState } from "App";
// import usePostData from "customHooks/postData";

const SignInForm = () => {
  // const postd=usePostData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>({
    resolver: yupResolver(YupSchema),
  });
  const nav=useNavigate();
  const modalFun = useContext(modalState);


  const onSubmitHandler: SubmitHandler<ISignInForm> = async(data: any) => {
    const { email, password } = data;
    const emailId = email;
    // console.log({emailId,password});
    // toast.error("dataRes.message");

    const dataRes=await postData("/users/login", { emailId, password })
    if(dataRes.success){
      localStorage.setItem("token",dataRes.token);
      modalFun.closeModal();

    } 
    // reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Heading>Welcome back.</Heading>
      <br />

      <Input {...register("email")} placeholder="Email" type="email" required />
      <ErrorPara>{errors.email?.message}</ErrorPara>
      <br />

      <Input
        {...register("password")}
        placeholder="Password"
        type="password"
        required
      />
      <ErrorPara>{errors.password?.message}</ErrorPara>
      <br />

      <ModalSubmitButton type="submit">Sign in</ModalSubmitButton>
    </Form>
  );
};

export default SignInForm;
