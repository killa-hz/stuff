import React from 'react';

const boxItem = (props) => {
  return (
    <div className="boxItemContainer">
      <div className="boxItem">
        <h3>{props.content}</h3>
      </div>
    </div>
  );
};

export default boxItem;
