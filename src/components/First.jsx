import React,{ useState} from 'react'
import '../styles/app.scss';
import '../styles/home2.scss';
import '../styles/home3.scss';
import '../styles/home4.scss';
import '../styles/roadmap.scss';
import '../styles/corousel.scss';
import '../styles/home5.scss';
import '../styles/socialmedia.scss';

import CarouselOne from './CarouselOne';
import CarouselTwo from './CarouselTwo';
import CarouselThree from './CarouselThree';
import Merchandise from './Merchandise';
import Games from './Games';
import AlabyImage from '../Assets/DALL˙E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png';
import ImgHome3 from '../Assets/DALL˙E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 2.png';
import ImgRoadMap from '../Assets/DALL˙E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png';
import CardOne from '../Assets/DALL˙E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png';
import CardTwo from '../Assets/DALL˙E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png';
import CardThree from '../Assets/DALL˙E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png';
import CardFour from '../Assets/DALL˙E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png';
import CardSix from '../Assets/DALL˙E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png';
import CardFive from '../Assets/DALL˙E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png';
import Roadmap from './Roadmap';

import { RiTwitterXLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
const First = () => {

    const [activeCarousel, setActiveCarousel] = useState(2);
  

    return (
        <>
          <div className='home1' id='home1'>
            <h1>WELCOME TO ALABAY WORLD</h1>
            <main>
              <p>WHERE THE <span>LEGENDAY CNETRAL ASIAN SHEPHERD DOG</span> MEETS A NEW-AGE ADVENTURE. <span>JOIN US</span> IN CELEBRATIN THE <span>STREGH</span>, <span>LOYALITY</span>, AND <span>MERITAGE</span> OF THE ALABAY BREED.</p>
            </main>      
          </div>
    
          <div className='home2' id='home2'>
    
            {/* <div></div> */}
    
            <div>
    
              <div className="image-container">
                <img src={AlabyImage} alt="Alabay Image" className="original-image" />
                <img src={AlabyImage} alt="Alabay Image Mirrored" className="mirrored-image" />
              </div>
            
              <div className='history'>
                <h1>Hisrory of <span>ALABAY</span></h1>
                <p>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
              </div>
            </div>
          </div>

          <div className='corousel'>
            <div>
            <button 
              onClick={() => setActiveCarousel(1)}
              style={{ color: activeCarousel === 1 ? '#FFA800' : 'black' }} // 'black' is the default color, change as needed
            >ALL
            </button>
            <button 
              onClick={() => setActiveCarousel(2)}
              style={{ color: activeCarousel === 2 ? '#FFA800' : 'black' }}
            >PHOTOS</button>
            <button 
              onClick={() => setActiveCarousel(3)}
              style={{ color: activeCarousel === 3 ? '#FFA800' : 'black' }}
            >VIDEOS</button>
            </div>
            
            {activeCarousel === 1 && <CarouselOne />}
            {activeCarousel === 2 && <CarouselTwo />}
            {activeCarousel === 3 && <CarouselThree />}

            
          </div>

          <div className='home3'>
            <h1>PROJECT VISION</h1>

            <div className="image-container">
                <img src={ImgHome3} alt="Alabay Image" className="original-image" />
                <img src={ImgHome3} alt="Alabay Image Mirrored" className="mirrored-image" />
            </div>

            <p>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>


          </div>


          <div className='home4'>
            <h1>ROAD MAP</h1>

            <div className='align'>
              <div className='text-container'>
                <p>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.</p>
                <p><span>Join us as we grow and achieve new heights.</span></p> 
              </div>
              <div className='image-container'>
                <img src={ImgRoadMap} alt='RoadMap' className='original-image' />
                <img src={ImgRoadMap} alt='RoadMap' className='mirrored-image' />
              </div>
            </div>
          </div>



          <div className="roadmap">
            <div className="roadmap-card">
              <div className="card-content" style={{ backgroundColor: '#FECF01' }}>
                <h2>Community Building</h2>
                <p>and Initial Launch</p>
              </div>
              <div className="card-image" style={{ backgroundColor: '#FECF01' }}>
                <img src={CardOne} alt="Community Building" />
              </div>
            </div>

            <div className="roadmap-card">
              <div className="card-content" style={{ backgroundColor: '#48D5F1' }}>
                <h2>Merchandise Store</h2>
                <p>Launch</p>
              </div>
              <div className="card-image" style={{ backgroundColor: '#48D5F1' }}>
                <img src={CardTwo} alt="Merchandise Store" />
              </div>
            </div>

            <div className="roadmap-card">
              <div className="card-content" style={{ backgroundColor: '#D67DFF' }}>
                <h2>Community Events</h2>
                <p>and contests</p>
              </div>
              <div className="card-image" style={{ backgroundColor: '#D67DFF' }}>
                <img src={CardThree} alt="Community Events" />
              </div>
            </div>

            <div className="roadmap-card">
              <div className="card-content" style={{ backgroundColor: '#C75D4D' }}>
                <h2>Expansion and New</h2>
                <p>Features</p>
              </div>
              <div className="card-image" style={{ backgroundColor: '#C75D4D' }}>
                <img src={CardFour} alt="Expansion Features" />
              </div>
              </div>
          </div>


          <div className='home5'>
          <h1>TOKENOMICS</h1>
            <div>
              <div className='data'>
                  <div>
                    <p>LIQUYIDITY</p>
                    <p>LOCKED</p>
                  </div>
                  <div>
                    <p>CONTRACT</p>
                    <p>RENOUNCED</p>
                  </div>
                  <div>
                    <p>TAXES</p>
                    <p>0%</p>
                  </div>
              </div>
              <div className='image'>
                <img src={CardFive} alt='Tokenomics'/>
              </div>
            </div>
          </div>

          <Merchandise/>
          <Games/>
          <Roadmap/>
         
         <div className='socialmedia'>
          <div className='he'>
            <h1>SOCIAL MEDIA LINKS</h1>
          </div>
          <div className='row'>
            <div>
              <div>
                <RiTwitterXLine className="icon"/>
                <h1>Twitter Link</h1>
              </div>
              <div> 
                <FaTelegram className="icon"/>
                <h1>Telegram Link</h1>
              </div>
            </div>
            <img src={CardSix} alt='socila_media'></img>
          </div>
         </div>

        </>
      )
}

export default First