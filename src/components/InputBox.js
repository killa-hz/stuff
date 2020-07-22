import React from 'react';

const InputBox = () => {
  return (
    <div className="inputContainer">
      <div className="inputBox">
        <form className="inputForm">
          <input
            className="input"
            type="text"
            placeholder="enter text here"
          ></input>
          <button className="inputBtn" type="submit">
            Click here
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputBox;
