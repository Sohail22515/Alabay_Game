import React, { useState }from 'react' 
import '../styles/merchandise.scss';
import backgroundImageOne from '../Assets/Alabay Merch/pink tee bck.png';
import frontImageOne from '../Assets/Alabay Merch/pink tshirt.png';
import backgroundImageTwo from '../Assets/Alabay Merch/black hoodie bck.png';
import frontImageTwo from '../Assets/Alabay Merch/black hoodie.png';
import backgroundImageThree from '../Assets/Alabay Merch/blue cap bck.png';
import frontImageThree from '../Assets/Alabay Merch/cap mockup.png';
import backgroundImageFour from '../Assets/Alabay Merch/yellow tee bck.png';
import frontImageFour from '../Assets/Alabay Merch/yellow tshirt.png';
const Merchandise = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
      {
        bgImage:backgroundImageOne,
        frontImage: frontImageOne,
      },
      {
        bgImage:backgroundImageTwo,
        frontImage:frontImageTwo,
      },

      {
        bgImage:backgroundImageThree,
        frontImage:frontImageThree,
      },

      {
        bgImage:backgroundImageFour,
        frontImage:frontImageFour,
      },
      // Add more image objects here
    ];
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

  return (
    <div className="carousel-container">
      <h1 className="title">MERCHANDISE</h1>
      <div className="carousel">
        <div className="carousel-background" style={{ backgroundImage: `url(${images[currentIndex].bgImage})` }}>
          <img src={images[currentIndex].frontImage} alt="Product" className="carousel-front" />
        </div>
        <div className="carousel-controls">
          <button className="arrow left-arrow" onClick={handlePrev}>&lt;</button>
          <button className="arrow right-arrow" onClick={handleNext}>&gt;</button>
        </div>
        <div className="carousel-content">
            <p className="carousel-text">Coming Soon...</p>
            <button className="discover-button">Discover</button>
        </div>
      </div>
    </div>
  )
}

export default Merchandise