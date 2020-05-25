import React from 'react';
import './style.css';
import Typical from 'react-typical';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='positioning'>
          <div>
            <h1 style={{ fontSize: '6rem' }}>Hello World, I'm Arsh.</h1>
          </div>
          <div>
            <h1>
              I'm a{' '}
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  'Full Stack Developer.',
                  1000,
                  'Designer.',
                  1000,
                  'Open Source Enthusiast.',
                  1000,
                  'Orator.',
                  1000,
                  'Gamer.',
                  1000,
                  'Movie Buff.',
                  1000,
                ]}
              />
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
