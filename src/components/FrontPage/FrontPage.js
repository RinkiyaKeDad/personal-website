import React from 'react';
import './style.css';
import Typical from 'react-typical';
import { SocialIcon } from 'react-social-icons';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { FaDev, FaDeviantart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

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
                'a Developer.',
                1000,
                'a Designer.',
                1000,
                'a Writer.',
                1000,
                'an Open Source Enthusiast.',
                1000,
              ]}
            />
          </h1>
        </div>

        <div class='socials-style'>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <AiFillGithub />
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <AiFillLinkedin />
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <AiFillInstagram />
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <AiFillMediumSquare />
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <FaDev />
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <FaDeviantart />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
