import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  ErrorMessageStyle,
  LoginPageStyle,
} from "style/components/LoginPageStyle";

import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useGet } from "appLayer/useGet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addProduct, addUser } from "store/Slice";
import users from "components/users";

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
 
  const ProductPersitData: any = useSelector((state: any) => state.Products);
  const UserPersitData: any = useSelector((state: any) => state.Users);
  // console.log(ProductPersitData);
  const Products:any  = useGet("products").data;
  const Users:any = useGet("users").data;
  console.log("Product Api Data====", Products?.data);
  // console.log("Persited Data of Products====================",ProductPersitData);
  
  useEffect(() => { 
    // console.log("UseEffect is Called");
    if(Products!==null){
      dispatch(addProduct(Products?.data));
    }
  }, [Products, dispatch]);

  useEffect(() => { 
    // console.log("UseEffect is Called");
    if(Users!==null){
      dispatch(addUser(Users?.data));
    }
      

  }, [Users, dispatch]);

  

  
  console.log("Users Api Data",Users?.data);

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
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label">Email Address</label>
            <div className="control">
              <input
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
            <label className="label">Password</label>
            <div className="control">
              <input
                {...register("password")}
                placeholder="Password"
                type="password"
                required
              />
              <ErrorMessageStyle>{errors.password?.message}</ErrorMessageStyle>
            </div>
          </div>
          <button
            type="submit"
            className="button is-block is-info is-fullwidth"
          >
            Login
          </button>
        </form>
      </LoginPageStyle>
    </>
  );
};

export default Login;
