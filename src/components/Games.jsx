import React, { useState }from 'react' 
import '../styles/game.scss';
import backgroundImageOne from '../Assets/Alabay Games/alabay guard prev 2 1.png';
import backgroundImageTwo from '../Assets/Alabay Games/alabay lost heritage prev 1.png';
import { useNavigate } from 'react-router-dom';

const Games = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
      {
        bgImage:backgroundImageOne,
      },
      {
        bgImage:backgroundImageTwo,
      },
      // Add more image objects here
    ];
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      //console.log(currentIndex);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
       
      );
      //console.log(currentIndex);
    };

    const navigate = useNavigate()
    const handleButtonClick = () => {
      if(currentIndex==0){navigate('/games'); } // Replace '/new-page' with the desired path}
      else{navigate('/heritage');}
    };

  return (
    <div className="game-container">
      <h1 className="gametitle">GAMES</h1>
      <h1>Stay turned for upcoming games!</h1>
      <div className="game_carousel">
        <div className="game_carousel-background" style={{ backgroundImage: `url(${images[currentIndex].bgImage})` }}>
         
        </div>
        <div className="game_carousel-controls">
          <button className="game_arrow left-arrow" onClick={handlePrev}>&lt;</button>
          <button className="game_arrow right-arrow" onClick={handleNext}>&gt;</button>
        </div>
        <div className="game_carousel-content">
            <button className="game_discover-button" onClick={handleButtonClick}>Discover
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 59 52" fill="none">
            <path d="M4 22.5C2.067 22.5 0.5 24.067 0.5 26C0.5 27.933 2.067 29.5 4 29.5V22.5ZM57.4749 28.4749C58.8417 27.108 58.8417 24.892 57.4749 23.5251L35.201 1.25126C33.8342 -0.115572 31.6181 -0.115572 30.2513 1.25126C28.8844 2.6181 28.8844 4.83418 30.2513 6.20101L50.0503 26L30.2513 45.799C28.8844 47.1658 28.8844 49.3819 30.2513 50.7487C31.6181 52.1156 33.8342 52.1156 35.201 50.7487L57.4749 28.4749ZM4 29.5H55V22.5H4V29.5Z" fill="white"/>
            </svg>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Games