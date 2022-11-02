import React from 'react';
import "./App.css";
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path='/api' element={<Search />} />
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
