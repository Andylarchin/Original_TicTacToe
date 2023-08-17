import React from 'react';
import { useState } from 'react';
import './style.css'

const index = () => {
  const [tableChoices, setTableChoices] = useState([1, 4, 7, 2, 5, 8, 3, 6, 9]);

  return (
    <div className="tableContainer">
      {tableChoices.map((cell, index) => {
        return <div className={`cell cell-${index}`}><p>{cell}</p></div>;
      })}
    </div>
  );
};

export default index;
