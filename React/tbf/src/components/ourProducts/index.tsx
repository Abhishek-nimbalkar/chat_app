import React from "react";
import { AboutUsTop1Style } from "styles/components/aboutUsStyle";
import Img1 from "assets/images/G1.png";
import Img2 from "assets/images/G2.png";
import Img3 from "assets/images/G3.png";
import {
  OurProductDownHeading,
  OurProductsBottomStyle,
  OurProductsStyled,
  OurProductsTopStyle,
  ProductDiscriptionStyleWrapper,
  ProductStyleWrapper,
  ProductWrapper,
} from "styles/components/ourPorductsStyle";
import {
  PageAnotherHeadignStyle,
  PageHeadingBorderStyle,
  PageHeadingStyle,
} from "styles/components/pageHeading";

const OurProducts = () => {
  return (
    <>
      <div>
        <PageHeadingStyle style={{marginTop:"3vw"}}>
          Categories
          <PageHeadingBorderStyle />
        </PageHeadingStyle>

        <OurProductsStyled>
          <OurProductsTopStyle>
            <AboutUsTop1Style>
              <PageAnotherHeadignStyle>Our Products</PageAnotherHeadignStyle>
            </AboutUsTop1Style>
          </OurProductsTopStyle>
          <OurProductsBottomStyle>
            <ProductWrapper>
              <ProductStyleWrapper>
                <img src={Img1} alt="" />
                Savory
              </ProductStyleWrapper>
              <ProductDiscriptionStyleWrapper>
                Amet minim mollit non deserunt ullamco est sit aliqua.Amet minim
                mollit non deserunt ullamco est sit aliqua.Amet minim mollit non
                deserunt ullamco est sit aliqua.
              </ProductDiscriptionStyleWrapper>
            </ProductWrapper>
            <PageHeadingBorderStyle style={{marginLeft:"8vw"}} />
            <ProductWrapper>
              <ProductStyleWrapper>
                <img src={Img2} alt="" />
                Pine
              </ProductStyleWrapper>
              <ProductDiscriptionStyleWrapper>
                Amet minim mollit non deserunt ullamco est sit aliqua.Amet minim
                mollit non deserunt ullamco est sit aliqua.Amet minim mollit non
                deserunt ullamco est sit aliqua.
              </ProductDiscriptionStyleWrapper>
            </ProductWrapper>
            <PageHeadingBorderStyle style={{marginLeft:"8vw"}} />
            <ProductWrapper>
              <ProductStyleWrapper>
                <img src={Img3} alt="" />
                Sweet
              </ProductStyleWrapper>
              <ProductDiscriptionStyleWrapper>
                Amet minim mollit non deserunt ullamco est sit aliqua.Amet minim
                mollit non deserunt ullamco est sit aliqua.Amet minim mollit non
                deserunt ullamco est sit aliqua.
              </ProductDiscriptionStyleWrapper>
            </ProductWrapper>
            <PageHeadingBorderStyle style={{marginLeft:"8vw"}}/>
          </OurProductsBottomStyle>

          <OurProductDownHeading>
            Additional products available with different varieties upon request
          </OurProductDownHeading>
        </OurProductsStyled>
      </div>
    </>
  );
};

export default OurProducts;
