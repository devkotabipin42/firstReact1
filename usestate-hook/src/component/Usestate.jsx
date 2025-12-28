import React, { useState } from "react";

const Usestate = () => {
 const [King, setKing] = useState('ganendra')
  const [queen, setqueen] = useState('parbati')

  const changeKing = () => {
    console.log("hello");
    setKing('rabi')
  };
  const changequeen = () => {
    console.log("hello");
    setqueen('balen')
  };
  return (
    <div className="ml-20">
      <h1 className="text-amber-100 text-4xl">{King} X {queen}</h1>
      <button
        onClick={changeKing}
        className="text-amber-100 bg-amber-700 rounded p"
      >
        clicked
      </button>
      <button
        onClick={changequeen}
        className="text-amber-100 bg-amber-700 rounded p"
      >
        clicked
      </button>
    </div>
  );
};

export default Usestate;
