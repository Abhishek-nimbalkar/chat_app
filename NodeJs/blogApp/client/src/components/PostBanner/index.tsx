import React from "react";
import {
  BannerContainer,
  BannerLeftConatiner,
  BannerLeftConatinerButton,
  BannerLeftContainerDescription,
  BannerLeftContainerHeading,
  BannerRightConatiner,
} from "style/components/PostBannerStyle";
import SvgComponent from "components/Svgs";

const PostBanner = () => {
  return (
    <>
      <BannerContainer>
        <BannerLeftConatiner>
          <BannerLeftContainerHeading>Stay curious.</BannerLeftContainerHeading>
          <BannerLeftContainerDescription>
            Discover stories, thinking, and expertise from writers on any topic.
          </BannerLeftContainerDescription>
          <BannerLeftConatinerButton>Start Reading</BannerLeftConatinerButton>
        </BannerLeftConatiner>
        <BannerRightConatiner>
          <SvgComponent />
        </BannerRightConatiner>
      </BannerContainer>
    </>
  );
};

export default PostBanner;
