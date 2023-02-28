import {
  TopImageStyle,
  TopImageHeadigStyle,
  TopImageParagraphStyle,
  TopImageBelowHeading,
} from "styles/components/topImageStyle";

const TopImage = () => {
  return (
    <>
   
      <TopImageStyle>
        <TopImageHeadigStyle>Hemp Flower Essential Oil</TopImageHeadigStyle>
        <TopImageParagraphStyle>
          Our goal in providing these products is to move into a long-term,
          sustainable market and become the leader in hemp for the Flavor &
          Fragrance industry.
        </TopImageParagraphStyle>
      </TopImageStyle>
      <TopImageBelowHeading style={{wordSpacing:"2vw"}}>
        Hemp Flower Essential Oil
      </TopImageBelowHeading>
      
    </>
  );
};

export default TopImage;
