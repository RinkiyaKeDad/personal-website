import React from 'react';
import BackgroundNew from './BackgroundNew/BackgroundNew';
import FrontPage from './FrontPage/FrontPage';
import AboutPage from './AboutPage/AboutPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import SkillsPage from './SkillsPage/SkillsPage';

import React from 'react';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BackgroundNew />
      <FrontPage />
      <AboutPage />
      {/*<SkillsPage />*/}
      <PortfolioPage />
    </div>
  );
}

export default App;
