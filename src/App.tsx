import React, { Suspense } from 'react';
import { GlobalStyle } from './styles/global';
import { HomePage } from './components/home';
import { Navbar } from './components/navbar';
import { MenuBar } from './components/menubar';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  </Suspense>
);

export default App;
