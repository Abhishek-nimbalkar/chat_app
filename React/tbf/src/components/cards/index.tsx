// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import Img1 from "assets/cardImages/cardImage1.png";
import Img2 from "assets/cardImages/cardImage2.png";
import Img3 from "assets/cardImages/cardImage3.png";



// const responsive = {
//     0: {
//         items: 1,
//         itemsFit: 'contain'
//     },
//     568: {
//         items: 2,
//         itemsFit: 'contain'
//     },
//     1024: {
//         items: 2.5,
//         itemsFit: 'fill'
//     },
// };

// const items = [
//     <img src={Img1} alt="" />,
//     <img src={Img2} alt="" />,
//     <img src={Img3} alt="" />
// ];

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
  };

  return (
    <div style={{width:"100%"}}>
      <Slider {...settings}>
        <div>
          <img src={Img1} alt="" />
        </div>
        <div>
          <img src={Img2} alt="" />
        </div>
        <div>
          <img src={Img3} alt="" />
        </div>
      </Slider>
    </div>
  );
  // <AliceCarousel

  //     mouseTracking
  //     items={items}
  //     responsive={responsive}
  //     autoPlay={true}
  //     disableButtonsControls={true}
  // />
};

export default Cards;
