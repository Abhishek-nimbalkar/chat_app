import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  ErrorMessageStyle,
  ForgotText,
  FormButton,
  FormHeadingDiv,
  FormInput,
  FormLogoDiv,
  FormLowerHeadingDiv,
  LoginDivStyle,
  LoginPageStyle,
} from "style/components/LoginPageStyle";

import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useGet } from "appLayer/useGet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addProduct, addUser } from "store/Slice";
import img from "assets/images/WITSLogo.png";
import { useQuery } from "react-query";
// import users from "components/Users";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export type User = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const ProductPersitData: any = useSelector((state: any) => state.Products);
  // const UserPersitData: any = useSelector((state: any) => state.Users);
  // console.log("Product Persisted Data ==== ", ProductPersitData);
  // const Products: any = useGet("products");
  // const Users: any = useGet("users");
  const {data,isLoading}=useGet("products");

  const [usedata,setData]=useState();
  useEffect(()=>{
    setData(data)
  },[])
  console.log("Product Api Data====", data);
  // console.log("Persited Data of Products====================",ProductPersitData);

  // useEffect(() => {
  //   // console.log("UseEffect is Called");
  //   if (Products !== null) {
  //     dispatch(addProduct(Products));
  //   }
  // }, [Products,dispatch]);

  // useEffect(() => {
  //   // console.log("UseEffect is Called");
  //   if (Users !== null) {
  //     dispatch(addUser(Users));
  //   }
  // }, [Users, dispatch]);

  // console.log("Users Api Data =======", Users?.data);

  // dispatch(addProduct(Products));

  // console.log(
  //   "Persisted Product data======================",
  //   ProductPersitData
  // );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({ resolver: yupResolver(schema) });
  const onSubmit = (data: User) => {
    console.log("Clicked");
    localStorage.setItem("user", JSON.stringify(data));
    // <Navigate to="/products" />
    navigate("/products");
    reset();
  };
  return (
    <>
      <LoginPageStyle>
        <LoginDivStyle>
          <FormLogoDiv>
            <img
              style={{ justifyContent: "flex-start" ,maxWidth:"35%"}}
              src={img}
              alt="Logo"
            />
          </FormLogoDiv>
          <FormHeadingDiv>Login With WIL</FormHeadingDiv>
          <FormLowerHeadingDiv>New User?  <a href="">Create an Account</a></FormLowerHeadingDiv>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              {/* <label className="label">Email Address</label> */}
              <div className="control">
                <FormInput 
                  //   autoComplete="off"
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                  required
                />
                <ErrorMessageStyle>{errors.email?.message}</ErrorMessageStyle>
              </div>
            </div>
            <div className="field">
              {/* <label className="label">Password</label> */}
              <div className="control">
                <FormInput
                  {...register("password")}
                  placeholder="Password"
                  type="password"
                  required
                />
                <ErrorMessageStyle>
                  {errors.password?.message}
                </ErrorMessageStyle>
              </div>
            </div>
            <ForgotText>Forgot Password?</ForgotText>
            <FormButton
              type="submit"
              className="button is-block is-info is-fullwidth"
            >
              Login
            </FormButton>
          </form>
        </LoginDivStyle>
      </LoginPageStyle>
    </>
  );
};

export default Login;
