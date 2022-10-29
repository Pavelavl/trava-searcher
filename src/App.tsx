import React from 'react';
import "./App.css";
import MainLogo from './components/MainLogo/MainLogo';
import Weather from './components/Weather/Weather';
import Geo from './components/Geo/Geo';

function App() {
  return (
    <main>
      <div className="top">
        <header>
          <MainLogo />
          <Weather />
          <Geo />
        </header>
      </div>
    </main>
  );
}

export default App;
