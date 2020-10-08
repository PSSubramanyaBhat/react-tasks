import React from 'react';
// import logo from './logo.svg';
import logo from './sasuke.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="circular-image-avatar" alt="logo" width="200" height="250" />
        <p>
          My name is Sasuke Uchiha
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          href="https://www.youtube.com/watch?v=_ohUaEmkngs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Have a glimpse of me...
        </a>


      </header>
      
      
        <div
          class="border">
        </div>

        <div
          class="border" >
        </div>

        <div
          class="border">
        </div>
    </div>
  );
}

export default App;
