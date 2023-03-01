import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUser, User } from "stateSlice/userDataSlice";



const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const dispath=useDispatch();

  const onSubmit = (data:User) => {
    // navigate("/thanks",{state:data})
    setLoggedIn(true);
    dispath(addUser(data))
    // console.log(data.email);
  };
//   Use Selector
  const counter = useSelector((state:any) => state.Users)
  console.log(counter);
  return (
    
        <div className="box">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input
                //   autoComplete="off"
                  {...register("email", { required: true })}
                  type="email"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="button is-block is-info is-fullwidth"
            >
              Login
            </button>
          </form>
        </div>
      
  );
};

export default LoginPage;
