import React from 'react';
import BackgroundNew from './BackgroundNew/BackgroundNew';
import FrontPage from './FrontPage/FrontPage';
import AboutPage from './AboutPage/AboutPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';

class App extends React.Component {
  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <BackgroundNew />
        <FrontPage />
        <AboutPage />
        <PortfolioPage />
      </div>
    );
  }
}

export default App;
