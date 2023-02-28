
import { useForm, SubmitHandler} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { InputStyle, InputUnderline,InputWrapper,SubmitStyle } from "styles/components/formStyle"

import {update, User } from "stateSlice/userDataSlice"

const Form = () => {
  const navigate = useNavigate();


  const dispatch=useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<User>();
  const onSubmit = (data:User) => {
    // navigate("/thanks",{state:data})
    dispatch(update(data))
    console.log("Clicked");
    
    // console.log(data);
    
  }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} action="#">
          <InputWrapper>
                <InputStyle {...register("Name", { required: true })} type="text" placeholder="Name" />
                  <InputUnderline />
                <InputStyle {...register("email", { required: true })} type="email" placeholder="Your Email Address" />
                  <InputUnderline />
                <InputStyle {...register("companyName", { required: true })} type="text" placeholder="Your Company Name" />
                  <InputUnderline />
                <InputStyle {...register("needs", { required: true })} type="text" placeholder="Describe your needs" />
                  <InputUnderline />
          </InputWrapper>
          <SubmitStyle type="submit">Submit</SubmitStyle>
            
        </form>
    </>
  )
}

export default Form