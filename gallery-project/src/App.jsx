import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setuserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
     ` https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setuserData(response.data);
    console.log(response.data);
  };
  useEffect(function () {
    getData();
  }, [index]);
  let printUserData = "No user Available";
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div>
              <img
                className="h-[400px] w-[400px] object-cover object-center flex rounded-3xl border-2 border-red-700"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h1 className="text-3xl bg-red-800 rounded ">{elem.author}</h1>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen text-white overflow-auto ">
      <button
        onClick={() => {
          getData();
        }}
        className="bg-gray-600 text-white font-bold text-3xl px-3 py-4 rounded-3xl m-5 active:scale-95"
      >
        get Data
      </button>
      <div className="flex flex-wrap justify-center gap-4 p-5 ">
        {printUserData}
      </div>
      <div className="flex justify-evenly items-centerp-4 text-3xl mb-6  ">
        <button className="bg-amber-700 px-4 py-2 rounded-3xl active:scale-95 cursor-pointer text-black font-semibold" onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}>
          Prev
        </button>
        <button className="bg-amber-700 px-4 py-2 rounded-3xl active:scale-95 cursor-pointer font-semibold" onClick={()=>{
          setIndex(index+1)
        }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
