import React from 'react';
import './style.css';
import Typical from 'react-typical';
import { SocialIcon } from 'react-social-icons';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMediumSquare,
  AiOutlineTwitter,
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
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href='https://github.com/RinkiyaKeDad'
                target='_blank'
              >
                <AiFillGithub />
              </a>
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>
          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href='https://www.linkedin.com/in/arsh4/'
                target='_blank'
              >
                <AiFillLinkedin />
              </a>
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href='https://www.instagram.com/rinkiya.ke.dad/'
                target='_blank'
              >
                <AiFillInstagram />
              </a>
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href='https://medium.com/@rinkiyakedad'
                target='_blank'
              >
                <AiFillMediumSquare />
              </a>
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href='https://dev.to/rinkiyakedad'
                target='_blank'
              >
                <FaDev />
              </a>
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href='https://github.com/RinkiyaKeDad'
                target='_blank'
              >
                <FaDeviantart />
              </a>
            </div>
          </IconContext.Provider>
          <div style={{ width: '.3rem' }}></div>

          <IconContext.Provider value={{ size: '3.5em' }}>
            <div>
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href='https://twitter.com/rinkiyakedad'
                target='_blank'
              >
                <AiOutlineTwitter />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
