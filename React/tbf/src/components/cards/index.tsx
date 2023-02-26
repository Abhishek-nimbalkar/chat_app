
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Img1 from "assets/cardImages/cardImage1.png"
import Img2 from "assets/cardImages/cardImage2.png"
import Img3 from "assets/cardImages/cardImage3.png"




const responsive = {
    0: { 
        items: 1,
        itemsFit: 'contain'
    },
    568: { 
        items: 2,
        itemsFit: 'contain'
    },
    1024: {
        items: 2.5, 
        itemsFit: 'contain'
    },
};

const items = [
    <img src={Img1} alt="" />,
    <img src={Img2} alt="" />,
    <img src={Img3} alt="" />
];

const Cards = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
    />
);

export default Cards