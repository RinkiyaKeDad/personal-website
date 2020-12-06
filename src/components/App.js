import React from 'react';
import BackgroundNew from './BackgroundNew/BackgroundNew';
import FrontPage from './FrontPage/FrontPage';
import AboutPage from './AboutPage/AboutPage';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BackgroundNew />
      <FrontPage />
      <AboutPage />
    </div>
  );
}

export default App;
