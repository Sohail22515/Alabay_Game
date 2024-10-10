import React, {useState}from 'react'
import '../styles/heritage.scss';
import { FaPlay } from 'react-icons/fa';
import GuradianOne from '../Assets/Alabay Games/Alabay Adventure - The Lost Heritage/overview.png';
import GuardianTwo from '../Assets/Alabay Games/Alabay Adventure - The Lost Heritage/Abilities.png';
import GuardianThree from '../Assets/Alabay Games/Alabay Adventure - The Lost Heritage/artifacts.png';
import GuardianFour from '../Assets/Alabay Games/Alabay Adventure - The Lost Heritage/locations preview.png';
import HeritageDescription from '../components/HeritageDescription';


const Heritage = () => {

    const [showDescription, setShowDescription] = useState(false);

    const handleScroll = () => {
      setShowDescription(!showDescription);
    };
  return (
    <div 
        className="heritage_game-page" 
        >
      <div className="content-section">
        <h1>ALABAY HERITAGE</h1>
        <h3>THE LOST ADVENTRUE</h3>
        <p>
        Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. 
        </p>
        <div className="play-button-container">
          <button className="play-button">
            <FaPlay className="play-icon" /> Play
          </button>
        </div>
        <div className="game-cards">
          <div className="game-preview-heading">
            <h2>GAME</h2>
            <p>PREVIEW</p>
        </div>
      
          <div className="card">
            <img src={GuradianOne} alt="Card 1" />
          </div>
          <div className="card">
            <img src={GuardianTwo} alt="Card 2" />
          </div>
          <div className="card">
            <img src={GuardianThree} alt="Card 3" />
          </div>
          <div className="card">
            <img src={GuardianFour} alt="Card 4" />
          </div>
        </div>
      </div>

      <div className="description-section">
        <HeritageDescription/>
      </div>
    </div>
  
  )
}

export default Heritage