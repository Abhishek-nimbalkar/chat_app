import * as yup from "yup";
import { useForm} from "react-hook-form";
import { ErrorMessageStyle, LoginPageStyle } from 'style/components/LoginPageStyle'

import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});


export type User={
  email:string,
  password:string
}



const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<User>({resolver: yupResolver(schema)});
  const onSubmit = (data:User) => {
    console.log("Clicked");
    localStorage.setItem("user",JSON.stringify(data));
    <Navigate to="/product" />
    reset();
    
    
  };
  return (
    <LoginPageStyle>
       <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input
                //   autoComplete="off"
                {...register("email")} placeholder="Email" type="email" required
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
    
  )
}

export default Login