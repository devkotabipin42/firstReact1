import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Useeffect = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  useEffect(function(){
    console.log('useeffect chalrahahea')
  },[number1])
  return (
    <div>
      <h2 className="text-3xl  mt-10">{number1}</h2>
      <button
        onClick={() => {
          setNumber1(Math.floor(Math.random() * 100));
        }}
        className="bg-cyan-800 px-5 py-5 rounded active:scale-95"
      >
        Change Number1
      </button>
      <h3 className="text-3xl  mt-10">{number2}</h3>
      <button onClick={() => {
          setNumber2(Math.floor(Math.random() * 100));
        }}
         className="bg-cyan-800 px-5 py-5 rounded active:scale-95">
        Change Number2
      </button>
      <h2 className="text-3xl  mt-10">{number3}</h2>
      <button onClick={() => {
          setNumber3(Math.floor(Math.random() * 100));
        }}
         className="bg-cyan-800 px-5 py-5 rounded active:scale-95">
        Change Number3
      </button>
    </div>
  );
};

export default Useeffect;
