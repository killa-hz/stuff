import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BodyText from './components/BodyText';
import InputBox from './components/InputBox';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BodyText />
      <InputBox />
    </div>
  );
}

export default App;
