import React from 'react'
import { FaPlay } from 'react-icons/fa';
import '../styles/heriatagediscription.scss';
import { useNavigate } from 'react-router-dom';

const HeritageDescription = () => {

    const navigate = useNavigate()
    const handleButtonClick = () => {
      navigate('/');  // Replace '/new-page' with the desired path
    };

  return (
     <div className="game-description-page">
      <div className="background-image"></div> {/* Large background image */}
      <div className="content">
        <h1 className="main-heading">ALABAY HERITAGE</h1> {/* Main Heading */}
        <div className="sub-headings">
          <h3 className="sub-heading">THE LOST ADVENTRUE</h3> {/* First Subheading */}
          <h3 className="sub-heading">Features</h3> {/* Second Subheading */}
        </div>
        <p className="description">
          Explore a varitey of landscapes, includin <span className="highlight">mountains</span> 
          ,<span className="highlight">deserts</span>,ans<span className="highlight">ancient ruins</span>. 
        </p>

        <p className="description">
          Use the Alabay's <span className="highlight">abilities</span> to solve
          <span className="highlight">puzzles</span> that involve movining objects, activating  mechanisms, or finding hidden clues.
        </p>

        <p className="description">
          Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.
        </p>

        <p className="description">
          Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
        </p>
        <p className="description">
          Challenge Modes:
          <br></br>
          -<span className="special-word">Time Trials</span>:Compete in special timed challenges where the Alabai must navigate through complex mazes or
          complete puzzles within a time limit.
          <br></br>
          -<span className="special-word">Exploring Mastery</span>:A mode that rewards players for fully exploring every nook and cranny of the game’s world,
          uncovering all secrets.
        </p>

        <div className="action-buttons">
          <button className="play-button">
            <FaPlay className="play-icon" /> Play
          </button>
          <button className="exit-button" onClick={handleButtonClick}>Exit</button>
        </div>
      </div>
    </div>
  )
}

export default HeritageDescription