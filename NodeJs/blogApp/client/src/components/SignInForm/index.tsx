import { yupResolver } from "@hookform/resolvers/yup";
import { ISignInForm } from "interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { YupSchema } from "schema";
import { ErrorPara, Form, Heading, Input } from "style/components/FormStyle/SignInFormStyle";
import { ModalSubmitButton } from "style/components/ModalStyle";
import { BannerLeftConatinerButton } from "style/components/PostBannerStyle";

const SignInForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ISignInForm>({
        resolver: yupResolver(YupSchema),
      });
      const onSubmitHandler:SubmitHandler<ISignInForm> = (data:any) => {
        console.log({ data });
        reset();
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
  )
}

export default SignInForm