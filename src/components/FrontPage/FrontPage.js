import React from 'react';
import './style.css';
import Typical from 'react-typical';

function Frontpage() {
  return (
    <div className='container'>
      <div className='positioning'>
        <div>
          <h1 style={{ fontSize: '6rem' }}>Hello World, I'm Arsh.</h1>
        </div>
        <div>
          <h1>
            I'm{' '}
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                'a Full Stack Developer.',
                1000,
                'a Designer.',
                1000,
                'an Open Source Enthusiast.',
                1000,
                'an Orator.',
                1000,
                'a Gamer.',
                1000,
                'a Movie Buff.',
                1000,
              ]}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
