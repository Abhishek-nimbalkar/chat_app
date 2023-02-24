import React from "react";

import "App.css";

import { useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import { Input,Button } from "style/components/style";

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
        <label>Email</label>
        <Input>
        <input type={"email"} {...register("email", { required: true })} />
        </Input>
        
        {errors.email && <span>This field is required</span>}
        {/* include validation with required or other standard HTML validation rules */}

        <label>Password</label>
        <Input>
          <input
            type={"password"}
            {...register("password", { required: true })}
          />
        </Input>
        
        {/* errors will return when field validation fails  */}

        {errors.password && <span>This field is required</span>}
      
        <Button>
          Submit
        </Button>
      
        
          {/* <input type="submit" /> */}
        
        
      </form>
    </div>
  )
}

export default Login