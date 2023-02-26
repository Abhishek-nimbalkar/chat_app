import React from "react";
import {
  CollabHeadingStyle,
  CollabLeftStyle,
  CollabParagrphStyle,
  CollabStyle,
} from "styles/components/Collab";
import Img from "assets/images/collab.png";

const Collab = () => {
  return (
    <CollabStyle>
      <CollabLeftStyle>
        <CollabHeadingStyle>In Collaboration with</CollabHeadingStyle>
        <CollabParagrphStyle>
          Amet minim mollit non deserunt ullamco est sit aliqua.Amet minim
          mollit non deserunt ullamco est sit aliqua.Amet minim mollit non
          deserunt ullamco est sit aliqua.
        </CollabParagrphStyle>
      </CollabLeftStyle>
      <CollabParagrphStyle>
        <img src={Img} alt="" />
      </CollabParagrphStyle>
    </CollabStyle>
  );
};

export default Collab;
