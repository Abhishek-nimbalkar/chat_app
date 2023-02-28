import React from "react";
import {
  RoadMapContent,
  RoadMapContentHeading,
  RoadMapContentNumber,
  RoadMapContentParagraph,
  RoadMapDivImg,
  RoadMapEmptyDiv,
  RoadMapDiv,
  RoadMapGenticD1,
  RoadMapGenticD2,
  RoadMapHeadingH,
  RoadMapHeadingWrapper,
  RoadMapHeadingWrapperD1,
  RoadMapHeadingWrapperD2,
  RoadMapHeadingWrapperD3,
  RoadMapParagraphWrapper,
  RoadMapStyle,
  RoadMapEleR,
  RoadMapEleL,
  RoadMapContentEleR,
  RoadMapImageR,
  RoadMapImageL,
} from "styles/components/roadMapStyle";

import Img1 from "assets/images/R1.png";
import Img2 from "assets/images/R2.png";
import Img3 from "assets/images/R3.png";
import Img4 from "assets/images/R4.png";
import Img5 from "assets/images/R5.png";
import Img6 from "assets/images/R6.png";
import Img7 from "assets/images/R7.png";
import { PageHeadingBorderStyle, PageHeadingStyle } from "styles/components/pageHeading";
const roadMap = () => {

    const ImgStyle={
        // "width": "100%",
        // "max-width": "300px",
        // "height": "fit-content"
    };

  return (
    <>
      <RoadMapStyle>
     
        <RoadMapHeadingWrapper >
        
          <RoadMapHeadingWrapperD1 />
          <RoadMapHeadingWrapperD2 style={{transform:" translate(0, 50px)"}}>
          <PageHeadingStyle style={{marginLeft:"0"}}>
          PROCESS
          <PageHeadingBorderStyle style={{width:"3vw"}} />
        </PageHeadingStyle>
            <RoadMapHeadingH style={{marginBottom:"0vw",marginTop:"0"}}>Our Process</RoadMapHeadingH>
            <RoadMapParagraphWrapper>
              The oil is produced at the source using a robust and
              modernsolvent-free extraction system, designed in conjunction with
              Texarome's technology to obtain a high quality product.
            </RoadMapParagraphWrapper>
          </RoadMapHeadingWrapperD2>
          <RoadMapHeadingWrapperD3 />
        </RoadMapHeadingWrapper>

        <RoadMapDiv>
          <RoadMapGenticD1>
            <RoadMapDivImg>
              <img style={ImgStyle} src={Img1} alt="" />
            </RoadMapDivImg>
          </RoadMapGenticD1>
          <RoadMapGenticD2>
            <RoadMapContent>
              <RoadMapContentHeading>Genetics</RoadMapContentHeading>
              <RoadMapContentNumber>01</RoadMapContentNumber>
              <RoadMapContentParagraph>
                genetic hybridization, maximize terpene profiles of hempplant,
                minimize commonly known cannabinoids, uniquelydesigned to
                provide natural source of hemp EO to the F&F market. changing
                dna of plant to change course tosomething that has long term
                stability and unique application etc.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapGenticD2>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 2 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR>
            <RoadMapContentEleR>
              <RoadMapContentHeading>Farming</RoadMapContentHeading>
              <RoadMapContentNumber>02</RoadMapContentNumber>
              <RoadMapContentParagraph>
                Combining 30 years of niche farming knowledge from theregion, 10
                years worth of genetic development, along withcutting edge
                industrial tools, our professional farming team brings artisanal
                quality in volumes you can depend on.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img2} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 3 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img3} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL>
            <RoadMapContent>
              <RoadMapContentHeading>Processing</RoadMapContentHeading>
              <RoadMapContentNumber>03</RoadMapContentNumber>
              <RoadMapContentParagraph>
                The oil is produced at the source using a robust and modern
                solvent-free extraction system, designed in conjunction with
                Texarome's technology to obtain a high quality product.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 4 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR  style={{transform:" translate(48px, 8px)"}}>
            <RoadMapContentEleR>
              <RoadMapContentHeading>Rectification</RoadMapContentHeading>
              <RoadMapContentNumber>04</RoadMapContentNumber>
              <RoadMapContentParagraph>
                Low temperature molecular rectification preserves the fragile
                floral compounds specific to each varietal in order to remain
                true to the authentic aroma profile of the fresh flower.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img4} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 5 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img5} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL style={{transform:" translate(10px, 4px)"}}>
            <RoadMapContent>
              <RoadMapContentHeading>R & D </RoadMapContentHeading>
              <RoadMapContentNumber>05</RoadMapContentNumber>
              <RoadMapContentParagraph>
                At the forefront of R&D, our PHD chemists and engineers use
                GC-MS, HPLC, headspace, and preparative chromatography in our QC
                lab to guide the farming, production, and product development
                processes.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 6 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR style={{transform:" translate(40px, 1px)"}}>
            <RoadMapContentEleR>
              <RoadMapContentHeading>Regulatory</RoadMapContentHeading>
              <RoadMapContentNumber>06</RoadMapContentNumber>
              <RoadMapContentParagraph>
                The in-house legal team with more than x years of experience,
                guides the regulatory department while also employing 3rd-party
                oversight to guarantee the absence of pesticide, heavy metal,
                residual solvent, and other regulated contaminants.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img6} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 7 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img7} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL style={{transform:"translate(0px,-2px)",borderRadius: '30px 0px 0px 0px',height:"20vw",borderBottom:"none"}} >
            <RoadMapContent>
              <RoadMapContentHeading>Quality Assurance</RoadMapContentHeading>
              <RoadMapContentNumber>07</RoadMapContentNumber>
              <RoadMapContentParagraph>
                The products are contained in a refrigerated vault and can be
                traced down to the farm level by batch and specific rows and
                plots, according to the certified ISO 9000 protocol.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>
      </RoadMapStyle>
    </>
  );
};

export default roadMap;
