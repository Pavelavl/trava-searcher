import React from 'react';
import "./App.css";
import MainLogo from './components/MainLogo/MainLogo';
import Weather from './components/Weather/Weather';
import Geo from './components/Geo/Geo';
import SearchString from './components/SearchString/SearchString';

const App: React.FC = (): JSX.Element => {
  return (
    <main>
      <header>
        <MainLogo />
        <Weather />
        <Geo />
      </header>
      <SearchString />
    </main>
  );
}

export default App;
