import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgFour from '../Assets/DALL˙E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png';
import ImgFive  from '../Assets/DALL˙E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png';
import ImgSix from '../Assets/DALL˙E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png';
import '../styles/corouselBox.scss';


const CarouselThree = () => {
  return (
    <div className="imagebox"> {/* Added a box around the carousel images */}
      <Carousel
        //autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={ImgFour} alt="Third" />
        </div>
        <div>
          <img src={ImgFive} alt="Third" />
        </div>
        <div>
          <img src={ImgSix} alt="Third" />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselThree