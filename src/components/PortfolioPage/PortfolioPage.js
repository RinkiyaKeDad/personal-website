import React from 'react';
import './style.css';
import gitLogo from '../../static/githubRepo.png';

class App extends React.Component {
  render() {
    return (
      <div className='colorMe container'>
        <h1 style={{ marginTop: '1rem' }}>{'<Featured Projects/>'}</h1>
        <div
          className='insideContainer container'
          style={{ marginBottom: '1rem' }}
        >
          <div
            class='card text-center'
            style={{ width: '18rem', minHeight: '15rem' }}
          >
            <div class='card-body'>
              <h5 class='card-title'>Amazon Clone</h5>
              <a
                href='https://github.com/RinkiyaKeDad/amazon-clone-frontend'
                target='_blank'
              >
                <img
                  alt='GitHub Repo'
                  src={gitLogo}
                  style={{
                    width: '7.5rem',
                    height: '3.938rem',
                    margin: '0.313rem',
                    marginBottom: '0.625rem',
                  }}
                />
              </a>
              <p class='card-text'>
                Tools: React, Context API, Firebase Authentication
              </p>
              <a
                href='https://clone-569ab.web.app/'
                class='btn btn-primary'
                target='_blank'
              >
                See Deployed Version
              </a>
            </div>
          </div>
          <div
            class='card text-center'
            style={{ width: '18rem', minHeight: '15rem' }}
          >
            <div class='card-body'>
              <h5 class='card-title'>Jotter</h5>
              <a
                href='https://github.com/RinkiyaKeDad/jotter-frontend'
                target='_blank'
              >
                <img
                  alt='GitHub Repo'
                  src={gitLogo}
                  style={{
                    width: '7.5rem',
                    height: '3.938rem',
                    margin: '0.313rem',
                    marginBottom: '0.625rem',
                  }}
                />
              </a>
              <p class='card-text'>Tools: React, Express, MongoDB Atlas</p>
              <a
                href='https://jotter-arsh.netlify.app/'
                class='btn btn-primary'
                target='_blank'
              >
                See Deployed Version
              </a>
            </div>
          </div>

          <div
            class='card text-center'
            style={{ width: '18rem', minHeight: '15rem' }}
          >
            <div class='card-body'>
              <h5 class='card-title'>Other Projects</h5>
              <a href='https://github.com/RinkiyaKeDad' target='_blank'>
                <img
                  alt='GitHub Repo'
                  src={gitLogo}
                  style={{
                    width: '7.5rem',
                    height: '3.938rem',
                    margin: '0.313rem',
                    marginBottom: '0.625rem',
                  }}
                />
              </a>
              <p class='card-text'>
                Check out my Github Page to see other projects.
              </p>
              <a
                href='https://github.com/RinkiyaKeDad'
                class='btn btn-primary'
                target='_blank'
              >
                See My Repositories
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
