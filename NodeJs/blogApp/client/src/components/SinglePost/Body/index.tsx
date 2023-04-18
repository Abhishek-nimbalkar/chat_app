import React, { useEffect, useState } from "react";
import { BigHead } from "@bigheads/core";
import { faker } from "@faker-js/faker";
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

import getUser from "utils/getUser";
import CommentAndLike from "components/CommentAndLike";
// const urlImg =
//   "https://w0.peakpx.com/wallpaper/638/643/HD-wallpaper-babasaheb-ambedkar-painting-babasaheb-ambedkar-painting-art-work-constitution-doctor.jpg";

const SinglePostBody = ({
  _id,
  userEmail,
  title,
  body,
  comments,
  images,
  likes,
}: {
  _id: any;
  title: string;
  body: string;
  comments: [any];
  images: [string];
  likes: string;
  userEmail: string;
}) => {
  // console.log(userEmail);
  const [userName, setUserName] = useState<any>();
  useEffect(() => {
    getUser("users/getUser/" + userEmail).then((data) => {
      setUserName(data.user);
      // console.log(data);
    });
  }, []);
  // console.log(body);
  const arr = body?.split(".");
  // console.log(array[0]);

  const newArray = (arr: any, chunkSize: number) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };
  const newBody = newArray(arr, 20);
  // console.log(newBody.toString());

  // console.log('data', data)
  let i = 0;
  const upDateI = () => {
    i++;
    return i;
  };

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
              <UserName>{userName?.userName}</UserName>
            </UserNameContainer>
            <TitleContainer>{title}</TitleContainer>
            <ImgContainer>
              <PostImg src={images[0]} alt={"Image"} />
            </ImgContainer>
            {newBody.map((ele: any, key: number) => {
              if (key % 2 === 0 && key !== 0 && key <= images.length + 1) {
                let i = upDateI();
                return [
                  <PostImg key={key} src={images[i]} alt={"Hello"} />,
                  <DescriptionConatiner key={key+1}>{ele.toString()}</DescriptionConatiner>,
                ];
              } else {
                return (
                  <DescriptionConatiner key={key}>{ele.toString()}</DescriptionConatiner>
                );
              }
            })}
          </PostBodyLeftConatiner>
        </PostBodyLeftWrapper>
        <PostBodyRightWrapper>bye</PostBodyRightWrapper>
        <CommentAndLike comments={comments} likes={likes} />
      </PostBodyWrapper>
    </>
  );
};

export default SinglePostBody;
