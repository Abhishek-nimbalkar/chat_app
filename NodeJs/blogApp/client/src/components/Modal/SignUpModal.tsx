import SignUpForm from 'components/SignUpForm'
import React from 'react'
import { ModalContainer } from 'style/components/ModalStyle'

const SignUpModal = () => {
  return (
    <>
    <ModalContainer>
      <SignUpForm />
    </ModalContainer>
    </>
  )
}

export default SignUpModal