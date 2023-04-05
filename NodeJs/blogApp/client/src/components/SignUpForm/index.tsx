import { yupResolver } from "@hookform/resolvers/yup";
import { ISignUpForm } from "interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { YupSchema } from "schema";
import { ErrorPara, Form, Heading, Input } from "style/components/FormStyle/SignInFormStyle";
import { ModalSubmitButton } from "style/components/ModalStyle";
import { BannerLeftConatinerButton } from "style/components/PostBannerStyle";

const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ISignUpForm>({
        resolver: yupResolver(YupSchema),
      });
      const onSubmitHandler:SubmitHandler<ISignUpForm> = (data:ISignUpForm) => {
        console.log({ data });
        reset();
      };
  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Heading>Join Medium.</Heading>
      <br />
      <Input
        {...register("userName")}
        placeholder="Enter UserName"
        type="text"
        required
      />
      <ErrorPara>{errors.userName?.message}</ErrorPara>
      <br />
      <Input
        {...register("phoneNumber")}
        placeholder="Enter Phone Number"
        type="tel"
        required
      />
      <ErrorPara>{errors.phoneNumber?.message}</ErrorPara>
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

      <ModalSubmitButton type="submit">SignUp</ModalSubmitButton>
    </Form>
  )
}

export default SignUpForm