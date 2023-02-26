import React from "react";
import {
  CertificateDescription,
  CertificateHeadingStyle,
  CertificateStyle,
} from "styles/components/certificateStyle";
import Img from "assets/images/iso.png"

const Certificates = () => {
  return (
    <CertificateStyle>
      <CertificateHeadingStyle>Certificates</CertificateHeadingStyle>
      <CertificateDescription>
        The products are contained in a refrigerated vault and canbe traced down
        to the farm level by batch and specific rows and plots, according to the
        certified ISO 9000 protocol.
      </CertificateDescription>
        <img src={Img} alt="" />
    </CertificateStyle>
  );
};

export default Certificates;
