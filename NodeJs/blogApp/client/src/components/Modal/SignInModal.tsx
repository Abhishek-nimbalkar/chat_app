
import { IUseForm } from "interfaces";
import { useForm, SubmitHandler } from "react-hook-form";



const SignInModal = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IUseForm>();
    const onSubmit: SubmitHandler<IUseForm> = data => console.log(data);
  
    console.log(watch("example")) // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="Enter Your Mail" {...register('example')} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="Your Password" {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
  )
}

export default SignInModal