import React from 'react';
import './style.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import dp from '../../static/mainPhoto.jpg';
import { SocialIcon } from 'react-social-icons';

function Aboutpage() {
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection='horizontal' // horizontal or vertical
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
      }}
      class='container'
    >
      <FrontSide
        style={{
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          minHeight: '100vh',
          minWidth: '100vw',
        }}
      >
        <img src={dp} alt='Avatar' class='avatar' />
        <div style={{ height: '2rem' }}></div>
        <h1>About Me</h1>
        <div style={{ height: '1.5rem' }}></div>

        <p>
          I'm a freelance dev currently pursuing engineering from IIT (BHU),
          Varanasi. I love all things tech. I believe in writing clean and
          elegant code while providing a captivating experience to users. I'm
          also a firm open-source devotee and like contributing to open-source
          projects. Apart from all this in my free time, I love debating,
          gaming, or scrolling through IMDb to find the next best thing to
          watch.
          <br />
          <mark>P.S. Tap this page to look at ways to connect.</mark>
        </p>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: 'white',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          minHeight: '100vh',
          minWidth: '100vw',
        }}
      >
        <h1>Find Me On</h1>
        <div class='socials-style'>
          <div>
            <SocialIcon
              url='https://github.com/RinkiyaKeDad'
              style={{ height: 55, width: 55 }}
            />
          </div>
          <div style={{ width: '.3rem' }}></div>
          <div>
            <SocialIcon
              url='https://www.linkedin.com/in/arsh4/'
              style={{ height: 55, width: 55 }}
            />
          </div>
          <div style={{ width: '.3rem' }}></div>

          <div>
            <SocialIcon
              url='https://codepen.io/RinkiyaKeDad'
              style={{ height: 55, width: 55 }}
            />
          </div>
          <div style={{ width: '.3rem' }}></div>

          <div>
            <SocialIcon
              url='https://www.facebook.com/rinkiya.ke.dad/'
              style={{ height: 55, width: 55 }}
            />
          </div>
        </div>
      </BackSide>
    </Flippy>
  );
}

export default Aboutpage;
