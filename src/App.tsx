import React from 'react';

import Routes from './routes'
import Header from './components/Header'
import './styles/global.css'

function App() {
  return (
    <div id="app">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;