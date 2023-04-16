import React, { useContext } from "react";
import {
  BannerContainer,
  BannerLeftConatiner,
  BannerLeftConatinerButton,
  BannerLeftContainerDescription,
  BannerLeftContainerHeading,
  BannerRightConatiner,
} from "style/components/PostBannerStyle";
import SvgComponent from "components/Svgs";
import { modalState } from "App";

const PostBanner = () => {
  const modalFun = useContext(modalState);
  return (
    <>
      <BannerContainer>
        <BannerLeftConatiner>
          <BannerLeftContainerHeading>Stay curious.</BannerLeftContainerHeading>
          <BannerLeftContainerDescription>
            Discover stories, thinking, and expertise from writers on any topic.
          </BannerLeftContainerDescription>
          <BannerLeftConatinerButton
            onClick={() => {
              modalFun.openModal("signup");
            }}
          >
            Start Reading
          </BannerLeftConatinerButton>
        </BannerLeftConatiner>
        <BannerRightConatiner>
          <SvgComponent />
        </BannerRightConatiner>
      </BannerContainer>
    </>
  );
};

export default PostBanner;
