import { fstat } from 'fs'
import React from 'react'
import { AboutUsTop1Style } from 'styles/components/aboutUsStyle'
import { ContactUsLeft, ContactUsLink, ContactUsTitle } from 'styles/components/contactUsStyled'
import { PageAnotherHeadignStyle, PageHeadingBorderStyle, PageHeadingStyle } from 'styles/components/pageHeading'

const ContactUs = () => {
  return (
    <>
      <PageHeadingStyle>Let's Talk <PageHeadingBorderStyle /> </PageHeadingStyle>
      <AboutUsTop1Style>
        <PageAnotherHeadignStyle>Contact Us</PageAnotherHeadignStyle>
      </AboutUsTop1Style>
      <ContactUsLeft>
        <ContactUsTitle>Email</ContactUsTitle>
        <ContactUsLink link="mailto:Hi@tbprocessing.com">Hi@tbprocessing.com</ContactUsLink>

        <ContactUsTitle>Tel:</ContactUsTitle>
        <ContactUsLink link="tel:1(855)275-3336">1(855)275-3336</ContactUsLink>

        <ContactUsTitle>WebSite:</ContactUsTitle>
        <ContactUsLink link="https://tbprocessing.com">tbprocessing.com</ContactUsLink>
      </ContactUsLeft>
      
    </>
    
  )
}

export default ContactUs