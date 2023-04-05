import SignInForm from "components/SignInForm";
import InputForm from "components/SignInForm";
import {
  ModalContainer,
  ModalContainerWrapper,
} from "style/components/ModalStyle";

const SignInModal = () => {
  // const { register, handleSubmit, formState: { errors }, reset } = useForm<IUseForm>({
  //   resolver: yupResolver(YupSchema),
  // });
  // const onSubmitHandler:SubmitHandler<IUseForm> = (data:any) => {
  //   console.log({ data });
  //   reset();
  // };
  return (
    // <ModalContainerWrapper>
      <ModalContainer>
          <SignInForm />
      </ModalContainer>
    // </ModalContainerWrapper>
  );
};

export default SignInModal;
