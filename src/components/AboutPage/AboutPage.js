import React from 'react';
import './style.css';
import dp from '../../static/mainPhoto.jpg';

function Aboutpage() {
  return (
    <div
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
        Varanasi. I love all things tech. I believe in writing clean and elegant
        code while providing a captivating experience to users. I'm also a firm
        open-source devotee and like contributing to open-source projects. Apart
        from all this in my free time, I love debating, gaming, or scrolling
        through IMDb to find the next best thing to watch.
      </p>
    </div>
  );
}

export default Aboutpage;
