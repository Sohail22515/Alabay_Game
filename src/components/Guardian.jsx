import React, {useState} from 'react'
import '../styles/gaurdian.scss';
import '../styles/gamediscription.scss';
import { FaPlay } from 'react-icons/fa';
import GameDescription from '../components/GameDiscription';
import GuradianOne from '../Assets/Alabay Games/Alabay Guard/image 1 alabay guard.png';
import GuardianTwo from '../Assets/Alabay Games/Alabay Guard/image 2 alabay guard.png';
import GuardianThree from '../Assets/Alabay Games/Alabay Guard/image 3 alabay guard.png';

const Guardian = () => {

    const [showDescription, setShowDescription] = useState(false);

    const handleScroll = () => {
      setShowDescription(!showDescription);
    };
  return (
    
    // <div className={`game-page ${showDescription ? 'scrolling' : ''}`}>
    //   <div className="content-section">
    //     <div className="play-button-container">
    //       <button className="play-button">Play</button>
    //     </div>
    //     <div className="game-cards">
    //       <div className="card">
    //         <img src="path_to_card_image_1" alt="Card 1" />
    //       </div>
    //       <div className="card">
    //         <img src="path_to_card_image_2" alt="Card 2" />
    //       </div>
    //       <div className="card">
    //         <img src="path_to_card_image_3" alt="Card 3" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className={`description-section ${showDescription ? 'visible' : ''}`}>
    //     <GameDescription />
    //     <div className="action-buttons">
    //       <button className="play-button">Play</button>
    //       <button className="exit-button">Exit</button>
    //     </div>
    //   </div>

    //   <div className="scroll-indicator" onClick={handleScroll}>
    //     <span>Scroll</span>
    //   </div>
    // </div>

    <div className="game-page">
      <div className="content-section">
        <h1>ALABAY GUARDIAN</h1>
        <h3>SHPEHERD OF THE STEPPES</h3>
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
        </div>
      </div>

      <div className="description-section">
        <GameDescription/>
      </div>
    </div>
  )
}

export default Guardian