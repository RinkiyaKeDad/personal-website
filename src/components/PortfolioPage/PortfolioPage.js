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
              <h5 class='card-title'>Headlines</h5>
              <a
                href='https://github.com/RinkiyaKeDad/headlines-backend'
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
              <p class='card-text'>Tech Used: React / Express / Node.js</p>
              <a
                href='https://headlines.netlify.app/'
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
              <h5 class='card-title'>500 Words</h5>
              <a
                href='https://github.com/RinkiyaKeDad/500Words-frontend'
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
              <p class='card-text'>Tech Used: MERN Stack </p>
              <a
                href='https://words-d5b2b.web.app/'
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
