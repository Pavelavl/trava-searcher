import React from 'react';
import "./Root.scss";
import Main from './Main/Main';
import Search from './Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
