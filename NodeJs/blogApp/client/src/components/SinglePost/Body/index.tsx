import React from "react";
import { BigHead } from "@bigheads/core";
import { faker } from '@faker-js/faker';
import {
  TitleContainer,
  PostBodyLeftConatiner,
  PostBodyLeftWrapper,
  PostBodyRightWrapper,
  PostBodyWrapper,
  ImgContainer,
  DescriptionConatiner,
  UserNameContainer,
  UserAvatar,
  UserName,
  PostImg,
} from "style/components/SinglePostStyle/PostBodyStyle";
const url="https://w0.peakpx.com/wallpaper/638/643/HD-wallpaper-babasaheb-ambedkar-painting-babasaheb-ambedkar-painting-art-work-constitution-doctor.jpg";

const SinglePostBody = () => {
  return (
    <>
      <PostBodyWrapper>
        <PostBodyLeftWrapper>
          <PostBodyLeftConatiner>
            <UserNameContainer>
              <UserAvatar>
                <BigHead
                  accessory="none"
                  body="chest"
                  circleColor="blue"
                  clothing="tankTop"
                  clothingColor="blue"
                  eyebrows="serious"
                  eyes="simple"
                  faceMask={false}
                  faceMaskColor="white"
                  facialHair="none3"
                  graphic="none"
                  hair="afro"
                  hairColor="black"
                  hat="beanie"
                  hatColor="red"
                  lashes
                  lipColor="green"
                  mask
                  mouth="openSmile"
                  skinTone="light"
                />
              </UserAvatar>
              <UserName>{faker.internet.userName()}</UserName>
            </UserNameContainer>
            <TitleContainer>{faker.lorem.sentence()}{faker.lorem.sentence()}</TitleContainer>
            <ImgContainer>
              <PostImg
                src={url}
              alt={"Image"}
              />
            </ImgContainer>
            <DescriptionConatiner>{faker.lorem.paragraphs()}{}{faker.lorem.paragraphs()}</DescriptionConatiner>
            <DescriptionConatiner>{faker.lorem.paragraphs()}{}{faker.lorem.paragraphs()}</DescriptionConatiner>
            <DescriptionConatiner>{faker.lorem.paragraphs()}{}{faker.lorem.paragraphs()}</DescriptionConatiner>
          </PostBodyLeftConatiner>
        </PostBodyLeftWrapper>
        <PostBodyRightWrapper>bye</PostBodyRightWrapper>
      </PostBodyWrapper>
    </>
  );
};

export default SinglePostBody;
