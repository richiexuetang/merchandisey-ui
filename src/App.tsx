import React, { Suspense } from 'react';
import { GlobalStyle } from './styles/global';
import { Navbar } from './components/navbar';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Navbar />}></Route>
    </Routes>
  </Suspense>
);

export default App;
