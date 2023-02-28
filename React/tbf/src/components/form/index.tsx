
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { InputStyle, InputUnderline,InputWrapper,SubmitStyle } from "styles/components/formStyle"



const Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch=useDispatch();
  const onSubmit = (data: any) => {
    navigate("/thanks",{state:data})
    dispatch({type:"Add_Data",payload:data})
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