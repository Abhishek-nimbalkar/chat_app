import React from "react";

import "App.css";

import { useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';

type FormData = {
    email: string;
    password: string;
  };
  
const Login=()=> {
  const nav = useNavigate();

  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();
  const onSubmit = handleSubmit(({ email, password }) => {
        console.log(email, password);
        nav("/dashboard")
      });
    
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>email</label>
        <input type={"email"} {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        {/* include validation with required or other standard HTML validation rules */}

        <label>password</label>
        <input
          type={"password"}
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}

        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  )
}

export default Login