import { InputStyle, InputUnderline,InputWrapper,SubmitStyle } from "styles/components/formStyle"


const Form = () => {
  return (
    <>
        <form action="">
          <InputWrapper>
            <InputStyle type="text" placeholder="Name" />
                <InputUnderline />
                <InputStyle type="email" placeholder="Your Email Address" />
                <InputUnderline />
                <InputStyle type="text" placeholder="Your Company Name" />
                <InputUnderline />
                <InputStyle type="text" placeholder="Describe your needs" />
                <InputUnderline />
          </InputWrapper>
          <SubmitStyle>Submit</SubmitStyle>
            
        </form>
    </>
  )
}

export default Form