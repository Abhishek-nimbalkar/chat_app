import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, User } from "stateSlice/userDataSlice";
import LoggedIn from "utils";



const LoginPage = () => {
  const Navigate=useNavigate();
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
    dispath(addUser(data));
    // const Navigate=useNavigate();
     Navigate("/thanks")
    // console.log(data.email);
    
  };
//   Use Selector
// const storedUser = useSelector((state:any) => state.Users)
// const email=storedUser.map((mail:any)=>mail.email);
// console.log(email.length);

// console.log(LoggedIn());


// console.log(storedUser);





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
