import React from "react";
import {
  FooterBottom,
  FooterStyle,
  FooterTop,
  FooterTopD1,
  FooterTopD2,
  FooterTopD3,
  FooterHeadingStyle,
  FooterLink,
  FooterBottomP,
  FooterBottomD1,
  FooterBottomD2,
} from "styles/components/footerStyle";
import Img from "assets/images/companyName.png";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <FooterTop>
          <FooterTopD1>
            <FooterHeadingStyle>Lets,Talk!</FooterHeadingStyle>
            <FooterLink href="mailto:FooterLink" target="_blank">
              terpenebelt@gmail.com
            </FooterLink>
            <FooterLink
              href="https://www.google.com/maps/search/430-985+Eleifend+St.+Duluth+Washington+92611/@45.7815764,-122.6498128,15z/data=!3m1!4b1"
              target="_blank"
            >
              430-985 Eleifend St. Duluth Washington 92611
            </FooterLink>
          </FooterTopD1>
          <FooterTopD2>
            <FooterHeadingStyle>Explore</FooterHeadingStyle>
            <FooterLink href="#" target="_blank">
              Conatat
            </FooterLink>
            <FooterLink href="#" target="_blank">
              Privacy
            </FooterLink>
          </FooterTopD2>
          <FooterTopD3>
            <img src={Img} alt="TBF" />
          </FooterTopD3>
        </FooterTop>
        <FooterBottom>
          <FooterBottomD1>
            <FooterBottomP>
              © 2022 terpenebeltprocessing. All Rights Reserved.
            </FooterBottomP>
          </FooterBottomD1>
          <FooterBottomD2>
            <FooterBottomP>Cookies Policy</FooterBottomP>
            <FooterBottomP>Privacy Policy</FooterBottomP>
            <FooterBottomP>Terms & Conditions</FooterBottomP>
          </FooterBottomD2>
        </FooterBottom>
      </FooterStyle>
    </>
  );
};

export default Footer;
