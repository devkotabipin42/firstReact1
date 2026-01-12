import React from "react";
import { useState } from "react";

const Todo = () => {
  const [tittle, setTittle] = useState("");
  const [age, setAge] = useState("");
  const [own, setOwn] = useState("");
  const [allUser, setallUser] = useState([]);
  function clickeble(e) {
    e.preventDefault();
    const OldUser = [...allUser];
    OldUser.push({ age, tittle, own });
    setallUser(OldUser);
    console.log(OldUser);

    setTittle("");
    setAge("");
    setOwn("");
  }

  return (
    <div className="h-[90vh] w-screen flex  bg-gray-800  overflow-y-auto flex-col lg:flex-row  lg:h-screen sm:h:1/2 sm:w-screen sm-w-1/2 justify-evenly pt-7 text-2xl">
      <div className="bg-amber-900 p-6 w-fit rounded-3xl"> 
          <form
            onSubmit={(e) => {
              clickeble(e);
            }}
            className="flex  flex-col items-center h-fit w-fit gap-5 flex-wrap"
          >
            <input
              value={tittle}
              required
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setTittle(e.target.value);
              }}
              className="border-2 bg-cyan-100 p-3"
            />
            <input
              value={age}
              type="text"
              placeholder="Age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              className="border-2 bg-cyan-100 p-3"
            />
            <input
              value={own}
              type="text"
              placeholder="WRITE SOME THING"
              onChange={(e) => {
                setOwn(e.target.value);
              }}
              className="border-2 bg-cyan-100 p-3"
            />
            <button
              onClick={(e) => {
                clickeble(e);
              }}
              className="border-2 border-amber-500 h-fit rounded-3xl p-2 text-[20px] active:scale-95"
            >
              CLICK
            </button>
          </form>
       
      </div>
      <div className="flex gap-3 mt-3 justify-center flex-wrap">
      {allUser.map(function (elem, idx) {
        return (
          <div
            key={idx}
            className="h-[300px] w-[300px] rounded-3xl p-3 text-3xl flex flex-col  items-center  bg-amber-700"
          >
            <h1>{"Name" + " : " + elem.tittle}</h1>
            <h1>{"Age" + " : " + elem.age}</h1>
            <h1>{"Ownword" + " : " + elem.own}</h1>
          </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default Todo;
