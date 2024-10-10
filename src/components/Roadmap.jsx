import React from 'react';
import '../styles/roadmap.scss'; // Assuming you have a CSS file for styling
import first from '../Assets/Alabay Games/artifacts 2.png';
import second from '../Assets/Alabay Games/Abilities 2.png';
import third from '../Assets/Alabay Games/image 3 alabay guard 2.png';
const Roadmap = () => {
  return (
    <>
    <div className='heading'>
      <h1>GAME</h1>  <p>PREVIEWS</p>
    </div>
    <div className="roadmap">
      
      <div className="roadmap-card">
        <div className="card-image">
          <img src={first} alt="Community Building" />
        </div>
      </div>

      <div className="roadmap-card">
        <div className="card-image">
          <img src={second} alt="Merchandise Store" />
        </div>
      </div>

      <div className="roadmap-card">
        <div className="card-image">
          <img src={third} alt="Community Events" />
        </div>
      </div>

    </div>
    </>
  );
};

export default Roadmap;
