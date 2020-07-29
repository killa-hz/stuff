import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BodyText from './components/BodyText';
import InputBox from './components/InputBox';
import BoxItem from './components/boxItem';

function App() {
  const [displayBoxes, setDisplayBoxes] = useState([]);

  function addNewItem(item) {
    setDisplayBoxes((prevState) => {
      return [...prevState, item];
    });
    console.log(displayBoxes);
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <BodyText />
      <InputBox onInput={addNewItem} />
      {displayBoxes.map((item, index) => (
        <BoxItem id={index} key={index} content={item} />
      ))}
    </div>
  );
}

export default App;
