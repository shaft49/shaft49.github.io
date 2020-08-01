import React from 'react';
import ParticlesBg from 'particles-bg'
import './App.css';
import Main from './components/main'

function App() {
  return (
    <div>
      <div id="particle"><ParticlesBg type="cobweb" bg={true} num={40} color="#000000"/></div>
      <Main/>
    </div>
  );
}

export default App;
