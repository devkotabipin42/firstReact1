import React from "react";
import { useState } from "react";
import Cards from "./component/Cards";

const App = () => {
  const [uUserName, setUserName] = useState("");
  const [iImageUrl, setImageUrl] = useState("");
  const [qQualify, setQualify] = useState("");
  const [oOthers, setOthers] = useState("");

  const localData = JSON.parse(localStorage.getItem('all-users'))|| []

  const [allUsers, setallUsers] = useState(localData);

  const submitHandler = (e) => {
    e.preventDefault();
    const oldUser = [...allUsers];
    oldUser.push({ uUserName, iImageUrl, qQualify, oOthers });
    setallUsers(oldUser)
    localStorage.setItem('all-users',JSON.stringify(oldUser))

    setImageUrl("");
    setUserName("");
    setOthers("");
    setQualify("");
  };

   const deleteHandler = (idx)=>{
    const copyUser = [...allUsers]
    const conf = confirm('Are you sure want to delete this element')
    if(conf){
      copyUser.splice(idx,1)
    }else{
      alert('element Not deleted')
    }
    setallUsers(copyUser)
    localStorage.setItem('all-users',JSON.stringify(copyUser))

   } 
  
  return (
    <div className="h-screen  bg-black text-white p-5 ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  flex-wrap"
      >
        <input
          type="text"
          value={uUserName}
          placeholder="Write Name"
          className="border-2 border-blue-900 lg:w-[48%] text-xl rounded px-3 py-3 m-2 font-semibold"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          type="text"
          value={iImageUrl}
          placeholder="Image url"
          className="border-2 border-blue-900 lg:w-[48%] rounded px-3 text-xl py-3 m-2 font-semibold"
          onChange={(event) => {
            setImageUrl(event.target.value);
          }}
        />
        <input
          type="text"
          value={qQualify}
          placeholder="Qulification"
          className="border-2 border-blue-900 lg:w-[48%] rounded px-3 text-xl py-3 m-2 font-semibold"
          onChange={(event) => {
            setQualify(event.target.value);
          }}
        />
        <input
          type="text"
          value={oOthers}
          placeholder="Other"
          className="border-2 border-blue-900 lg:w-[48%] rounded px-3 text-xl py-3 m-2 font-semibold"
          onChange={(event) => {
            setOthers(event.target.value);
          }}
        />
        <button className="lg:w-[97%] h-fit bg-gray-700 px-1 ml-2 py-4 rounded font-semibold  text-xl active:scale-95 active:bg-caret-gray-400 ">
          Submit
        </button>
      </form>
      <div className="px-2 py-10 flex flex-wrap justify-center gap-3 text-white font-bold">
        {allUsers.map(function (elem, idx) {
          return <Cards idx={idx} elem ={elem} deleteHandler={deleteHandler}/>
        })}
      </div>
    </div>
  );
};

export default App;
