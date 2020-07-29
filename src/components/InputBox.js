import React, { useState } from 'react';

const InputBox = (props) => {
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onInput(input);
    setInput('');
  }

  return (
    <div className="inputContainer">
      <div className="inputBox">
        <form className="inputForm">
          <input
            className="input"
            type="text"
            placeholder="enter text here"
            onInput={handleInput}
            value={input}
          ></input>
          <button className="inputBtn" type="submit" onClick={handleSubmit}>
            Click here
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputBox;
