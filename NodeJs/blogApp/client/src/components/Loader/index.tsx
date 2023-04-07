import React from "react";
import { LoaderContainer } from "style/components/LoaderStyle";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <LoaderContainer>
      <FadeLoader
        color="#d68c36"
        height={20}
        margin={10}
        radius={50}
        speedMultiplier={1.5}
        width={2}
      />
      <h1>Loading .......</h1>
    </LoaderContainer>
  );
};

export default Loader;
