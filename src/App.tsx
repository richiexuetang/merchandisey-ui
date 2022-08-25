import React from 'react';
import { GlobalStyle } from './styles/global';
import { Navbar } from './components';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Navbar />
  </>
);

export default App;
